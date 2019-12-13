import requests
import json


def jprint(obj):
    # create a formatted string of the Python JSON object
    text = json.dumps(obj, sort_keys=True, indent=4)
    print(text)


# get latest item templates reference id
latest_server_data_url = 'http://gs-bhs-wrk-02.api-ql.com/client/checkstaticdata/?lang=en&graphics_quality=hd_android'
response = requests.get(latest_server_data_url).json()

item_templates = response['data']['static_data']['crc_details']['item_templates']

print(item_templates)

# get all items
items_url = f'http://gs-bhs-wrk-01.api-ql.com/staticdata/key/en/android/{item_templates}/item_templates/'
response = requests.get(items_url).json()

# print first item
jprint(response[0])
