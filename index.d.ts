export type LevelData = {
  id: string;
  name: string;
  description: string;
  author: string;
  playerID: string;
  accountID: string;
  difficulty: string;
  downloads: number;
  likes: number;
  disliked: boolean;
  length: 'Tiny' | 'Small' | 'Medium' | 'Large' | 'XL';
  stars: number;
  orbs: number;
  diamonds: number;
  featured: boolean;
  epic: boolean;
  gameVersion: string;
  editorTime: number;
  totalEditorTime: number;
  version: number;
  copiedID: string;
  twoPlayer: boolean;
  officialSong: number;
  customSong: number;
  coins: number;
  verifiedCoins: boolean;
  starsRequested: number;
  ldm: boolean;
  objects: number;
  large: boolean;
  cp: number;
  difficultyFace:
    | 'auto-epic'
    | 'auto-featured'
    | 'auto'
    | 'demon-easy-epic'
    | 'demon-easy-featured'
    | 'demon-easy'
    | 'demon-epic'
    | 'demon-extreme-epic'
    | 'demon-extreme-featured'
    | 'demon-extreme'
    | 'demon-featured'
    | 'demon-hard-epic'
    | 'demon-hard-featured'
    | 'demon-hard'
    | 'demon-insane-epic'
    | 'demon-insane-featured'
    | 'demon-insane'
    | 'demon-medium-epic'
    | 'demon-medium-featured'
    | 'demon-medium'
    | 'demon'
    | 'easy-epic'
    | 'easy-featured'
    | 'easy'
    | 'hard-epic'
    | 'hard-featured'
    | 'hard'
    | 'harder-epic'
    | 'harder-featured'
    | 'harder'
    | 'insane-epic'
    | 'insane-featured'
    | 'insane'
    | 'normal-epic'
    | 'normal-featured'
    | 'normal'
    | 'unrated-epic'
    | 'unrated-featured'
    | 'unrated';
  songName: string;
  songAuthor: string;
  songSize: string;
  songID: string;
};

export type Length = 'Tiny' | 'Small' | 'Medium' | 'Large' | 'XL';

export type DifficultyFace =
  | 'auto-epic'
  | 'auto-featured'
  | 'auto'
  | 'demon-easy-epic'
  | 'demon-easy-featured'
  | 'demon-easy'
  | 'demon-epic'
  | 'demon-extreme-epic'
  | 'demon-extreme-featured'
  | 'demon-extreme'
  | 'demon-featured'
  | 'demon-hard-epic'
  | 'demon-hard-featured'
  | 'demon-hard'
  | 'demon-insane-epic'
  | 'demon-insane-featured'
  | 'demon-insane'
  | 'demon-medium-epic'
  | 'demon-medium-featured'
  | 'demon-medium'
  | 'demon'
  | 'easy-epic'
  | 'easy-featured'
  | 'easy'
  | 'hard-epic'
  | 'hard-featured'
  | 'hard'
  | 'harder-epic'
  | 'harder-featured'
  | 'harder'
  | 'insane-epic'
  | 'insane-featured'
  | 'insane'
  | 'normal-epic'
  | 'normal-featured'
  | 'normal'
  | 'unrated-epic'
  | 'unrated-featured'
  | 'unrated';

export class Level {
  rawLevelData: LevelData;
  id: string;
  name: string;
  description: string;
  author: string;
  playerID: string;
  accountID: string;
  difficulty: string;
  downloads: number;
  likes: number;
  disliked: boolean;
  length: Length;
  stars: number;
  orbs: number;
  diamonds: number;
  featured: boolean;
  epic: boolean;
  gameVersion: string;
  editorTime: number;
  totalEditorTime: number;
  version: number;
  copiedID: string;
  twoPlayer: boolean;
  officialSong: number;
  customSong: number;
  coins: number;
  verifiedCoins: boolean;
  starsRequested: number;
  ldm: boolean;
  objects: number;
  large: boolean;
  cp: number;
  difficultyFace: DifficultyFace;
  songName: string;
  songAuthor: string;
  songSize: string;
  songID: string;

  constructor(level: LevelData): void
  getRawLevelData(): LevelData
}

export interface ProfileData {
  username: string;
  playerID: string;
  accountID: string;
  rank: number;
  stars: number;
  diamonds: number;
  coins: number;
  userCoins: number;
  demons: number;
  cp: number;
  icon: number;
  friendRequests: boolean;
  messages: 'all' | 'friends' | 'off';
  commentHistory: 'all' | 'friends' | 'off';
  moderator: 0 | 1 | 2;
  youtube: string | null;
  twitter: string | null;
  twitch: string | null;
  ship: number;
  ball: number;
  ufo: number;
  wave: number;
  robot: number;
  spider: number;
  col1: number;
  col2: number;
  deathEffect: number;
  glow: boolean;
  col1RGB: {
    r: number;
    g: number;
    b: number;
    val: string;
  };
  col2RGB: {
    r: number;
    g: number;
    b: number;
    val: string;
  };
}

export class Profile {
  private rawJsonData: ProfileData;
  username: string;
  playerID: string;
  accountID: string;
  rank: number;
  stars: number;
  diamonds: number;
  coins: number;
  userCoins: number;
  demons: number;
  cp: number;
  icon: number;
  friendRequests: boolean;
  messages: 'all' | 'friends' | 'off';
  commentHistory: 'all' | 'friends' | 'off';
  moderator: 0 | 1 | 2;
  youtube: string | null;
  twitter: string | null;
  twitch: string | null;
  ship: number;
  ball: number;
  ufo: number;
  wave: number;
  robot: number;
  spider: number;
  col1: number;
  col2: number;
  deathEffect: number;
  glow: boolean;
  col1RGB: {
    r: number;
    g: number;
    b: number;
    val: string;
  };
  col2RGB: {
    r: number;
    g: number;
    b: number;
    val: string;
  };

  constructor(jsonData: ProfileData);
  getRawJsonData(): ProfileData;
  getRawProfileData(): ProfileData;
}

declare async function searchLevels(query: string, filters?: SearchFilters, page = 1): Promise<Level[]>

declare async function getLevelById(id: string | number): Promise<Level>

export class LevelNotFound extends Error {
    constructor(message: string): void;
}

export class ProfileNotFound extends Error {
    constructor(message: string): void;
}