import {Card, CardContent, Typography} from '@material-ui/core';
import React from 'react';
import {Item} from '../domain/item';
import {getQualityColor} from "../domain/quality";

export const ArtifactItemCard: React.FC<{
    item: Item;
}> = ({item}) => {
    return (
        <Card>
            <CardContent>
                <Typography gutterBottom variant="subtitle1" component="h5"
                            style={{color: getQualityColor(item.quality)}}>
                    {item.quality.toString().replace('ARTIFACT', 'A')}: {item.name}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                    Potential: {item.totalPotential}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                    Stats(hp,atk,def,mag)
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {item.health}, {item.attack}, {item.defense}, {item.magic}
                </Typography>
            </CardContent>
        </Card>
    );
};
