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

type Length = 'Tiny' | 'Small' | 'Medium' | 'Large' | 'XL';

type DifficultyFace =
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

  constructor(level: LevelData) {
    this.rawLevelData = level;
    this.id = level.id;
    this.name = level.name;
    this.description = level.description;
    this.author = level.author;
    this.playerID = level.playerID;
    this.accountID = level.accountID;
    this.difficulty = level.difficulty;
    this.downloads = level.downloads;
    this.likes = level.likes;
    this.disliked = level.disliked;
    this.length = level.length;
    this.stars = level.stars;
    this.orbs = level.orbs;
    this.diamonds = level.diamonds;
    this.featured = level.featured;
    this.epic = level.epic;
    this.gameVersion = level.gameVersion;
    this.editorTime = level.editorTime;
    this.totalEditorTime = level.totalEditorTime;
    this.version = level.version;
    this.copiedID = level.copiedID;
    this.twoPlayer = level.twoPlayer;
    this.officialSong = level.officialSong;
    this.customSong = level.customSong;
    this.coins = level.coins;
    this.verifiedCoins = level.verifiedCoins;
    this.starsRequested = level.starsRequested;
    this.ldm = level.ldm;
    this.objects = level.objects;
    this.large = level.large;
    this.cp = level.cp;
    this.difficultyFace = level.difficultyFace;
    this.songName = level.songName;
    this.songAuthor = level.songAuthor;
    this.songSize = level.songSize;
    this.songID = level.songID;
  }

  getRawLevelData(): LevelData {
    return this.rawLevelData;
  }
}
