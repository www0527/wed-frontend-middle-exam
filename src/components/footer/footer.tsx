import "./footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import Iframe from 'react-iframe';

export default function Footer(){
    return (
        <>
        <div className="footer">
            <div className="info">
                <p id="title">聯絡我們</p>
                <p>E-mail:csim.service@gmail.com</p>
                <p>電子信箱:csim.service@gmail.com</p>
                <p>理事長:rsshaw@mail.tku.edu.tw</p>
                <p>祕書長:james@mail.tku.edu.tw</p>
                <p>備註:請優先利用email聯繫,會盡量即時回覆</p>
            </div>
            <div className="map_left">
                <p id="title">地址</p>
                <p>會址:251301 新北市淡水區英專路151號(資管系辦公室)</p>
                <p>No.151, Yingzhuan Rd., Tamsui Dist., New Taipei City 251301, Taiwan (R.O.C.)</p>
                <div className="icon">
                    <FacebookIcon style={{fontSize:"50px",color:"#3669b6",cursor: "pointer", marginRight:"5px"}}/>
                    <InstagramIcon style={{fontSize:"50px",color:"white",cursor: "pointer",marginRight:"5px"}}/>
                    <YouTubeIcon style={{fontSize:"60px",color:"red",cursor: "pointer",marginRight:"5px"}}/>
                    <XIcon style={{fontSize:"45px",cursor: "pointer",color:"white"}}/>
                </div>
            </div>
            <div className="location">
                <p id="title">地理位置</p>
                <Iframe
                url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14443.557491833624!2d121.449549!3d25.173213!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aff88cdfea69%3A0x40adc63d62b9e736!2zMjUx5paw5YyX5biC5reh5rC05Y2A6Iux5bCI6LevMTUx6Jmf!5e0!3m2!1szh-TW!2stw!4v1710338804331!5m2!1szh-TW!2stw"
                width="300"
                height="210"
                allowFullScreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
        <p className="context">中華民國資訊管理學會 版權所有@2013 CSIM All Rights Reserved.</p>
        
        </>
    )
}