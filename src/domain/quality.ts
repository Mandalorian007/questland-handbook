export enum Quality {
  Common = 'COMMON',
  Uncommon = 'UNCOMMON',
  Rare = 'RARE',
  Epic = 'EPIC',
  Legendary = 'LEGENDARY',
  Artifact1 = 'ARTIFACT1',
  Artifact2 = 'ARTIFACT2',
  Artifact3 = 'ARTIFACT3',
  Artifact4 = 'ARTIFACT4',
  Artifact5 = 'ARTIFACT5'
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

export const getQualityColor = (quality: Quality) => {
  switch (quality) {
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
