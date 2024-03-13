import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { SchoolCards } from "../../components/cards"
import ScrollToTopButton from '../../components/scroll_to_top_button/scrollToTopButton';
import "../north_departments_of_each_school/index.css"
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

const MiddleDepartmentsOfEachSchool: React.FC = () => {
    const go = useNavigate();
    return (
        <>
            <Header />
            <div className="departmentsOfEachSchool_content">
                <div className="area_button_content">
                    <Button onClick={()=>{go('/DepartmentsOfEachSchool')}}  className='area_button' variant="contained" color="info">
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
                    <button onClick={()=>{go("/DepartmentsOfEachSchool/中區/2")}}>2</button>
                </div>
                <SchoolCards 
                img="https://www.nups.ntnu.edu.tw/upfiles/univ-expo/%E4%B8%AD%E9%83%A8/%E5%8F%B0%E4%B8%AD%E5%B8%82/%E6%8A%80%E5%B0%88%E6%A0%A1%E9%99%A2/%E5%BC%98%E5%85%89/%E5%BC%98%E5%85%89-pic02.jpg" 
                title="弘光科技大學"/>
                <SchoolCards 
                img="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/2011%E5%B9%B48%E6%9C%881%E6%97%A5%E6%94%B9%E5%90%8D%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%B8%E6%8F%AD%E7%89%8C%E5%85%B8%E7%A6%AE.jpg/300px-2011%E5%B9%B48%E6%9C%881%E6%97%A5%E6%94%B9%E5%90%8D%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%B8%E6%8F%AD%E7%89%8C%E5%85%B8%E7%A6%AE.jpg" 
                title="中州技術學院"/>
                <SchoolCards 
                img="https://img.ltn.com.tw/Upload/news/600/2013/06/03/168.jpg" 
                title="中山醫學大學"/>
                <SchoolCards 
                img="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2023/06/05/realtime/22462022.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=800&exp=3600" 
                title="環球科技大學"/>
                <SchoolCards 
                img="https://cdn.walkerland.com.tw/images/upload/poi/p/m35594/ce7c759c64ca826ddf76e871dc1576bb73d9ece8.jpg" 
                title="建國科技"/>
                <SchoolCards 
                img="https://obs.line-scdn.net/0haPqhl8ypPn9MESqICzZBKHRHMg5_dyR2bnd4H24TYk80PXl5dyJtHGEZY1MxdXghbHQlETsWZk9idX4hcQ/w644" 
                title="南開科技大學"/>
            </div>
            <Footer />
            <ScrollToTopButton />
        </>
    );
};

export default MiddleDepartmentsOfEachSchool;
