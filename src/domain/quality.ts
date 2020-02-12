export enum Quality {
  Common = 'COMMON',
  Uncommon = 'UNCOMMON',
  Rare = 'RARE',
  Epic = 'EPIC',
  Legendary = 'LEGENDARY',
  Artifact1 = 'ARTIFACT1',
  Artifact2 = 'ARTIFACT2',
  Artifact3 = 'ARTIFACT3',
  Artifact4 = 'ARTIFACT4'
}

export const isQuality = (maybeQuality: string): maybeQuality is Quality => {
  return Object.values(Quality as object).includes(maybeQuality);
};

export const toQuality = (expectedQuality: string): Quality => {
  if (!isQuality(expectedQuality)) {
    throw new Error(`Unexpected quality: ${expectedQuality}`);
  }
  return expectedQuality;
};
