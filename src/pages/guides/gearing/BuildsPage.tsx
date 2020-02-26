import * as React from 'react';
import { Paper } from '@material-ui/core';
import { BuildExpansionPanel } from '../../../components/BuildExpansionPanel';
import {
  RatchetRush,
  TheHecatombus,
  ThePAX,
  TheTurtle
} from '../../../domain/builds';

export const BuildsPage = () => (
  <Paper>
    <h1>Popular Builds</h1>
    <p>
      This section is dedicated to covering the popular and meta builds in
      Questland and is a great starting place for new players who simply need to
      know a good build to get started.
    </p>
    <BuildExpansionPanel qlBuild={TheHecatombus} />
    <BuildExpansionPanel qlBuild={TheTurtle} />
    <BuildExpansionPanel qlBuild={RatchetRush} />
    <BuildExpansionPanel qlBuild={ThePAX} />
  </Paper>
);
