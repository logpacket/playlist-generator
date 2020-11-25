import {getContentList, getContentDetail, generatePlaylist} from "./gen-melon.mjs";

const list = await getContentList(encodeURI("오랜 날 오랜 밤"));

const detail = await getContentDetail(list[0]);

const playlist = await generatePlaylist(detail.songId);

console.log(list);

console.log(detail);

console.log(playlist);
