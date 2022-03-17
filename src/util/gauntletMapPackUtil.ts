import { GauntletOrMapPackItem, IGauntletOrMapPack } from '../classes/gauntletMapPack';
import fetch from 'node-fetch';

export async function getMapPack(query: string): Promise<GauntletOrMapPackItem> {
  let returnValue!: GauntletOrMapPackItem;
  const res = await fetch(`https://gdbrowser.com/api/mappacks`);
  const mapPacks: IGauntletOrMapPack[] = await res.json();
  for (const mapPack of mapPacks) {
    if (mapPack.name.toLowerCase() === query.toLowerCase()) {
      returnValue = new GauntletOrMapPackItem(mapPack);
      break;
    }
  }
  return returnValue;
}

export async function getMapPacks(): Promise<GauntletOrMapPackItem[]> {
  const res = await fetch(`https://gdbrowser.com/api/mappacks`);
  const mapPacks: IGauntletOrMapPack[] = await res.json();
  const mapPacksArray: GauntletOrMapPackItem[] = [];
  for (const mapPack of mapPacks) {
    mapPacksArray.push(new GauntletOrMapPackItem(mapPack));
  }
  return mapPacksArray;
}

export async function getGauntlet(query: string): Promise<GauntletOrMapPackItem> {
  let returnValue!: GauntletOrMapPackItem;
  const res = await fetch(`https://gdbrowser.com/api/gauntlets`);
  const gauntlets: IGauntletOrMapPack[] = await res.json();
  for (const gauntlet of gauntlets) {
    if (gauntlet.name.toLowerCase() === query.toLowerCase()) {
      returnValue = new GauntletOrMapPackItem(gauntlet);
      break;
    }
  }
  return returnValue;
}

export async function getGauntlets(): Promise<GauntletOrMapPackItem[]> {
  const res = await fetch(`https://gdbrowser.com/api/gauntlets`);
  const gauntlets: IGauntletOrMapPack[] = await res.json();
  const gauntletsArray: GauntletOrMapPackItem[] = [];
  for (const mapPack of gauntlets) {
    gauntletsArray.push(new GauntletOrMapPackItem(mapPack));
  }
  return gauntletsArray;
}
