import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { SchoolCards } from "../../components/cards"
import ScrollToTopButton from '../../components/scroll_to_top_button/scrollToTopButton';
import "./index.css"
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'


const DepartmentsOfEachSchool2: React.FC = () => {
    const go = useNavigate();
    return (
        <>
            <Header />
            <div className="departmentsOfEachSchool_content">
                <div className="area_button_content">
                    <Button onClick={()=>{go('/DepartmentsOfEachSchool')}} className='area_button' variant="contained" color="info">
                        北區
                    </Button>
                    <Button onClick={()=>{go('/DepartmentsOfEachSchool/中區')}} className='area_button' variant="contained" color="info">
                        中區
                    </Button>
                    <Button onClick={()=>{go('/DepartmentsOfEachSchool/南區')}} className='area_button' variant="contained" color="info">
                        南區
                    </Button>
                    <Button onClick={()=>{go('/DepartmentsOfEachSchool/東區')}} className='area_button' variant="contained" color="info">
                        東區
                    </Button>
                </div>
                <div className="switch_page_button">
                    <button onClick={()=>{go("/DepartmentsOfEachSchool")}}>1</button>
                    <button onClick={()=>{go("/DepartmentsOfEachSchool/2")}}>2</button>
                </div>
                <SchoolCards 
                img="https://tse2.mm.bing.net/th?id=OIP.W1L6ZjFiva3d9ImqjJ7XigHaFj&pid=Api&P=0&h=180" 
                title="中國文化大學"/>
                <SchoolCards 
                img="https://pic.pimg.tw/king8/1384490667-428451841_wn.jpg" 
                title="中國科技大學"/>
                <SchoolCards 
                img="https://www.cycu.edu.tw/wp-content/uploads/01-%E4%B8%AD%E5%8E%9F%E5%A4%A7%E5%AD%B8%E6%9C%8920%E4%BD%8D%E6%95%99%E6%8E%88%E6%A6%AE%E7%99%BB%E3%80%8C%E7%B5%82%E8%BA%AB%E7%A7%91%E5%AD%B8%E5%BD%B1%E9%9F%BF%E5%8A%9B%E6%8E%92%E8%A1%8C%E6%A6%9C%E3%80%8D%E6%8E%92%E5%90%8D%E5%85%A8%E7%90%83%E5%89%8D2%E9%A0%82%E5%B0%96%E7%A7%91%E5%AD%B8%E5%AE%B6%E5%90%8D%E5%96%AE%E3%80%82.jpeg" 
                title="中原大學"/>
                <SchoolCards 
                img="https://www.taiwanhot.net/cache/1037369/lg/medias-20220929-63353b3b25ecc.jpeg" 
                title="元智大學"/>
                <SchoolCards 
                img="https://s.yimg.com/ny/api/res/1.2/kgn90w4YC8LlK4m_TBhopg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM4NA--/https://media.zenfs.com/zh-tw/mirrormedia.mg/b82f76972a2ec3c6bbb9ba0bc377acde" 
                title="中華大學"/>
                <SchoolCards 
                img="https://www.hcu.edu.tw/hcu/img/cms/848/500/4/2018-03/201803051639371226830074.jpg" 
                title="玄奘大學"/>
            </div>
            <Footer />
            <ScrollToTopButton />
        </>
    );
};

export default DepartmentsOfEachSchool2;
