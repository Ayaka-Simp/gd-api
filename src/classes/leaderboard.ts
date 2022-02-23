export interface LeaderBoardItemData {
    rank: number,
    username: string,
    playerID: string,
    stars: number,
    demons: number,
    cp: number,
    coins: number,
    userCoins: number,
    diamonds: number,
    icon: number,
}

export class LeaderBoardItem {
    rank: number;
    username: string;
    playerID: string;
    stars: number;
    demons: number;
    cp: number;
    coins: number;
    userCoins: number;
    diamonds: number;
    icon: number;

    constructor (jsonData: LeaderBoardItemData) {
        this.rank = jsonData.rank;
        this.username = jsonData.username;
        this.playerID = jsonData.playerID;
        this.stars = jsonData.stars;
        this.demons = jsonData.demons;
        this.cp = jsonData.cp;
        this.coins = jsonData.coins;
        this.userCoins = jsonData.userCoins;
        this.diamonds = jsonData.diamonds;
        this.icon = jsonData.icon;
    }
}