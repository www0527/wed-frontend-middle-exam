import "./home_news.css"
import { HomeNewsCards } from "../cards"
import { HomeNewsBannerCardsInterface } from "../../HomeNewsBannerCardsInterface"

import Button from '@mui/material/Button'
import { useNavigate } from "react-router-dom"

const HomeNewsBannerCards:React.FC<HomeNewsBannerCardsInterface> = ({ time,title,content,tags }) => {
    return(<>
        <div className="HomeNewsBanner">
            <div className="time"><p>{time}</p></div>
            <div className="banner"><p>{title}</p></div>
            <div className="content"><p>{content}</p></div>
            <div className="button_group">
                <button className="little_button"><p>{tags}</p></button>
                <div className="learn_more">了解更多</div>
            </div>
        </div>
    </>)
}

function HomeNews(){
    const go = useNavigate();
    return (
        <>
        <div className="container home_news_container">
            <div className='home_news_title_text'>
                <span>最</span><span>新資訊</span>
                <Button onClick={() => {go("/news")}} style={{backgroundColor:"#d8792e", marginLeft:"10px"}} variant="contained" color="error">查看更多</Button>
            </div>
            <div className="home_news_content">
                <div className="home_news_cards">
                    <HomeNewsCards
                    img="https://www.im.fju.edu.tw/wp-content/uploads/2024/02/%E7%B2%BE%E9%81%B8%E5%9C%96%E7%89%87-%E6%8B%9B%E7%94%9F%E8%A8%8A%E6%81%AF-19201080-1024x576.jpg"
                    title="第十八屆理事、監事...."
                    />
                    <HomeNewsCards
                    img="https://www.im.fju.edu.tw/wp-content/uploads/2024/02/35-1-1024x576.jpg"
                    title="2024第一屆傳善論文獎"
                    />
                </div>
                <div className="home_news_banner">
                    <HomeNewsBannerCards 
                    time="2023-03-11" 
                    title="Drupal跨界整合之社群大會即將開跑"
                    content=""
                    tags="業界"
                    />
                    <HomeNewsBannerCards 
                    time="2023-03-11" 
                    title="國立臺東大學資訊管理學系徵聘專任教師1名"
                    content=""
                    tags="學校"
                    />
                    <HomeNewsBannerCards 
                    time="2023-03-11" 
                    title="公告第十七屆會員代表候選人名單與簡歷冊"
                    content=""
                    tags="資訊管理學會"
                    />
                </div>
            </div>
        </div>
        </>
    )
}

export { HomeNews, }