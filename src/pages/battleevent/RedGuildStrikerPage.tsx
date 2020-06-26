import * as React from 'react';
import ReactPlayer from 'react-player';
import { BuildPageLayout } from '../../components/BuildPageLayout';
import { BuildOption } from '../../domain/Build';

export const RedGuildStrikerPage = () => (
  <BuildPageLayout buildOption={BuildOption.redGuildStriker} />
);
