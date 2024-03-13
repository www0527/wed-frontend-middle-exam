import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { SchoolCards } from "../../components/cards"
import ScrollToTopButton from '../../components/scroll_to_top_button/scrollToTopButton';
import "../north_departments_of_each_school/index.css"
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

const EastDepartmentsOfEachSchool: React.FC = () => {
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
                <SchoolCards 
                img="https://www.overseas.edu.tw/wp-content/uploads/2020/10/%E5%AD%B8%E6%A0%A1%E7%85%A7%E7%89%871-%E5%9C%96%E6%9B%B8%E8%B3%87%E8%A8%8A%E9%A4%A8-scaled.jpg" 
                title="國立台東大學"/>
                <SchoolCards 
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFbHJYZWSBb-UugUtHHmz_7kdY0gO_Fy7Vw&usqp=CAU" 
                title="國立東華大學"/>
            </div>
            <Footer />
            <ScrollToTopButton />
        </>
    );
};

export default EastDepartmentsOfEachSchool;
