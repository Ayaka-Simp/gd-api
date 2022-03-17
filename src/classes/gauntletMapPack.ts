import { Level } from './level';
import { getLevelById } from '../util/levelUtil';

export type DifficultyString = 'easy' | 'medium' | 'hard' | 'harder' | 'insane' | 'demon';

export interface IGauntletOrMapPack {
  // Properties in gauntlets and map packs
  id: string;
  name: string;
  levels: string[];
  // Properties in gauntlets only
  stars?: number;
  coins?: number;
  difficulty?: DifficultyString;
  barColor?: string;
  textColor?: string;
}

export class GauntletOrMapPackItem implements IGauntletOrMapPack {
  // Properties in gauntlets and map packs
  id: string;
  name: string;
  levels: string[];
  // Properties in gauntlets only
  stars?: number;
  coins?: number;
  difficulty?: DifficultyString;
  barColor?: string;
  textColor?: string;

  constructor(gauntletOrMapPack: IGauntletOrMapPack) {
    this.id = gauntletOrMapPack.id;
    this.name = gauntletOrMapPack.name;
    this.levels = gauntletOrMapPack.levels;
    this.stars = gauntletOrMapPack.stars;
    this.coins = gauntletOrMapPack.coins;
    this.difficulty = gauntletOrMapPack.difficulty;
    this.barColor = gauntletOrMapPack.barColor;
    this.textColor = gauntletOrMapPack.textColor;
  }

  async getLevels(): Promise<Level[]> {
    const levels: Level[] = [];
    for (let i = 0; i < this.levels.length; i++) {
      levels.push(await getLevelById(this.levels[i]));
    }
    return levels;
  }
}
