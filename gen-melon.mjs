import axios from "axios";
import cheerio from "cheerio";

async function getHtml(search){
    try{
        return await axios.get("https://www.melon.com/search/song/index.htm?q="+search);
    } catch (e){
        console.error(e);
    }
}

async function getContentList(search){
    try{
        const songIdRegex = /[0-9]{8}/
        const contentList =[];
        const html = await getHtml(search);
        const $ = cheerio.load(html.data);
        const tableList = $("#frm_defaultList > div > table > tbody").children("tr");
        tableList.each((i, el)=>{
            const songIdData = $(el)
            .find("td:nth-child(3) div  div  a.btn.btn_icon_detail")
            .attr('href');

            const artistData = $(el)
            .find("#artistName > a")
            .text();
            const titleData = $(el)
            .find("td:nth-child(3) div div a.fc_gray b")
            .text();

            const albumData = $(el)
            .find("td:nth-child(5) div div a")
            .text();

            contentList[i] ={
                songId : songIdRegex.exec(songIdData)[0],
                artist : artistData,
                title : titleData,
                album :albumData
            };
        });
        return contentList;
    }catch(e){
        console.error(e);
    }
}

export {getContentList};
