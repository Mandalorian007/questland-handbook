import * as React from 'react';
import {Typography} from '@material-ui/core';


export const ArtifactsPage = () => {

    return (
        <>
            <Typography variant="h4" component="h2">
                Artifacts
            </Typography>
            <p>
                Artifacts are an absolutely massive feature in Questland that helps you completely scale your character
                to whole new heights with each level increasing not only your base stats, but your increase in stats for
                every level. Currently there are five different levels of artifacts in Questland, commonly abbreviated
                as A1-A5.
            </p>
            <Typography variant="h4" component="h5">
                Artifact recipes
            </Typography>
            <p>
                <b>Artifact 1</b>
                <ul>
                    <li>
                        <Typography component="span">
                            3 copies of the item you want to make A1
                        </Typography>
                    </li>
                    <li>
                        <Typography component="span">
                            1 legendary of same emblem
                        </Typography>
                    </li>
                    <li>
                        <Typography component="span">
                            4 random legendaries
                        </Typography>
                    </li>
                </ul>
                <b>Artifact 2</b>
                <ul>
                    <li>
                        <Typography component="span">
                            A1 of the item you want to make A2
                        </Typography>
                    </li>
                    <li>
                        <Typography component="span">
                            copy of the item you want to make A2
                        </Typography>
                    </li>
                    <li>
                        <Typography component="span">
                            4 legendaries of same emblem
                        </Typography>
                    </li>
                    <li>
                        <Typography component="span">
                            4 random legendaries
                        </Typography>
                    </li>
                </ul>
                <b>Artifact 3</b>
                <ul>
                    <li>
                        <Typography component="span">
                            A2 of the item you want to make A3
                        </Typography>
                    </li>
                    <li>
                        <Typography component="span">
                            A1 of same emblem
                        </Typography>
                    </li>
                    <li>
                        <Typography component="span">
                            2 random A1s
                        </Typography>
                    </li>
                </ul>
                <b>Artifact 4</b>
                <ul>
                    <li>
                        <Typography component="span">
                            A3 of the item you want to make A4
                        </Typography>
                    </li>
                    <li>
                        <Typography component="span">
                            A1 of same item you want to make A4
                        </Typography>
                    </li>
                    <li>
                        <Typography component="span">
                            random A3
                        </Typography>
                    </li>
                    <li>
                        <Typography component="span">
                            3 random legendaries
                        </Typography>
                    </li>
                </ul>
                <b>Artifact 5</b>
                <ul>
                    <li>
                        <Typography component="span">
                            A4 of the item you want to make A5
                        </Typography>
                    </li>
                    <li>
                        <Typography component="span">
                            random A4
                        </Typography>
                    </li>
                    <li>
                        <Typography component="span">
                            2 copies of the item you want to make A5
                        </Typography>
                    </li>
                    <li>
                        <Typography component="span">
                            4 legendaries of same emblem
                        </Typography>
                    </li>
                </ul>
            </p>
            <img
                style={{
                    width: '100%',
                    objectFit: 'cover'
                }}
                src={'/artifact-crafting-chart.png'}
                alt={''}/>
            <Typography variant="h4" component="h3">
                What does an artifact give me?
            </Typography>
            <p>
                Each tier of an artifact will unlock:
                <ul>
                    <li>
                        <Typography component="span">
                            higher base stats
                        </Typography>
                    </li>
                    <li>
                        <Typography component="span">
                            higher potential
                        </Typography>
                    </li>
                    <li>
                        <Typography component="span">
                            additional reforge points
                        </Typography>
                    </li>
                </ul>
                What does awakening do to a piece of gear?
                <br/>
                <br/>
                It increases the item level cap by 20 for each artifact level that’s added. An Artifact 1, or A1 for
                short, has a max level of 120, A2 with 140, A3 with 160, A4 with 180, and A5 with level 200.
            </p>
            <Typography variant="h4" component="h3">
                Artifact upgrading considerations
            </Typography>
            <p>
                Artifacts are incredibly powerful, but be careful before creating them since there is no way to undo or
                split the artifact into parts once it’s created.
                <br/>
                <br/>
                Artifact level 1 is a perfectly safe upgrade because you can use it, and swap it out later for another
                piece of gear without issue. Each artifact level 3 needs three level 1 artifacts to create it, with 1 of
                those A1 artifacts being the same emblem. So you can have tons of artifact level 1s lying around with no
                downside.
                <br/>
                <br/>
                Artifact level 2 I avoid because if you can't get to level 3 easily your legendary investment could be
                trapped there.
                <br/>
                <br/>
                Artifact level 3 is a good investment to make because outdated level 3s are used to make artifact level
                4s. Artifact level 4s are also a good investment, because they’re used to create A5s.
                <br/>
                <br/>
                Currently, the end of the artifact level is the A5, and the game developers have said that there won’t
                be additional artifact levels.
            </p>
            <Typography variant="h4" component="h3">
                Legendary sacrifices selection logic
            </Typography>
            <p>
                When upgrading to Artifacts you need to select pieces to destroy or sacrifice to create the artifact.
                Keep this in mind as you’re choosing legendary items to sacrifice to create the artifact:
                <ul>
                    <li>
                        <Typography component="span">
                            Select pieces from sets you do not use in your equipment or collections
                        </Typography>
                    </li>
                    <li>
                        <Typography component="span">
                            Don’t sacrifice duplicates of the item you’re upgrading to an artifact as these will be
                            necessary to raise to the next artifact levels
                        </Typography>
                    </li>
                    <li>
                        <Typography component="span">
                            Save gear in groups of 3 for creation of future A1s. If you have 5 dragon rings, 2 can be
                            used for sacrifices, but 3 should be saved for a future A1
                        </Typography>
                    </li>
                </ul>
                Save 4 copies
                <br/>
                <br/>
                Option 1:
                <ul>
                    <li>
                        <Typography component="span">
                            sacrifice 3 of the 4 to make an A1 and keep 1 copy for a BE multiplier link
                        </Typography>
                    </li>
                </ul>
                Option 2:
                <ul>
                    <li>
                        <Typography component="span">
                            sacrifice all 4 to make an A3 for sacrifices
                        </Typography>
                    </li>
                </ul>
            </p>
        </>
    );
};
