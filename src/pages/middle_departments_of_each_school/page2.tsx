import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { SchoolCards } from "../../components/cards"
import ScrollToTopButton from '../../components/scroll_to_top_button/scrollToTopButton';
import "../north_departments_of_each_school/index.css"
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

const EastDepartmentsOfEachSchool2: React.FC = () => {
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
                    <Button onClick={()=>{go('/DepartmentsOfEachSchool/南區')}} className='area_button' variant="contained" color="info" >
                        南區
                    </Button>
                    <Button onClick={()=>{go('/DepartmentsOfEachSchool/東區')}} className='area_button' variant="contained" color="info" >
                        東區
                    </Button>
                </div>
                <div className="switch_page_button">
                    <button onClick={()=>{go("/DepartmentsOfEachSchool/中區")}}>1</button>
                    <button onClick={()=>{go("/DepartmentsOfEachSchool/中區/2")}}>2</button>
                </div>
                <SchoolCards 
                img="https://www.overseas.edu.tw/wp-content/uploads/2022/10/1222-870x580.jpg" 
                title="國立勤益科技大學"/>
                <SchoolCards 
                img="https://tue.utaipei.edu.tw/var/file/17/1017/img/445/962916598.jpg" 
                title="國立台中科技大學"/>
                <SchoolCards 
                img="https://doqvf81n9htmm.cloudfront.net/data/crop_article/149109/image.jpg_1140x855.jpg" 
                title="明道大學"/>
                <SchoolCards 
                img="https://images.chinatimes.com/newsphoto/2020-09-04/656/B08A00_P_02_02.jpg" 
                title="亞洲大學"/>
                <SchoolCards 
                img="https://upload.wikimedia.org/wikipedia/commons/4/44/National_United_University_in_Taiwan.jpg" 
                title="國立聯合大學"/>
            </div>
            <Footer />
            <ScrollToTopButton />
        </>
    );
};

export default EastDepartmentsOfEachSchool2;
