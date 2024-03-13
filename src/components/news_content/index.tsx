import { useNavigate } from "react-router-dom"
import { NewsCards } from "../cards"
import "./index.css"
import { BannerCssName } from "../../banner"
import { css } from "@emotion/react"



const NewsContent:React.FC<BannerCssName> = ({ cssName }) => {
    const go = useNavigate();
    return(
    <>
    <div className={cssName}>
        <p>最新資訊</p>
    </div>
    <div className="content">
        <div className="switch switch_page_button">
            <button onClick={()=>{go("/news")}}>1</button>
            <button onClick={()=>{go("/news/2")}}>2</button>
            <button onClick={()=>{go("/news/3")}}>3</button>
            <button onClick={()=>{go("/news/4")}}>4</button>
            <button onClick={()=>{go("/news/5")}}>5</button>
        </div>
        <div className="news_cards_bar">
            <NewsCards 
                img="https://npost.tw/wp-content/uploads/2023/09/25b2916b5c49db617f52fa5ea48efee7-4-e1695809896771-1500x724.jpg"
                title="2024第一屆傳善論文獎"
            />
            <NewsCards 
                img="https://a.bbkz.net/forum/attachment.php?attachmentid=1811542&thumb=1&d=1463465694"
                title="【徵才】國立臺東大學資訊管理學系徵聘專任教師1名(收件至3/31)"
            />
            <NewsCards 
                img="https://s.newtalk.tw/album/news/113/5a71c177693e1.jpg"
                title="【徵才】國立成功大學工業與資訊管理學系誠徵專任教師(延至113年3月1日截止)"
            />
            <NewsCards 
                img="https://farm5.staticflickr.com/4135/4920672134_a956412376_z.jpg"
                title="【徵聘公告】國立東華大學資訊管理學系徵聘專任(案)教師 1 名"
            />
        </div>
        <div className="news_cards_bar">
            <NewsCards 
                img="https://tse1.mm.bing.net/th?id=OIP.HLXAMf0-YuRCU1vFLS8oOAAAAA&pid=Api&P=0&h=180"
                title="【會員代表大會公告】中華民國資訊管理學會第十八屆第一次會員代表大會"
            />
            <NewsCards 
                img="https://tse1.mm.bing.net/th?id=OIP.HLXAMf0-YuRCU1vFLS8oOAAAAA&pid=Api&P=0&h=180"
                title="【理監事選舉公告】社團法人中華民國資訊管理學會第十八屆理事、監事選舉作業及候選人名..."
            />
            <NewsCards 
                img="https://www.overseas.edu.tw/wp-content/uploads/2020/10/%E9%9D%9C%E5%AE%9C%E5%A4%A7%E5%AD%B8%E6%A0%A1%E9%96%80.jpg"
                title="【徵聘公告】 靜宜大學資料科學暨大數據分析與應用學系(資科系)誠徵教師"
            />
            <NewsCards 
                img="https://farm5.staticflickr.com/4135/4920672134_a956412376_z.jpg"
                title="【徵聘公告】國立東華大學資訊管理學系徵聘專任(案)教師一名 (第二次公告)"
            />
        </div>
        <div className="news_cards_bar">
            <NewsCards 
                img="https://s.newtalk.tw/album/news/113/5a71c177693e1.jpg"
                title="國立成功大學公開徵求工業與資訊管理學系系主任暨資訊管理研究所所長候選人公告"
            />
            <NewsCards 
                img="https://assetsv4.tripmoment.com/system/azure/16671/e702632c-d84b-4965-8816-a106c90c0a54.jpg"
                title="【徵聘公告】國立臺灣大學生物產業傳播暨發展學系誠徵教師公告"
            />
            <NewsCards 
                img="https://farm5.staticflickr.com/4135/4920672134_a956412376_z.jpg"
                title="【徵聘公告】國立東華大學資訊管理學系徵聘專任(案)教師一名 (延長收件截止日)"
            />
            <NewsCards 
                img="https://cdn2.ettoday.net/images/4193/d4193162.jpg"
                title="【徵才訊息】國立嘉義大學行銷與觀光管理學系誠徵專任助理教授(含)以上教師1名"
            />
        </div>
    </div>
    </>)
}
const NewsContent2:React.FC<BannerCssName> = ({ cssName }) => {
    const go = useNavigate();
    return(
    <>
    <div className={cssName}>
        <p>最新資訊</p>
    </div>
    <div className="content">
        <div className="switch switch_page_button">
            <button onClick={()=>{go("/news")}}>1</button>
            <button onClick={()=>{go("/news/2")}}>2</button>
            <button onClick={()=>{go("/news/3")}}>3</button>
            <button onClick={()=>{go("/news/4")}}>4</button>
            <button onClick={()=>{go("/news/5")}}>5</button>
        </div>
        <div className="news_cards_bar">
            <NewsCards 
                img="https://t.kfs.io/upload_images/96671/mark01-9_promote.png"
                title="[選舉公告]中華民國資訊管理學會第十八屆理事、監事選舉自即日起開始接受候選人推薦登記"
            />
            <NewsCards 
                img="https://farm5.staticflickr.com/4135/4920672134_a956412376_z.jpg"
                title="【徵聘公告】國立東華大學資訊管理學系徵聘專任(案)教師一名"
            />
            <NewsCards 
                img="https://images.chinatimes.com/newsphoto/2017-01-28/900/B08A00_P_08_01.jpg"
                title="【徵才訊息】「嶺東科技大學資訊管理系誠徵教師」"
            />
            <NewsCards 
                img="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2019/10/28/realtime/6995537.jpeg&s=Y&x=0&y=0&sw=1200&sh=796&exp=3600"
                title="【徵才訊息】國立中央大學公開徵求管理學院院長候選人啟事 第三次延長公告"
            />
        </div>
        <div className="news_cards_bar">
            <NewsCards 
                img="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2019/10/28/realtime/6995537.jpeg&s=Y&x=0&y=0&sw=1200&sh=796&exp=3600"
                title="【徵才訊息】國立中央大學公開徵求管理學院院長候選人啟事"
            />
            <NewsCards 
                img="https://d1j71ui15yt4f9.cloudfront.net/wp-content/uploads/2020/02/06190832/81003a-20200206160601562-0.jpg"
                title="【徵才資訊】靜宜大學資料科學暨大數據分析與應用學系(資科系)誠徵教師"
            />
            <NewsCards 
                img="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2019/10/28/realtime/6995537.jpeg&s=Y&x=0&y=0&sw=1200&sh=796&exp=3600"
                title="【徵才資訊】國立中央大學公開徵求管理學院院長候選人啟事"
            />
            <NewsCards 
                img="https://s.newtalk.tw/album/news/113/5a71c177693e1.jpg"
                title="【徵才】國立成功大學工業與資訊管理學系誠徵專任教師(延至113年3月1日截止)"
            />
        </div>
        <div className="news_cards_bar">
            <NewsCards 
                img="https://t.kfs.io/upload_images/96671/mark01-9_promote.png"
                title="第34屆國際資訊管理學術研討會(ICIM 2023)徵稿訊息"
            />
            <NewsCards 
                img="https://techexpo.moe.edu.tw/search/images/upload/schools/5/b/2021063006543401_1.jpg"
                title="【徵才資訊】國立高雄科技大學資訊管理系誠徵專任或專案助理教授(含)以上1名"
            />
            <NewsCards 
                img="https://techexpo.moe.edu.tw/search/images/upload/schools/5/b/2021063006543401_1.jpg"
                title="【徵才公告】國立高雄科技大學(燕巢/建工校區)智慧商務系專任或專案教師徵聘公告"
            />
            <NewsCards 
                img="http://gen.ntub.edu.tw/var/file/9/1009/randimg/mobilead_4466_5125419_96775.jpg"
                title="【徵才公告】國立臺北商業大學資訊管理系徵聘專任教師(112/2/6止)"
            />
        </div>
    </div>
    </>)
}
const NewsContent3:React.FC<BannerCssName> = ({ cssName }) => {
    const go = useNavigate();
    return(
    <>
    <div className={cssName}>
        <p>最新資訊</p>
    </div>
    <div className="content">
        <div className="switch switch_page_button">
            <button onClick={()=>{go("/news")}}>1</button>
            <button onClick={()=>{go("/news/2")}}>2</button>
            <button onClick={()=>{go("/news/3")}}>3</button>
            <button onClick={()=>{go("/news/4")}}>4</button>
            <button onClick={()=>{go("/news/5")}}>5</button>
        </div>
        <div className="news_cards_bar">
            <NewsCards 
                img="https://farm5.staticflickr.com/4135/4920672134_a956412376_z.jpg"
                title="【徴聘公告】國立東華大學資訊管理學系徴聘專任(案)教師"
            />
            <NewsCards 
                img="https://www.overseas.edu.tw/wp-content/uploads/2020/10/%E6%AD%A3%E4%BF%AE_%E8%A1%8C%E6%94%BF%E5%A4%A7%E6%A8%93-2048x1366.jpg"
                title="【徵才公告】正修科技大學資訊管理系誠徵專案助理教授(含)以上教師"
            />
            <NewsCards 
                img="https://farm5.staticflickr.com/4135/4920672134_a956412376_z.jpg"
                title="【徵才公告】國立東華大學資訊管理學系徵聘專任(案)教師一名 (第二次公告)"
            />
            <NewsCards 
                img="https://photo.travelking.com.tw/scenery/87666674-CC55-4F4D-82B8-788322950090_e.jpg"
                title="【徵才公告】國立高雄大學資訊管理學系擬誠徵專任教師1名"
            />
        </div>
        <div className="news_cards_bar">
            <NewsCards 
                img="https://copeneduc.org/wp-content/uploads/2019/06/%E6%9D%B1%E5%90%B3-1024x683.jpg"
                title="【徵才公告】東吳大學資訊管理學系徵聘專任教師"
            />
            <NewsCards 
                img="https://t.kfs.io/upload_images/96671/mark01-9_promote.png"
                title="【會員代表當選公告】中華民國資訊管理學會第十七屆會員代表選舉 會員代表當選名單"
            />
            <NewsCards 
                img="https://www.parkinsys.com.tw/wp-content/uploads/2018/08/20170522140711-d4ff94e2b2029b2141d60a64a824f0e6-desktop.jpg"
                title="【徵才公告】輔仁大學資訊管理學系 誠徵 助理教授級(含)以上專任/專案教學人員（至111年9..."
            />
            <NewsCards 
                img="https://t.kfs.io/upload_images/96671/mark01-9_promote.png"
                title="【會員代表選舉公告】中華民國資訊管理學會第十七屆會員代表選舉投票公告"
            />
        </div>
        <div className="news_cards_bar">
            <NewsCards 
                img="https://t.kfs.io/upload_images/96671/mark01-9_promote.png"
                title="公告第十七屆會員代表候選人名單與簡歷冊"
            />
            <NewsCards 
                img="https://farm5.staticflickr.com/4135/4920672134_a956412376_z.jpg"
                title="【徵才公告】國立東華大學資訊管理學系徵聘專任(案)教師一名"
            />
            <NewsCards 
                img="https://i.ytimg.com/vi/DGaN_RLLYyM/maxresdefault.jpg"
                title="【徵才公告】國立臺北商業大學資訊與決策科學研究所徵聘專任教師／約聘教學人員"
            />
            <NewsCards 
                img="https://cdn2.ettoday.net/images/4193/d4193162.jpg"
                title="【徵才公告】國立嘉義大學徵聘專任教師啟事"
            />
        </div>
    </div>
    </>)
}
const NewsContent4:React.FC<BannerCssName> = ({ cssName }) => {
    const go = useNavigate();
    return(
    <>
    <div className={cssName}>
        <p>最新資訊</p>
    </div>
    <div className="content">
        <div className="switch switch_page_button">
            <button onClick={()=>{go("/news")}}>1</button>
            <button onClick={()=>{go("/news/2")}}>2</button>
            <button onClick={()=>{go("/news/3")}}>3</button>
            <button onClick={()=>{go("/news/4")}}>4</button>
            <button onClick={()=>{go("/news/5")}}>5</button>
        </div>
        <div className="news_cards_bar">
            <NewsCards 
                img="https://techexpo.moe.edu.tw/search/images/upload/schools/5/b/2021063006543401_1.jpg"
                title="【徵才公告】國立高雄科技大學資訊管理系誠徵專任或專案助理教授(含)以上3名(111.08.31收..."
            />
            <NewsCards 
                img="https://3.bp.blogspot.com/-WmCTEPs6fsM/VOYL9fkw4ZI/AAAAAAAAGTg/CQ-2MHXTRCE/s1600/DSC_2107%2B27%2B%E5%9C%8B%E7%AB%8B%E5%8F%B0%E4%B8%AD%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%B8%2B2015-02-19.jpg"
                title="【徵才公告】 國立臺中科技大學資訊管理系誠徵【專案】教學人員"
            />
            <NewsCards 
                img="https://t.kfs.io/upload_images/96671/mark01-9_promote.png"
                title="【會員代表選舉延期公告】中華民國資訊管理學會第十七屆會員代表選舉投票..."
            />
            <NewsCards 
                img="https://t.kfs.io/upload_images/96671/mark01-9_promote.png"
                title="第33屆國際資訊管理學術研討會(ICIM2022)投稿系統開放到 4月22日"
            />
        </div>
        <div className="news_cards_bar">
            <NewsCards 
                img="https://t.kfs.io/upload_images/96671/mark01-9_promote.png"
                title="【會員代表選舉公告】徵求第十七屆會員代表候選人登記(含聯署)事宜"
            />
            <NewsCards 
                img="https://3.bp.blogspot.com/-WmCTEPs6fsM/VOYL9fkw4ZI/AAAAAAAAGTg/CQ-2MHXTRCE/s1600/DSC_2107%2B27%2B%E5%9C%8B%E7%AB%8B%E5%8F%B0%E4%B8%AD%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%B8%2B2015-02-19.jpg"
                title="【徵才公告】臺中科技大學資訊管理系誠徵專任及專案教學人員公告"
            />
            <NewsCards 
                img="https://t.kfs.io/upload_images/96671/mark01-9_promote.png"
                title="第33屆國際資訊管理學術研討會(ICIM 2022)徵稿訊息"
            />
            <NewsCards 
                img="https://tse3.mm.bing.net/th?id=OIP.fFfXnoPo442E9qES9fANyAHaFj&pid=Api&P=0&h=180"
                title="【徵才公告】國立中正大學徵聘資訊管理學系教師"
            />
        </div>
        <div className="news_cards_bar">
            <NewsCards 
                img="https://cdn2.ettoday.net/images/4193/d4193162.jpg"
                title="【徵才公告】國立嘉義大學徵聘資訊管理學系教師"
            />
            <NewsCards 
                img="https://assetsv4.tripmoment.com/system/azure/16671/e702632c-d84b-4965-8816-a106c90c0a54.jpg"
                title="【徵才公告】國立中正大學管理學院徵求資訊管理學系系主任候選人啟事 (第6次延長公告)"
            />
            <NewsCards 
                img="https://farm5.staticflickr.com/4135/4920672134_a956412376_z.jpg"
                title="【徵才公告】國立聯合大學資訊管理學系誠徵專任助理教授一名"
            />
            <NewsCards 
                img="https://cdn2.ettoday.net/images/4193/d4193162.jpg"
                title="【徵才公告】國立中山大學行銷傳播管理研究所誠徵專任教師"
            />
        </div>
    </div>
    </>)
}
const NewsContent5:React.FC<BannerCssName> = ({ cssName }) => {
    const go = useNavigate();
    return(
    <>
    <div className={cssName}>
        <p>最新資訊</p>
    </div>
    <div className="content">
        <div className="switch switch_page_button">
            <button onClick={()=>{go("/news")}}>1</button>
            <button onClick={()=>{go("/news/2")}}>2</button>
            <button onClick={()=>{go("/news/3")}}>3</button>
            <button onClick={()=>{go("/news/4")}}>4</button>
            <button onClick={()=>{go("/news/5")}}>5</button>
        </div>
        <div className="news_cards_bar">
            <NewsCards 
                img="https://npost.tw/wp-content/uploads/2023/09/25b2916b5c49db617f52fa5ea48efee7-4-e1695809896771-1500x724.jpg"
                title="【徵才公告】國立中正大學管理學院徵求資訊管理學系系主任候選人啟事 (第5次延長公告)"
            />
            <NewsCards 
                img="https://cdn2.ettoday.net/images/4193/d4193162.jpg"
                title="【徵才公告】國立嘉義大學資訊管理學系誠徵專任助理教授(含)以上教師1名"
            />
            <NewsCards 
                img="https://s.newtalk.tw/album/news/113/5a71c177693e1.jpg"
                title="【徵才公告】國立勤益科技大學資訊管理學系誠徵專案教師公告"
            />
            <NewsCards 
                img="https://farm5.staticflickr.com/4135/4920672134_a956412376_z.jpg"
                title="【徵才公告】國立臺中科技大學資訊管理系誠徵【專案】教學人員"
            />
        </div>
        <div className="news_cards_bar">
            <NewsCards 
                img="https://t.kfs.io/upload_images/96671/mark01-9_promote.png"
                title="【選舉公告】中華民國資訊管理學會第十七屆理監事選舉作業結果公告"
            />
            <NewsCards 
                img="https://tse1.mm.bing.net/th?id=OIP.HLXAMf0-YuRCU1vFLS8oOAAAAA&pid=Api&P=0&h=180"
                title="【徵才公告】國立高雄科技大學資訊管理系誠徵專任（或專案）助理教授(含)以上2名"
            />
            <NewsCards 
                img="https://www.overseas.edu.tw/wp-content/uploads/2020/10/%E9%9D%9C%E5%AE%9C%E5%A4%A7%E5%AD%B8%E6%A0%A1%E9%96%80.jpg"
                title="【活動訊息】IMP 2021 第26屆國際資訊管理暨實務研討會"
            />
            <NewsCards 
                img="https://t.kfs.io/upload_images/96671/mark01-9_promote.png"
                title="【會員代表大會公告】中華民國資訊管理學會第十六屆第三次會員代表大會"
            />
        </div>
        <div className="news_cards_bar">
            <NewsCards 
                img="https://t.kfs.io/upload_images/96671/mark01-9_promote.png"
                title="【選舉事宜】中華民國資訊管理學會第十七屆理監事選舉"
            />
            <NewsCards 
                img="https://assetsv4.tripmoment.com/system/azure/16671/e702632c-d84b-4965-8816-a106c90c0a54.jpg"
                title="【徵才公告】國立聯合大學資訊管理學系誠徵專任助理教授一名"
            />
            <NewsCards 
                img="https://farm5.staticflickr.com/4135/4920672134_a956412376_z.jpg"
                title="【徵才資訊】輔仁大學資訊管理學系 誠徵 助理教授(含)以上專任/專案教師（即日起至110年12..."
            />
            <NewsCards 
                img="https://cdn2.ettoday.net/images/4193/d4193162.jpg"
                title="【徵才資訊】國立中正大學管理學院徵求資訊管理學系系主任候選人啟事 (第3次延長公告)"
            />
        </div>
    </div>
    </>)
}

export { NewsContent, NewsContent2, NewsContent3, NewsContent4, NewsContent5}