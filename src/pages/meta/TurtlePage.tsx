import * as React from 'react';
import { BuildPageLayout } from '../../components/BuildPageLayout';
import { BuildOption } from '../../domain/Build';

export const TurtlePage = () => (
  <BuildPageLayout buildOption={BuildOption.turtle} />
);
