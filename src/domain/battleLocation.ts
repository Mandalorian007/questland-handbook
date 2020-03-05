export interface BattleLocation {
    id: number;
    name: string;
    stages: Stage[];
}

export interface Stage {
    id: number;
    stageNumber: number;
    name: string;
    stageMobs: StageMob[];
}

export interface StageMob {
    id: number;
    name: string;
    count: number;
}