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
export async function postComment(
  content: string,
  username: string,
  password: string,
  levelID: string,
  percent?: number,
  color?: boolean,
): Promise<string> {
  const res = await fetch(
    `https://gdbrowser.com/postComment?comment=${content}&username=${username}&password=${password}&levelID=${levelID}&percent=${percent}&color=${color}`,
    { method: 'POST' },
  );
  if (!res.ok) {
    throw new Error(`${res.statusText}`);
  }
  return res.text();
}

export async function postCommentObject(comment: IComment): Promise<string> {
  const res = await fetch(
    `https://gdbrowser.com/postComment?comment=${comment.comment}&username=${comment.username}&password=${comment.password}&levelID=${comment.levelID}&percent=${comment.percent}&color=${comment.color}`,
    { method: 'POST' },
  );
  if (!res.ok) {
    throw new Error(`${await res.text()}`);
  }
  return await res.text();
}
