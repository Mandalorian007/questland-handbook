import {Card, CardContent, Grid, Typography} from '@material-ui/core';
import React from 'react';
import {getOrbStatUrl, Orb} from "../domain/orb";
import {Stat} from "../domain/stat";
import {getQualityColor} from "../domain/quality";

export const OrbCard: React.FC<{
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
            <CardContent style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right bottom",
                backgroundSize: "contain 20%",
                backgroundImage: "url(" + orb.iconGraphicsUrl + ")"
            }}>
                <Typography gutterBottom variant="subtitle1" component="h5"
                            style={{color: getQualityColor(orb.quality)}}>
                    {`${orb.name}`}
                </Typography>
                <Grid container direction="row" alignItems="center">
                    <img
                        src={getOrbStatUrl(orb.statBonus)}
                        alt={''}
                        width={22}
                        height={22}
                    />
                    <Typography variant="body1" color="textSecondary" component="p">
                        {`\xa0 ${orb.statBonus}`}
                    </Typography>
                </Grid>
                <Typography variant="body1" color="textSecondary" component="p">
                    Potential: {getOrbPotential(orb)}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                    Base Stat: {getOrbBase(orb)}
                </Typography>
            </CardContent>
        </Card>
    );
};
