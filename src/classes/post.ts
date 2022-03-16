export interface IPost {
  content: string;
  id: string;
  likes: number;
  date: string;
  levelID?: string;
  browserColor: boolean;
  // Doesn't work for profile posts
  username?: string;
  playerID?: string;
  accountID?: string;
  percent?: string;
  color?: string;
  moderator?: 0 | 1 | 2;
  icon: {
    form: string;
    icon: number;
    col1: number;
    col2: number;
    glow: boolean;
  };
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
    val: number;
  };
}

export class Post implements IPost {
  content: string;
  id: string;
  likes: number;
  date: string;
  levelID?: string;
  browserColor: boolean;
  // Doesn't work for profile posts
  username?: string;
  playerID?: string;
  accountID?: string;
  percent?: string;
  color?: string;
  moderator?: 0 | 1 | 2;
  icon: {
    form: string;
    icon: number;
    col1: number;
    col2: number;
    glow: boolean;
  };
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
    val: number;
  };

  constructor(jsonData: IPost) {
    this.content = jsonData.content;
    this.id = jsonData.id;
    this.likes = jsonData.likes;
    this.date = jsonData.date;
    this.levelID = jsonData.levelID;
    this.browserColor = jsonData.browserColor;
    this.username = jsonData.username;
    this.playerID = jsonData.playerID;
    this.accountID = jsonData.accountID;
    this.percent = jsonData.percent;
    this.color = jsonData.color;
    this.moderator = jsonData.moderator;
    this.icon = jsonData.icon;
    this.col1RGB = jsonData.col1RGB;
    this.col2RGB = jsonData.col2RGB;
  }
}
