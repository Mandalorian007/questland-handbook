import * as React from 'react';
import {useEffect} from 'react';
import {Build, BuildOption} from '../domain/Build';
import {
    Card,
    CardContent,
    GridList,
    GridListTile,
    Typography,
    useMediaQuery,
    useTheme
} from '@material-ui/core';
import ReactPlayer from 'react-player';
import {qlApiUrl} from "../config";
import {Emblem, getEmblemImgUrl} from "../domain/emblem";

const useCustomColumns = () => {
    const theme = useTheme();
    const isXl = useMediaQuery(theme.breakpoints.up('xl'));
    const isLg = useMediaQuery(theme.breakpoints.up('lg'));
    const isMd = useMediaQuery(theme.breakpoints.up('md'));

    if (isXl) {
        return 2;
    }
    if (isLg) {
        return 2;
    }
    if (isMd) {
        return 2;
    }
    return 1;
};

export const BuildPageLayout: React.FC<{
    buildOption: BuildOption;
}> = props => {
    const initialState: Build = {
        description: '',
        image: '',
        links: '',
        mainHandAlternatives: '',
        name: '',
        offHandAlternatives: '',
        talent1: '',
        talent2: '',
        talent3: '',
        videoGuide: '',
        weapons: ''
    };
    const [build, setBuild] = React.useState<Build>(initialState);

    useEffect(() => {
        fetch(qlApiUrl + `build/${props.buildOption}`)
            .then(response => response.json())
            .then((build: Build) => setBuild(build));
    }, [props.buildOption]);

    const formatTalentName = (talentName: string) => {
      return talentName.split('/')[0].trim();
    };

    return (
        <div>
            <ReactPlayer url={build.videoGuide}/>
            <GridList cellHeight={'auto'} cols={useCustomColumns()}>
                <GridListTile cols={useCustomColumns()}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {build.name}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {build.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </GridListTile>
                <GridListTile cols={1}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Weapons
                            </Typography>
                            <Typography variant="body2" component="p">
                                {build.weapons}
                                <br/>
                                <br/>
                                <b>Main Hand Alternatives</b>
                                <br/>
                                {build.mainHandAlternatives}
                                <br/>
                                <b>Off Hand Alternatives</b>
                                <br/>
                                {build.offHandAlternatives}
                            </Typography>
                        </CardContent>
                    </Card>
                </GridListTile>
                <GridListTile cols={1}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Talents
                            </Typography>
                            <Typography variant="body2" component="p">
                                <b>Red</b>
                                <br/>
                                <span>
                                  <img
                                      src={`/talents/${formatTalentName(build.talent1)}.png`}
                                      alt=""
                                      width={20}
                                      height={20}
                                  />
                                    {`\xa0\xa0 ${build.talent1}`}
                                </span>
                                <br/>
                                <b>Blue</b>
                                <br/>
                              <span>
                                  <img
                                      src={`/talents/${formatTalentName(build.talent2)}.png`}
                                      alt=""
                                      width={20}
                                      height={20}
                                  />
                                {`\xa0\xa0 ${build.talent2}`}
                                </span>
                                <br/>
                                <b>White</b>
                                <br/>
                              <span>
                                  <img
                                      src={`/talents/${formatTalentName(build.talent3)}.png`}
                                      alt=""
                                      width={20}
                                      height={20}
                                  />
                                {`\xa0\xa0 ${build.talent3}`}
                                </span>
                                {build.links != null ? (
                                    <div>
                                        <br/>
                                        <b>Links</b>
                                        <br/>
                                        {build.links}
                                    </div>
                                ) : (
                                    ''
                                )}
                            </Typography>
                        </CardContent>
                    </Card>
                </GridListTile>
            </GridList>
        </div>
    );
};
