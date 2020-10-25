import * as React from 'react';
import { BuildPageLayout } from '../../components/BuildPageLayout';
import { BuildOption } from '../../domain/Build';

export const BloodyHellPage = () => (
  <BuildPageLayout buildOption={BuildOption.bloodyHell} />
);
