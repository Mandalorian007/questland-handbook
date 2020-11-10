import * as React from 'react';
import {useEffect} from 'react';
import {Item} from "../../../domain/item";
import {useSelector} from "../../indexes/ItemIndexPage";
import {useDispatch} from "react-redux";
import {loadItems} from "../../../store/itemActions";
import {GridList, GridListTile, Typography} from "@material-ui/core";
import {Quality} from "../../../domain/quality";
import {getItemSlotUrl, ItemSlot} from "../../../domain/ItemSlot";
import {ItemSelectorCard} from "./ItemSelectorCard";
import {getStatUrl, Stat} from "../../../domain/stat";
import {useGridListCols} from "../../../lib/responsiveList";
import {GearSummary} from "./GearSummary";
import {SelectedItemCard} from "./SelectedItemCard";
import {GearTemplate, getEquippedItemIds, notUndefined} from "../../../domain/gearTemplate";
import {Emblem, getEmblemImgUrl} from "../../../domain/emblem";

const emptyItem: Item = {
    attack: 0,
    attackPotential: 0,
    defense: 0,
    defensePotential: 0,
    emblem: Emblem.None,
    extractCost: 0,
    fullGraphicsUrl: "",
    health: 0,
    healthPotential: 0,
    iconGraphicsUrl: "",
    id: 0,
    itemBonus: Stat.None,
    itemLink1: 0,
    itemLink2: 0,
    itemLink3: 0,
    itemSlot: ItemSlot.Unknown,
    magic: 0,
    magicPotential: 0,
    name: "",
    orbBonus: Stat.None,
    orbLink1: 0,
    orbLink2: 0,
    passive1Description: "",
    passive1Name: "",
    passive2Description: "",
    passive2Name: "",
    quality: Quality.Legendary,
    reforgePointsPerLevel: 0,
    totalPotential: 0
};

export const itemIconInfo = (item?: Item) => {
    if (!item) {
        item = emptyItem;
    }
    return <span>
            <img
                src={getEmblemImgUrl(item.emblem)}
                alt=""
                width={20}
                height={20}
            />
            <img
                src={getItemSlotUrl(item.itemSlot)}
                alt=""
                width={20}
                height={20}
            />
            <img
                src={getStatUrl(item.itemBonus)}
                alt=""
                width={20}
                height={20}
            />
        </span>
};

