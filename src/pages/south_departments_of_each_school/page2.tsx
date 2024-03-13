import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { SchoolCards } from "../../components/cards"
import ScrollToTopButton from '../../components/scroll_to_top_button/scrollToTopButton';
import "../north_departments_of_each_school/index.css"
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
                    <button onClick={()=>{go("/DepartmentsOfEachSchool/南區")}}>1</button>
                    <button onClick={()=>{go("/DepartmentsOfEachSchool/南區/2")}}>2</button>
                </div>
                <SchoolCards 
                img="https://tse2.mm.bing.net/th?id=OIP.W1L6ZjFiva3d9ImqjJ7XigHaFj&pid=Api&P=0&h=180" 
                title="中華民國海軍軍官學校"/>
                <SchoolCards 
                img="https://www.google.com.tw/url?sa=i&url=https%3A%2F%2Fstartup.sme.gov.tw%2Fhome%2Fmodules%2Frmap%2Fspace_detail.php%3FsId%3D327&psig=AOvVaw2O8mockw4_oM4HL6pg8Tag&ust=1710316796936000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKC_sOOg7oQDFQAAAAAdAAAAABAE" 
                title="國立成功大學"/>
                <SchoolCards 
                img="https://www.google.com.tw/url?sa=i&url=https%3A%2F%2Fwww.cycu.edu.tw%2F%3Fp%3D27506&psig=AOvVaw0sUCVt9LBPibyt-sabt8mu&ust=1710316866512000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNiil_-g7oQDFQAAAAAdAAAAABAE" 
                title="中原大學"/>
                <SchoolCards 
                img="http://oia.ntut.edu.tw/var/file/32/1032/img/2185/About_Taipei_Tech_pic01.jpg" 
                title="國立中正大學"/>
                <SchoolCards 
                img="https://img.ltn.com.tw/Upload/news/600/2021/05/14/3532815_1_1.jpghttps://tse2.mm.bing.net/th?id=OIP.Ej7IJB4reJkjW-zEyzK2VwHaE8&pid=Api&P=0&h=180" 
                title="國立中山大學"/>
                <SchoolCards 
                img="https://tse3.mm.bing.net/th?id=OIP.OWjnT38b5WxRSce88ZqpvgHaE8&pid=Api&P=0&h=180" 
                title="正修科技大學"/>
            </div>
            <Footer />
            <ScrollToTopButton />
        </>
    );
};

export default DepartmentsOfEachSchool2;
