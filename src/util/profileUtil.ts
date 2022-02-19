import fetch from 'node-fetch';
import { Profile } from '../classes/profile';

export async function getProfileByName(name: string): Promise<Profile> {
  const jsonData = await (await fetch(`https://gdbrowser.com/api/profile/${name}`)).json();
  if (jsonData.toString() == "-1") {
    throw new Error(`Profile with name ${name} was not found`);
}
  return new Profile(jsonData);
}

export async function getProfileById(id: string | number): Promise<Profile> {
  const jsonData = await (await fetch(`https://gdbrowser.com/api/profile/${id}`)).json();
  return new Profile(jsonData);
}
