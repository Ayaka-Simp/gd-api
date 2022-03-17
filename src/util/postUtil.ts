/**
 * Please note that this whole file covers parts of the api that are usually broken and will not work most of the time. I have to cover it anyway.
 */

import fetch from 'node-fetch';

export interface IComment {
  comment: string;
  username: string;
  accountID: string;
  password: string;
  levelID: string;
  percent?: number;
  color?: boolean;
}

export interface IProfilePost {
  comment: string;
  username: string;
  accountID: string;
  password: string;
  color?: boolean;
}

export async function postComment(
  content: string,
  username: string,
  password: string,
  levelID: string,
): Promise<string>;
export async function postComment(
  content: string,
  username: string,
  password: string,
  levelID: string,
  percent?: number,
): Promise<string>;
/**
 * Please note that this function will not work 100% of the time.
 */
export async function postComment(
  content: string,
  username: string,
  password: string,
  levelID: string,
  percent?: number,
  color?: boolean,
): Promise<string> {
  let url = '';
  if (percent) {
    if (color) {
      url = `https://gdbrowser.com/postComment?comment=${content}&username=${username}&password=${password}&levelID=${levelID}&percent=${percent}&color=${color}`;
    } else {
      url = `https://gdbrowser.com/postComment?comment=${content}&username=${username}&password=${password}&levelID=${levelID}&percent=${percent}`;
    }
  } else if (color) {
    url = `https://gdbrowser.com/postComment?comment=${content}&username=${username}&password=${password}&levelID=${levelID}&color=${color}`;
  } else {
    url = `https://gdbrowser.com/postComment?comment=${content}&username=${username}&password=${password}&levelID=${levelID}`;
  }
  const res = await fetch(url, { method: 'POST' });
  if (!res.ok) {
    throw new Error(`${res.statusText}`);
  }
  return res.text();
}

/**
 * Please note that this function will not work 100% of the time.
 */
export async function postCommentObject(comment: IComment): Promise<string> {
  let url = '';
  if (comment.percent) {
    if (comment.color) {
      url = `https://gdbrowser.com/postComment?comment=${comment.comment}&username=${comment.username}&password=${comment.password}&levelID=${comment.levelID}&percent=${comment.percent}&color=${comment.color}`;
    } else {
      url = `https://gdbrowser.com/postComment?comment=${comment.comment}&username=${comment.username}&password=${comment.password}&levelID=${comment.levelID}&percent=${comment.percent}`;
    }
  } else if (comment.color) {
    url = `https://gdbrowser.com/postComment?comment=${comment.comment}&username=${comment.username}&password=${comment.password}&levelID=${comment.levelID}&color=${comment.color}`;
  } else {
    url = `https://gdbrowser.com/postComment?comment=${comment.comment}&username=${comment.username}&password=${comment.password}&levelID=${comment.levelID}`;
  }
  const res = await fetch(url, { method: 'POST' });
  if (!res.ok) {
    throw new Error(`${await res.text()}`);
  }
  return await res.text();
}
/**
 * Please note that this function will not work 100% of the time.
 */
export async function postProfileCommentObject(post: IProfilePost): Promise<string> {
  let url = '';
  if (post.color) {
    url = `https://gdbrowser.com/postProfileComment?comment=${post.comment}&username=${post.username}&password=${post.password}&accountID=${post.accountID}&color=${post.color}`;
  } else {
    url = `https://gdbrowser.com/postProfileComment?comment=${post.comment}&username=${post.username}&password=${post.password}&accountID=${post.accountID}`;
  }
  const res = await fetch(url, { method: 'POST' });
  if (!res.ok) {
    throw new Error(`${await res.text()}`);
  }
  return await res.text();
}

export async function postProfileComment(
  content: string,
  username: string,
  accountID: string,
  password: string,
): Promise<string>;
export async function postProfileComment(
  content: string,
  username: string,
  accountID: string,
  password: string,
  color?: boolean,
): Promise<string> {
  let url = '';
  if (color) {
    url = `https://gdbrowser.com/postProfileComment?comment=${content}&username=${username}&password=${password}&accountID=${accountID}&color=${color}`;
  } else {
    url = `https://gdbrowser.com/postProfileComment?comment=${content}&username=${username}&password=${password}&accountID=${accountID}`;
  }
  const res = await fetch(url, { method: 'POST' });
  if (!res.ok) {
    throw new Error(`${res.statusText}`);
  }
  return res.text();
}

export async function like(
  id: string,
  like: 1 | 0,
  type: 1 | 2 | 3,
  extraID: string | 0,
  accountID: string,
  password: string,
): Promise<string> {
  const res = await fetch(
    `https://gdbrowser.com/like?id=${id}&like=${like}&type=${type}&extraID=${extraID}&accountID=${accountID}&password=${password}`,
    { method: 'POST' },
  );

  if (!res.ok) {
    throw new Error(`${await res.text()}`);
  }

  return await res.text();
}
