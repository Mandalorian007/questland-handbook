import {Card, CardContent, Grid, Typography} from '@material-ui/core';
import React from 'react';
import {getArtifactOrbStatUrl, Orb} from "../domain/orb";
import {Stat} from "../domain/stat";
import {getQualityColor} from "../domain/quality";

export const ArtifactOrbCard: React.FC<{
    orb: Orb;
}> = ({orb}) => {

    const getOrbPotential = (orb: Orb) => {
        switch (orb.statBonus) {
            case Stat.AttackMagic:
                return orb.attackPotential;
            case Stat.Defense:
                return orb.defensePotential;
            case Stat.Health:
                return orb.healthPotential;
            default:
                return 0;
        }
    };

    const getOrbBase = (orb: Orb) => {
        switch (orb.statBonus) {
            case Stat.AttackMagic:
                return orb.attack;
            case Stat.Defense:
                return orb.defense;
            case Stat.Health:
                return orb.health;
            default:
                return 0;
        }
    };

    return (
        <Card>
            <CardContent>
                <Typography gutterBottom variant="subtitle1" component="h5"
                            style={{color: getQualityColor(orb.quality)}}>
                    {`${orb.quality}: ${orb.name}`}
                </Typography>
                <Grid container direction="row" alignItems="center">
                    <img
                        src={getArtifactOrbStatUrl(orb.statBonus)}
                        alt={''}
                        width={22}
                        height={22}
                    />
                    <Typography variant="body1" color="textSecondary" component="p">
                        {`\xa0 ${orb.statBonus}`}
                    </Typography>
                </Grid>
                <Typography variant="body1" color="textSecondary" component="p">
                    Potential (per level): {`${getOrbBase(orb)} (${getOrbPotential(orb)})`}
                </Typography>
            </CardContent>
        </Card>
    );
};
