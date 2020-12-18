export interface StageScore {
    locationName: string;
    locationNumber: number;
    stageName: string;
    stageNumber: number;
    stageScore: number;
};

export interface ServerStageScore {
    stageScores: StageScore[];
}

export const serverStageScoreToStageScores = (serverStageScore: ServerStageScore): StageScore[] => (serverStageScore.stageScores ?? []);
