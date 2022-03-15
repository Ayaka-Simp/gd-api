import fetch from 'node-fetch';

interface SearchFilters {
  count?: number;
  difficulty?: -1 | -2 | -3 | 1 | 2 | 3 | 4 | 5;
  demonFilter?: 1 | 2 | 3 | 4 | 5;
  gauntlet?: number;
  length?: 0 | 1 | 2 | 3 | 4;
  songID?: 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21;
  type?:
    | 'mostdownloaded'
    | 'mostliked'
    | 'trending'
    | 'recent'
    | 'awarded'
    | 'featured'
    | 'magic'
    | 'halloffame'
    | 'gdworld';
  list?: string;
  featured?: string;
  original?: string;
  twoPlayer?: string;
  coins?: string;
  epic?: string;
  starred?: string;
  noStar?: string;
  customSong?: string;
  user?: string;
}
import { URL, URLSearchParams } from 'url';
import { Level } from '../classes/level';
import { LevelNotFound } from '../errors/levelNotFoundError';

export async function getLevelById(id: string | number): Promise<Level> {
  const res = await fetch(`https://gdbrowser.com/api/level/${id}`);
  const json = await res.json();
  if (json.toString() == '-1') {
    throw new LevelNotFound(`Level with id ${id} was not found`);
  }
  return new Level(json);
}

export async function searchLevels(query: string, filters?: SearchFilters, page = 1): Promise<Level[]> {
  const levels: Level[] = [];
  const url = new URL(`https://gdbrowser.com/api/search/${query}`);
  const params = new URLSearchParams(filters ? (filters as string) : ({} as string));
  params.append('page', page.toString());
  url.search = params.toString();
  const res = await fetch(url.toString());
  const json = await res.json();
  if (json.toString() == '-1') {
    throw new LevelNotFound(`Search with query ${query} yielded no results.`);
  }
  if (filters?.count) {
    for (let i = 0; i < json.length; i++) {
      levels.push(new Level(json[i]));
    }
  } else {
    for (let i = 0; i < 10; i++) {
      levels.push(new Level(json[i]));
    }
  }

  return levels;
}
