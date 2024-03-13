import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { SchoolCards } from "../../components/cards"
import ScrollToTopButton from '../../components/scroll_to_top_button/scrollToTopButton';
import "./index.css"
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'


const DepartmentsOfEachSchool: React.FC = () => {
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
                img="https://img.ltn.com.tw/Upload/news/600/2021/05/14/3532815_1_1.jpg" 
                title="輔仁大學"/>
                <SchoolCards 
                img="https://www.newton.com.tw/img/c/7a2/cGcq5SYiFWNhBzN5QzMxQjZxYmZ3kTY3cjMhdjY4IDOhZ2MzUzMxIWZzQmYv0WZ0l2LjlGcvU2apFmYv02bj5SdklWYi5yYyN3Ztl2LvoDc0RHa.jpg" 
                title="建國科技大學"/>
                <SchoolCards 
                img="https://www.overseas.edu.tw/wp-content/uploads/2020/10/%E8%87%B4%E7%90%86%E7%A7%91%E5%A4%A7%E6%A0%A1%E9%96%80-1-1024x683.jpg" 
                title="致理科技大學"/>
                <SchoolCards 
                img="http://oia.ntut.edu.tw/var/file/32/1032/img/2185/About_Taipei_Tech_pic01.jpg" 
                title="國立臺北科技大學"/>
                <SchoolCards 
                img="https://img.ltn.com.tw/Upload/news/600/2021/05/14/3532815_1_1.jpghttps://tse2.mm.bing.net/th?id=OIP.Ej7IJB4reJkjW-zEyzK2VwHaE8&pid=Api&P=0&h=180" 
                title="世新大學"/>
                <SchoolCards 
                img="https://tse3.mm.bing.net/th?id=OIP.OWjnT38b5WxRSce88ZqpvgHaE8&pid=Api&P=0&h=180" 
                title="台北城市科技大學"/>
            </div>
            <Footer />
            <ScrollToTopButton />
        </>
    );
};

export default DepartmentsOfEachSchool;
