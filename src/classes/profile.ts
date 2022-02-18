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

  constructor(jsonData: ProfileData) {
    this.rawJsonData = jsonData;
    this.username = jsonData.username;
    this.playerID = jsonData.playerID;
    this.accountID = jsonData.accountID;
    this.rank = jsonData.rank;
    this.stars = jsonData.stars;
    this.diamonds = jsonData.diamonds;
    this.coins = jsonData.coins;
    this.userCoins = jsonData.userCoins;
    this.demons = jsonData.demons;
    this.cp = jsonData.cp;
    this.icon = jsonData.icon;
    this.friendRequests = jsonData.friendRequests;
    this.messages = jsonData.messages;
    this.commentHistory = jsonData.commentHistory;
    this.moderator = jsonData.moderator;
    this.youtube = jsonData.youtube;
    this.twitter = jsonData.twitter;
    this.twitch = jsonData.twitch;
    this.ship = jsonData.ship;
    this.ball = jsonData.ball;
    this.ufo = jsonData.ufo;
    this.wave = jsonData.wave;
    this.robot = jsonData.robot;
    this.spider = jsonData.spider;
    this.col1 = jsonData.col1;
    this.col2 = jsonData.col2;
    this.deathEffect = jsonData.deathEffect;
    this.glow = jsonData.glow;
    this.col1RGB = jsonData.col1RGB;
    this.col2RGB = jsonData.col2RGB;
  }
  getRawJsonData(): ProfileData {
    return this.rawJsonData;
  }
  get rawProfileData(): ProfileData {
    return this.rawJsonData;
  }
}
