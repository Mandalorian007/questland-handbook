import * as React from 'react';
import { GridList } from '@material-ui/core';
import { ModalCard, ModalCardData } from '../../../components/ModalCard';
import { ArenaPage } from './ArenaPage';
import { StatPriorityPage } from './StatPriorityPage';
import { GearPage } from './GearPage';
import { OrbPage } from './OrgPage';
import { CollectionsPage } from './CollectionsPage';
import { ReforgingPage } from './ReforgingPage';
import { ArtifactPage } from './ArtifactPage';
import { BuildsPage } from './BuildsPage';

const modalCardList: ModalCardData[] = [
  {
    title: 'Stat Priorities',
    cardContent: 'Stat evaluation and break down.',
    modalContent: <StatPriorityPage />
  },
  {
    title: 'Understanding Gear',
    cardContent: 'The importance of gear links and bonuses',
    modalContent: <GearPage />
  },
  {
    title: 'Understanding Orbs',
    cardContent: 'How orbs work',
    modalContent: <OrbPage />
  },
  {
    title: 'Collection Setup',
    cardContent: 'How to setup collections that will make you strong',
    modalContent: <CollectionsPage />
  },
  {
    title: 'Reforging 101',
    cardContent: 'Making sure you do reforging right',
    modalContent: <ReforgingPage />
  },
  {
    title: 'Understanding Artifacts',
    cardContent: 'How to approach Artifacts and not regret it',
    modalContent: <ArtifactPage />
  },
  {
    title: 'Popular / Core Builds',
    cardContent: 'The core builds to catapult yourself to success',
    modalContent: <BuildsPage />
  },
  {
    title: 'Arena Setups',
    cardContent: 'Dominating in the Arena',
    modalContent: <ArenaPage />
  }
];

export const GearingHomePage = () => {
  return (
    <GridList cellHeight={160} cols={3}>
      {modalCardList.map(modalCard => (
        <ModalCard key={modalCard.title} modalCard={modalCard} />
      ))}
    </GridList>
  );
};
