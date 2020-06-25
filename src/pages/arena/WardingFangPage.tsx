import * as React from 'react';
import { BuildPageLayout } from '../../components/BuildPageLayout';
import { BuildOption } from '../../domain/Build';

export const WardingFangPage = () => (
  <BuildPageLayout buildOption={BuildOption.wardingFang} />
);
