import {getContentList} from "./gen-melon.mjs";

const list = await getContentList(encodeURI("오랜 날 오랜 밤"));

console.log(list);