export const GearPlannerPage: React.FC<{}> = () => {
    const dispatch = useDispatch();
    const items: Item[] = useSelector(state => state.itemState.items.filter(item => item.quality === Quality.Legendary));
    const [selectedGear, setSelectedGear] = React.useState<GearTemplate>({
        attackCollections: [undefined, undefined, undefined, undefined, undefined],
        defenseCollections: [undefined, undefined, undefined, undefined, undefined],
        healthCollections: [undefined, undefined, undefined, undefined, undefined],
        magicCollections: [undefined, undefined, undefined, undefined, undefined],
    });

    useEffect(() => {
        dispatch(loadItems());
    }, [dispatch]);

    const getItemLinks = (item: Item) => {
        const itemLinkIds: number[] = [item.itemLink1, item.itemLink2, item.itemLink3].filter(notUndefined);
        return itemLinkIds.map(id => items.find(item => item.id === id)).filter(notUndefined);
    };

    const arrayUpdater = (items: (Item | undefined)[], index: number, value: Item | undefined) => {
        items[index] = value;
        return items;
    };

    const getDisplayedCard = (title: string, selectedItem: Item | undefined, setSelectedItem: any, itemSlotType: ItemSlot | Stat) => {
        const equippedItemIds = getEquippedItemIds(selectedGear);
        return selectedItem ?
            <SelectedItemCard
                title={title}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
                selectedItemLinks={getItemLinks(selectedItem)}
                equippedItemIds={equippedItemIds}
            />
            :
            <ItemSelectorCard
                title={title}
                collectionLocation={itemSlotType}
                items={items}
                setSelectedItem={(item?: Item) => setSelectedItem(item)}
                equippedItemIds={equippedItemIds}
            />
    };

    return (
        <>
            <h1>Gear Planner</h1>
            <Typography variant="body1" color="textSecondary" component="p">
                Legendary items available for gear design: {items.length}
            </Typography>
            <h2>Gear Summary</h2>
            <GearSummary gearTemplate={selectedGear}/>
            <h2>Equipment</h2>
            <GridList cellHeight={'auto'} cols={useGridListCols()}>
                <GridListTile>
                    {getDisplayedCard(
                        ItemSlot.Helm.toString(),
                        selectedGear?.helm,
                        (item?: Item) => setSelectedGear({...selectedGear, helm: item}),
                        ItemSlot.Helm
                    )}
                </GridListTile>
                <GridListTile>
                    {getDisplayedCard(
                        ItemSlot.Chest.toString(),
                        selectedGear?.chest,
                        (item?: Item) => setSelectedGear({...selectedGear, chest: item}),
                        ItemSlot.Chest
                    )}
                </GridListTile>
                <GridListTile>
                    {getDisplayedCard(
                        ItemSlot.Gloves.toString(),
                        selectedGear?.gloves,
                        (item?: Item) => setSelectedGear({...selectedGear, gloves: item}),
                        ItemSlot.Gloves
                    )}
                </GridListTile>
                <GridListTile>
                    {getDisplayedCard(
                        ItemSlot.Boots.toString(),
                        selectedGear?.boots,
                        (item?: Item) => setSelectedGear({...selectedGear, boots: item}),
                        ItemSlot.Boots
                    )}
                </GridListTile>
                <GridListTile>
                    {getDisplayedCard(
                        ItemSlot.Necklace.toString(),
                        selectedGear?.necklace,
                        (item?: Item) => setSelectedGear({...selectedGear, necklace: item}),
                        ItemSlot.Necklace
                    )}
                </GridListTile>
                <GridListTile>
                    {getDisplayedCard(
                        ItemSlot.Ring.toString(),
                        selectedGear?.ring,
                        (item?: Item) => setSelectedGear({...selectedGear, ring: item}),
                        ItemSlot.Ring
                    )}
                </GridListTile>
                <GridListTile>
                    {getDisplayedCard(
                        ItemSlot.Talisman.toString(),
                        selectedGear?.talisman,
                        (item?: Item) => setSelectedGear({...selectedGear, talisman: item}),
                        ItemSlot.Talisman
                    )}
                </GridListTile>
            </GridList>
            <h2>Attack Collections</h2>
            <GridList cellHeight={'auto'} cols={useGridListCols()}>
                {selectedGear.attackCollections.map((item, index) =>
                    <GridListTile key={index}>
                        {getDisplayedCard(
                            `Attack Collection ${index + 1}`,
                            selectedGear.attackCollections[index],
                            (item?: Item) => setSelectedGear({
                                ...selectedGear,
                                attackCollections: arrayUpdater(selectedGear.attackCollections, index, item)
                            }),
                            Stat.Attack
                        )}
                    </GridListTile>
                )}
            </GridList>
            <h2>Magic Collections</h2>
            <GridList cellHeight={'auto'} cols={useGridListCols()}>
                {selectedGear.magicCollections.map((item, index) =>
                    <GridListTile key={index}>
                        {getDisplayedCard(
                            `Magic Collection ${index + 1}`,
                            selectedGear.magicCollections[index],
                            (item?: Item) => setSelectedGear({
                                ...selectedGear,
                                magicCollections: arrayUpdater(selectedGear.magicCollections, index, item)
                            }),
                            Stat.Magic
                        )}
                    </GridListTile>
                )}
            </GridList>
            <h2>Defense Collections</h2>
            <GridList cellHeight={'auto'} cols={useGridListCols()}>
                {selectedGear.defenseCollections.map((item, index) =>
                    <GridListTile key={index}>
                        {getDisplayedCard(
                            `Defense Collection ${index + 1}`,
                            selectedGear.defenseCollections[index],
                            (item?: Item) => setSelectedGear({
                                ...selectedGear,
                                defenseCollections: arrayUpdater(selectedGear.defenseCollections, index, item)
                            }),
                            Stat.Defense
                        )}
                    </GridListTile>
                )}
            </GridList>
            <h2>Health Collections</h2>
            <GridList cellHeight={'auto'} cols={useGridListCols()}>
                {selectedGear.healthCollections.map((item, index) =>
                    <GridListTile key={index}>
                        {getDisplayedCard(
                            `Health Collection ${index + 1}`,
                            selectedGear.healthCollections[index],
                            (item?: Item) => setSelectedGear({
                                ...selectedGear,
                                healthCollections: arrayUpdater(selectedGear.healthCollections, index, item)
                            }),
                            Stat.Health
                        )}
                    </GridListTile>
                )}
            </GridList>
        </>
    );
};

