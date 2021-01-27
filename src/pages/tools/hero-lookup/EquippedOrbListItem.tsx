import {ListItem, ListItemIcon, ListItemText, Typography} from '@material-ui/core';
import React from 'react';
import {getQualityColor, Quality} from "../../../domain/quality";
import {EquippedOrb} from "../../../domain/hero";
import {getArtifactOrbStatUrl, getOrbStatUrl, Orb} from "../../../domain/orb";
import {Stat} from "../../../domain/stat";

export const EquippedOrbListItem: React.FC<{
    equippedOrb: EquippedOrb;
    orb: Orb
}> = ({equippedOrb, orb}) => {

    const getOrbUrl = (statBonus: Stat, orbQuality: Quality) => {
        if (orbQuality === Quality.Artifact1) {
            return getArtifactOrbStatUrl(statBonus);
        } else {
            return getOrbStatUrl(statBonus);
        }
    };

    return (
        <ListItem>
            <ListItemIcon>
                <img
                    src={getOrbUrl(orb.statBonus, orb.quality)}
                    alt={''}
                    width={30}
                    height={30}
                />
            </ListItemIcon>
            <ListItemText secondary={`pot: ${orb.attackPotential + orb.defensePotential + orb.healthPotential}, lvl: ${equippedOrb.level}, enh: ${equippedOrb.enhance}`}>
                <Typography variant="body2" style={{color: getQualityColor(orb.quality)}}>
                    {`${orb.name}`}
                </Typography>
            </ListItemText>
        </ListItem>
    );
};
