import fetch from 'node-fetch';
import { Profile } from '../classes/profile';

export async function getProfileByName(name: string): Promise<Profile> {
  const jsonData = await fetch(`https://gdbrowser.com/api/profile/${name}`);
  return new Profile(await jsonData.json());
}

export async function getProfileById(id: string | number): Promise<Profile> {
  const jsonData = await fetch(`https://gdbrowser.com/api/profile/${id}`);
  return new Profile(await jsonData.json());
}
