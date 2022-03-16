import fetch from 'node-fetch';
import { Post, IPost } from '../classes/post';
export async function getCommentsBy(id: string, filters?: object): Promise<Post[]> {
  const newFilters = filters ?? {};
  const url = new URL(`https://gdbrowser.com/api/comments/${id}`);
  const searchFilters = new URLSearchParams(newFilters.toString());
  url.search = searchFilters.toString();
  const jsonData: IPost[] = await (await fetch(url)).json();
  return jsonData.map((post: IPost) => new Post(post));
}

export async function getProfilePost(id: string, filters?: object): Promise<Post[]> {
  const newFilters = filters ?? {};
  const url = new URL(`https://gdbrowser.com/api/comments/${id}`);
  const searchFilters = new URLSearchParams(newFilters.toString());
  url.search = searchFilters.toString();
  const jsonData: IPost[] = await (await fetch(url)).json();
  return jsonData.map((post: IPost) => new Post(post));
}
