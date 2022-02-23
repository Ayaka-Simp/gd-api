import fetch from 'node-fetch'
import { LeaderBoardItem } from '..';

export type AccurateLeaderboardType = "stars" | "coins" | "diamonds" | "demons";

export interface AccurateLeaderboardSearchFilters {
    type?: AccurateLeaderboardType,
    mod?: boolean,
}

export async function getLeaderboard(count: number): Promise<LeaderBoardItem[]> {
    const res = await fetch(`https://gdbrowser.com/api/leaderboard?count=${count}`);
    const json = await res.json();
    const leaderboard: LeaderBoardItem[] = [];
    for (let i = 0; i < json.length; i++) {
        leaderboard.push(new LeaderBoardItem(json[i]));
    }
    return leaderboard;
}

export async function getCreatorLeaderboard(count: number): Promise<LeaderBoardItem[]> {
    const res = await fetch(`https://gdbrowser.com/api/leaderboard?count=${count}&creator`);
    const json = await res.json();
    const leaderboard: LeaderBoardItem[] = [];
    for (let i = 0; i < json.length; i++) {
        leaderboard.push(new LeaderBoardItem(json[i]));
    }
    return leaderboard;
}

export async function getAccurateLeaderboard(filters?: AccurateLeaderboardSearchFilters): Promise<LeaderBoardItem[]> {
    const url = new URL(`https://gdbrowser.com/api/leaderboard?accurate`);
    const params = new URLSearchParams(filters ? (filters as string) : ({} as string));
    url.search = params.toString();
    const res = await fetch(url.toString());
    const json = await res.json();
    const leaderboard: LeaderBoardItem[] = [];
    for (let i = 0; i < json.length; i++) {
        leaderboard.push(new LeaderBoardItem(json[i]));
    }
    return leaderboard;
}