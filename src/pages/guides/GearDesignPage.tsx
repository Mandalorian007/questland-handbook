import * as React from "react";
import {
    Card,
    CardContent,
    Container,
    GridList,
    GridListTile,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@material-ui/core";
import ReactPlayer from "react-player";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        reactPlayer: {
            paddingLeft: theme.spacing(0),
            paddingBottom: theme.spacing(3),
        },
    })
);

export const GearDesignPage = () => {
    const classes = useStyles();

    return (
        <>
            <Typography variant="h4" component="h2">
                Gear Design
            </Typography>
            <ReactPlayer className={classes.reactPlayer} url="https://www.youtube.com/watch?v=f861wse_tKM"/>
            <Container>
                <GridList cellHeight={'auto'} cols={1} spacing={20}>
                    <GridListTile cols={1}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Gear Type
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Gear comes in several styles. It can be Warrior, Mage, or Tank. You can tell what
                                    type
                                    of
                                    gear an item is by looking at the link bonuses on the item. There is a special 4th
                                    type
                                    of
                                    gear that we refer to as a "Collection item" it is a piece of gear with a gear
                                    bonus,
                                    but
                                    not an orb bonus. It is referred to as a collection item because it is most
                                    efficient to
                                    use
                                    these pieces of gear in your collections so you can benefit from orb bonuses. As
                                    note we
                                    are
                                    ignoring weapons as they are not considered part of gear design most of the time.
                                </Typography>
                                <TableContainer component={Paper}>
                                    <Table>
                                        <TableHead>
                                            <TableCell>Warrior</TableCell>
                                            <TableCell>Mage</TableCell>
                                            <TableCell>Tank</TableCell>
                                            <TableCell>Collection item</TableCell>
                                        </TableHead>
                                        <TableBody>
                                            <TableCell>attack/health link bonuses</TableCell>
                                            <TableCell>magic/defense link bonuses</TableCell>
                                            <TableCell>defense/attack link bonuses</TableCell>
                                            <TableCell>gear bonus only. There is no orb bonus</TableCell>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </CardContent>
                        </Card>
                    </GridListTile>
                    <GridListTile cols={1}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Set Type
                                </Typography>
                                <Typography variant="body2" component="p">
                                    A set consists of 7 pieces of standard gear 1 weapon, and 2 collections items. When
                                    looking
                                    at any set you can ignore the weapon and 2 collection items and simply focus on the
                                    7
                                    core
                                    equips. Since there are 3 types of gear and 7 equips you will always an unequal
                                    number
                                    of
                                    gear types. There will be a distribution like 3/2/2 which means one gear type will
                                    always
                                    have more pieces. Whichever gear type has 3 pieces in a set we refer to as a set of
                                    that
                                    gear type.
                                </Typography>
                                <TableContainer component={Paper}>
                                    <Table>
                                        <TableHead>
                                            <TableCell>Warrior</TableCell>
                                            <TableCell>Mage</TableCell>
                                            <TableCell>Tank</TableCell>
                                        </TableHead>
                                        <TableBody>
                                            <TableCell>3/7 attack/health gear</TableCell>
                                            <TableCell>3/7 magic/defense gear</TableCell>
                                            <TableCell>3/7 defense/attack gear</TableCell>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </CardContent>
                        </Card>
                    </GridListTile>
                    <GridListTile cols={1}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Stat Groups
                                </Typography>
                                <Typography variant="body2" component="p">
                                    So we already know that each new set comes out with unbalanced amounts of a certain
                                    gear
                                    type, but we actually also know that there are groups of like gear types. Every set
                                    always
                                    follows the same pattern for which slots of gear have specific gear types. Because
                                    of
                                    this
                                    we always know which slots of gear will have the same link bonuses.
                                </Typography>
                                <TableContainer component={Paper}>
                                    <Table>
                                        <TableHead>
                                            <TableCell>Group 1</TableCell>
                                            <TableCell>Group 2</TableCell>
                                            <TableCell>Group 3</TableCell>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>Helmet</TableCell>
                                                <TableCell>Gloves</TableCell>
                                                <TableCell>Chest</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Necklace</TableCell>
                                                <TableCell>Ring</TableCell>
                                                <TableCell>Talisman</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Boots</TableCell>
                                                <TableCell/>
                                                <TableCell/>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </CardContent>
                        </Card>
                    </GridListTile>
                    <GridListTile cols={1}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Release Cycle
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Gear sets are actually released in a very consistent pattern for the 200 potential
                                    and
                                    higher gear. We can reliably see that the sets are released in the order of: Tank,
                                    Warrior,
                                    Mage. After this release they increase the potential and then repeat the release
                                    cycle
                                    again. Because of this you can also predict which Stat Groups will have which type
                                    of
                                    gear
                                    for a given set.
                                </Typography>
                                <TableContainer component={Paper}>
                                    <Table>
                                        <TableHead>
                                            <TableCell>Set Type</TableCell>
                                            <TableCell>Tank gear</TableCell>
                                            <TableCell>Warrior gear</TableCell>
                                            <TableCell>Mage gear</TableCell>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>Tank Set</TableCell>
                                                <TableCell>Stat Group 1</TableCell>
                                                <TableCell>Stat Group 2</TableCell>
                                                <TableCell>Stat Group 3</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Warrior Set</TableCell>
                                                <TableCell>Stat Group 3</TableCell>
                                                <TableCell>Stat Group 1</TableCell>
                                                <TableCell>Stat Group 2</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Mage Set</TableCell>
                                                <TableCell>Stat Group 2</TableCell>
                                                <TableCell>Stat Group 3</TableCell>
                                                <TableCell>Stat Group 1</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </CardContent>
                        </Card>
                    </GridListTile>
                    <GridListTile cols={1}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Linking Patterns
                                </Typography>
                                <Typography variant="body2" component="p">
                                    There are many ways to look at linking patterns, but we will narrow in on two very
                                    specific
                                    rules that are simple enough to understand and will get you 90% of the way with your
                                    build.
                                </Typography>
                                <Typography variant="subtitle1" component="p">
                                    Rule#1:
                                </Typography>
                                <Typography variant="body2" component="p">
                                    All gear of the same type can be linked to each other and to the all gear of the
                                    same type of the previous set.
                                </Typography>
                                <Typography variant="subtitle1" component="p">
                                    Rule#2:
                                </Typography>
                                <Typography variant="body2" component="p">
                                    All gear of the same set can be linked by equipping the entire set.
                                </Typography>
                            </CardContent>
                        </Card>
                    </GridListTile>
                    <GridListTile cols={1}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Build Types
                                </Typography>
                                <Typography variant="body2" component="p">
                                    In Questland there are to primary types of builds. You can either have a
                                    "specialized"
                                    build
                                    which uses all the same gear type or you can have a balanced build which equips the
                                    entire
                                    set of one item. Under the current meta warrior specialized builds are the most
                                    popular.
                                </Typography>
                                <TableContainer component={Paper}>
                                    <Table>
                                        <TableHead>
                                            <TableCell>Specialized</TableCell>
                                            <TableCell>Balanced</TableCell>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>Warrior (all Warrior gear type)</TableCell>
                                                <TableCell>Referred to by the emblem</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Mage (all Mage gear type)</TableCell>
                                                <TableCell/>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Tank (all Tank gear type)</TableCell>
                                                <TableCell/>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </CardContent>
                        </Card>
                    </GridListTile>
                    <GridListTile cols={1}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Tower & Fill Design Technique
                                </Typography>
                                <Typography variant="subtitle1" component="h2">
                                    -- Specialized Build Technique
                                </Typography>
                                <Typography variant="body2" component="p">
                                    This design strategy starts by relying on the first linking rule by stacking gear of
                                    the
                                    same type from the sequential sets to get your links, then using the second linking
                                    rule
                                    and
                                    equipping the full set of the oldest set on the "bottom" to create a "tower" of the
                                    same
                                    set
                                    of gear. Then you look at ways to link the gaps in your collections with other
                                    pieces.
                                </Typography>
                                <Typography variant="subtitle1" component="p">
                                    Step#1:
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Gather 5 sequential sets of the same gear type. The latest 3 will form your equips
                                    while
                                    the
                                    second two will fill attack collections. Depending on attack and health collection
                                    availability you may shift some warrior gear to your health collections and leverage
                                    attack
                                    collection items in your attack slots.
                                </Typography>
                                <Typography variant="subtitle1" component="p">
                                    Step#2:
                                </Typography>
                                <Typography variant="body2" component="p">
                                    The oldest set of gear from your collections above you will use all magic and
                                    defense
                                    items
                                    from to fully link the attack gear. If there is a serious shortage of health
                                    collection
                                    availability you can actually end your chain of attack gear completely in your
                                    health
                                    collections slots and the use newer sets in your defense and magic arrangements
                                    (Note:
                                    this
                                    is an advanced technique used to counter bad item release cycles).
                                </Typography>
                                <Typography variant="subtitle1" component="p">
                                    Step#3:
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Filling out health collections + remaining magic & defense slots. This takes some
                                    experience, but if you remember linking rules you can typically build on your oldest
                                    set
                                    of
                                    fully equipped gear to get back links. In addition you can also look for links where
                                    both
                                    magic or defense items link to each other and then the warrior items from an a set
                                    since
                                    you
                                    will be wearing 5 sets of warrior items.
                                </Typography>
                            </CardContent>
                        </Card>
                    </GridListTile>
                    <GridListTile cols={1}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Set Layering Design Technique
                                </Typography>
                                <Typography variant="subtitle1" component="h2">
                                    -- Balanced Build Technique
                                </Typography>
                                <Typography variant="body2" component="p">
                                    This design strategy starts by relying on the fact that equipping an entire set will
                                    full
                                    link the set. So equipping 3 sets (1 equipment and 2 collections) will nearly full
                                    link
                                    your
                                    entire setup.
                                </Typography>
                                <Typography variant="subtitle1" component="p">
                                    Step#1:
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Equip the full set you want to wear.
                                </Typography>
                                <Typography variant="subtitle1" component="p">
                                    Step#2:
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Find two sets of different types to add to your collections this will leave one of
                                    your
                                    slots open in (attack, defense, magic). For that slot you should ideally be filling
                                    it a
                                    collection item.
                                </Typography>
                                <Typography variant="subtitle1" component="p">
                                    Step#3:
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Fill out any health collection item options you can find and then add any high
                                    health
                                    gear
                                    you have remaining to round out the health collections. As a note typically balanced
                                    builds
                                    will suffer badly from health collection gaps.
                                </Typography>
                            </CardContent>
                        </Card>
                    </GridListTile>
                </GridList>
            </Container>
        </>
    );
};