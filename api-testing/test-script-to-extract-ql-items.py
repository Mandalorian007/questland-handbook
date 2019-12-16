import requests
import json
from dataclasses import dataclass
from typing import List
from enum import Enum


def jprint(obj):
    # create a formatted string of the Python JSON object
    text = json.dumps(obj, sort_keys=True, indent=4)
    print(text)


class LinkBonus(Enum):
    NONE = 1
    ATTACK = 2
    MAGIC = 3
    DEFENSE = 4


@dataclass
class Item:
    id: int
    name: str
    attack: int
    magic: int
    defense: int
    health: int
    link_bonus: LinkBonus
    links: List[int]


def text_to_link_bonus(text: str):
    if text == 'damage':
        return LinkBonus.ATTACK
    elif text == 'defence':
        return LinkBonus.DEFENSE
    elif text == 'magic':
        return LinkBonus.MAGIC
    else:
        return LinkBonus.NONE


# get latest item templates reference id
latest_server_data_url = 'http://gs-bhs-wrk-02.api-ql.com/client/checkstaticdata/?lang=en&graphics_quality=hd_android'
response = requests.get(latest_server_data_url).json()

item_templates = response['data']['static_data']['crc_details']['item_templates']
print(item_templates)

# get all items
items_url = f'http://gs-bhs-wrk-01.api-ql.com/staticdata/key/en/android/{item_templates}/item_templates/'
response = requests.get(items_url).json()

# filter for only legendary items
# filter: 'talisman', 'ring', 'chest', 'head', 'off_hand', 'main_hand', 'amulet', 'gloves', 'feet'}
legendary_items = [x for x in response if x['q'] == 'legendary' and x['s'] not in ['usable', 'rune', 'giftbox', 'lockbox', 'exactshard']]

# print first item in server json format.  Useful for debugging / finding new pieces of info
jprint(legendary_items[0])

# Convert all the data into a simplified model for calculations
item_map = {}
for leg_item in legendary_items:
    stats = leg_item['stats']
    # Items like weapons won't have links
    if len(leg_item['links']) > 0:
        link = leg_item['links'][0]['i']
        link_bonus = text_to_link_bonus(leg_item['links'][0]['e'])
        # Jubilee Talisman is an edge case with 1 link
        if len(link) == 1:
            item_links = [link[0][0]]
        else:
            item_links = [link[0][0], link[1][0], link[2][0]]
    else:
        item_links = []
        link_bonus = LinkBonus.NONE
    item_map[leg_item['i']] = Item(
        leg_item['i'],
        leg_item['n'],
        stats['dmg'][0],
        stats['magic'][0],
        stats['def'][0],
        stats['hp'][0],
        link_bonus,
        item_links
    )

item_list = list(item_map.values())
for item in item_list:
    print(item)
print(f'{len(item_list)} legendary items available for gear & collections.')



'''
Things I know about internal model
q = Gear quality common, uncommon, rare, legendary
s = socket for gear.  It looks like orbs, keys, and all kind of things are denoted here.
i = item id
n = item's name
set = set identifier (don't know how to resolve set name)
links= first entry is gear second is orbs.  e: is type of bonus p is percent value. I is list of item ids
stats = obvious breakdown.  the second number is potential increase on each level.  Summing them all gives items actual potential
'''

''' Sample
{
    "ceff": [],
    "d": "",
    "g": 1000000,
    "hid": 0,
    "i": 1549,
    "i2": 13363,
    "i_hd": 21465,
    "i_sd": 21467,
    "ip": 40,
    "links": [
        {
            "e": "defence",
            "i": [
                [
                    1107,
                    1
                ],
                [
                    1104,
                    1
                ],
                [
                    1263,
                    1
                ]
            ],
            "p": 30
        },
        {
            "e": "damage",
            "i": [
                [
                    362,
                    1
                ],
                [
                    1419,
                    1
                ]
            ],
            "p": 15
        }
    ],
    "n": "Soul Eater Jaws",
    "p": 0,
    "prvw": 27883,
    "pskl": null,
    "pskls": [],
    "q": "legendary",
    "s": "head",
    "set": 3,
    "si": 1,
    "stats": {
        "def": [
            4535,
            46
        ],
        "dmg": [
            4157,
            42
        ],
        "hp": [
            3023,
            31
        ],
        "magic": [
            3401,
            34
        ]
    },
    "t": 1097,
    "umul": 1,
    "val": 0
}
'''