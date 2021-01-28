import {ListItem, ListItemIcon, ListItemText, Typography} from '@material-ui/core';
import React from 'react';
import {getQualityColor, Quality} from "../../../domain/quality";
import {EquippedOrb} from "../../../domain/hero";
import {getArtifactOrbStatUrl, getOrbStatUrl, Orb} from "../../../domain/orb";
import {Stat} from "../../../domain/stat";

export const EquippedOrbListItem: React.FC<{
    equippedOrb: EquippedOrb;
    orb: Orb,
    isLinked: boolean
}> = ({equippedOrb, orb, isLinked}) => {

    const getOrbUrl = (statBonus: Stat, orbQuality: Quality) => {
        if (orbQuality === Quality.Artifact1) {
            return getArtifactOrbStatUrl(statBonus);
        } else {
            return getOrbStatUrl(statBonus);
        }
    };

    return (
        <ListItem style={{padding: 0}}>
            <ListItemIcon>
                <span>
                    <img
                        src={getOrbUrl(orb.statBonus, orb.quality)}
                        alt={''}
                        width={24}
                        height={24}
                    />
                    {isLinked ?
                        <img
                            src={'/checkmark-button.png'}
                            alt={''}
                            width={18}
                            height={18}
                        />
                        :
                        <div/>
                    }
                </span>
            </ListItemIcon>
            <ListItemText
                secondary={`pot: ${orb.attackPotential + orb.defensePotential + orb.healthPotential}, lvl: ${equippedOrb.level}, enh: ${equippedOrb.enhance}`}>
                <Typography style={{color: getQualityColor(orb.quality)}}>
                    {`${orb.name}`}
                </Typography>
            </ListItemText>
        </ListItem>
    );
};
