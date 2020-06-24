import { Card, CardContent, CardHeader, Grid } from '@material-ui/core';
import { getEmblemImgUrl } from '../domain/emblem';
import React from 'react';
import { Item } from '../domain/item';
import { Quality } from '../domain/quality';

const getItemColor = (item: Item) => {
  switch (item.quality) {
    case Quality.Uncommon:
      return 'grey';
    case Quality.Common:
      return 'green';
    case Quality.Rare:
      return 'blue';
    case Quality.Epic:
      return 'purple';
    case Quality.Legendary:
      return 'orange';
    case Quality.Artifact1:
    case Quality.Artifact2:
    case Quality.Artifact3:
    case Quality.Artifact4:
    case Quality.Artifact5:
      return 'red';
  }
};

export const ItemCard: React.FC<{
  item: Item;
}> = ({ item }) => {
  return (
    <Card>
      <CardHeader
        title={item.name}
        avatar={
          <img
            src={getEmblemImgUrl(item.emblem)}
            alt={item.emblem}
            width={24}
            height={24}
          />
        }
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs>
            <div style={{ color: getItemColor(item) }}>{item.quality}</div>
            <div>Potential: {item.totalPotential}</div>
            <div>Slot: {item.itemSlot}</div>
          </Grid>
          <Grid item xs>
            <div>Attack: {item.attack}</div>
            <div>Magic: {item.magic}</div>
            <div>Defense: {item.defense}</div>
            <div>Health: {item.health}</div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
