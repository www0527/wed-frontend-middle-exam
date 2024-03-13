import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { SchoolCards } from "../../components/cards"
import ScrollToTopButton from '../../components/scroll_to_top_button/scrollToTopButton';
import "../north_departments_of_each_school/index.css"
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

const SouthDepartmentsOfEachSchool: React.FC = () => {
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
                    <button onClick={()=>{go("/DepartmentsOfEachSchool/南區")}}>1</button>
                    <button onClick={()=>{go("/DepartmentsOfEachSchool/南區/2")}}>2</button>
                </div>
                <SchoolCards 
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMFPfHO7Pxwl-LT4iFq-_jhaLeHGve9YbSzA&usqp=CAU" 
                title="義守大學"/>
                <SchoolCards 
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJUNXu2OwbsXTcPo4rTRTP1UyF0nRrSH0KrAiGe9cAtuB1aWi3HnGP9DOnwGvgHAbiSRo&usqp=CAU" 
                title="南華大學"/>
                <SchoolCards 
                img="https://www.overseas.edu.tw/wp-content/uploads/2020/10/2020_05_25_%E9%98%B2-scaled-e1638279313436-1031x580.jpg" 
                title="長榮大學"/>
                <SchoolCards 
                img="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/%E5%8F%B0%E5%8D%97%E5%A4%A7%E5%AD%B8_Tainan_University_-_panoramio_%281%29.jpg/250px-%E5%8F%B0%E5%8D%97%E5%A4%A7%E5%AD%B8_Tainan_University_-_panoramio_%281%29.jpg" 
                title="國立臺南大學"/>
                <SchoolCards 
                img="https://uc.udn.com.tw/photo/2021/05/31/realtime/12388713.jpg" 
                title="國立嘉義大學"/>
                <SchoolCards 
                img="https://photo.travelking.com.tw/scenery/87666674-CC55-4F4D-82B8-788322950090_e.jpg" 
                title="國立高雄大學"/>
            </div>
            <Footer />
            <ScrollToTopButton />
        </>
    );
};

export default SouthDepartmentsOfEachSchool;
