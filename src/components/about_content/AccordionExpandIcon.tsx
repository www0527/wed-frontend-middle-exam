import "./AccordionExpandIcon.css"

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';

export default function AccordionExpandIcon() {
    const about_society = {
        backgroundColor: "#f6efe8",
    }
    const typographText = {
        fontSize: "1.5rem",
        color:"#4c4c4c",
        fontWeight: "bold",
    }

    return (
    <div className="about_content">
        <div className="page_name">
            關於學會
        </div>
        <div className="about_line">
            <div className="line_left">
                <div className="line_title">
                    <p>關於學會</p>
                </div>
                <Accordion  className='About_Society'>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        style={about_society}
                    >
                        <Typography style={typographText}>簡介</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <div className="about_info">
                                <p>中華民國資訊管理學會成立於民國 79年，係集合群國大專院校資訊管理學門之學者專家與部分資訊業界之精英組合而成。為內政部登記的學術研究性社團法人。學會主要成員是全國所有資訊管理系教授。全國大專院校中，計有119所資訊管理系所。全國大專院校資訊管理學系每年約有 2萬多名畢業生。</p>
                                
                                <h3>宗旨</h3>
                                <p>本會之宗旨為促進資訊管理學術之研究發展，推廣資訊管理學術之實務應用，整合資訊管理學術之理論及實務，與提昇資訊管理學域之教育水準。</p>
                                
                                <h3>願景</h3>
                                <p>使資管學會成為最具活力及影響力的學術團體。強化資訊管理學域之可視度，提升資管人才的學術，專技與產學互動達到最優良的品質。</p>
                                
                                <h3>任務</h3>
                                <ul>
                                    <li>從事資訊管理學術及實務之整合研究；</li>
                                    <li>舉辦及參加國內外資訊管理之相關學術會議及活動；</li>
                                    <li>建議資訊管理之課程架構；</li>
                                    <li>辦理資訊管理進修教育；</li>
                                    <li>發行期刊及著譯叢書；</li>
                                    <li>接受政府及民間之委託，辦理與資訊管理之相關研究、諮詢與服務；</li>
                                    <li>符合本會宗旨之其他事項。</li>
                                </ul>
                                
                                <h3>歷任理事長</h3>
                                <ul>
                                    <li>《79~80 年》第一屆 中央大學資訊管理系 宋鎧 教授</li>
                                    <li>《80~82 年》第二屆 中央大學資訊管理系 宋鎧 教授</li>
                                    <li>《82~84 年》第三屆 中央大學資訊管理系 范錚強 教授</li>
                                    <li>《84~86 年》第四屆 中央大學資訊管理系 范錚強 教授</li>
                                    <li>《86~88 年》第五屆 元智工學院資訊學院 鄭鳳生 教授</li>
                                    <li>《88~90 年》第六屆 政治大學資訊管理系 周宣光 教授</li>
                                    <li>《90~92 年》第七屆 政治大學資訊管理系 周宣光 教授</li>
                                    <li>《92~94 年》第八屆 淡江大學資訊管理系 黃明達 教授</li>
                                    <li>《94~96 年》第九屆 淡江大學資訊管理系 黃明達 教授</li>
                                    <li>《96~98 年》第十屆 輔仁大學資訊管理系 楊銘賢 教授</li>
                                    <li>《98~100 年》第十一屆 輔仁大學資訊管理系 楊銘賢 教授</li>
                                    <li>《100~102 年》第十二屆 台灣大學工管系 游張松 教授</li>
                                    <li>《102~104 年》第十三屆 台灣大學工管系 游張松 教授</li>
                                    <li>《104~106 年》第十四屆 臺北科技大學資訊與財金管理系 翁頌舜 教授</li>
                                    <li>《106~108年》第十五屆 臺北科技大學資訊與財金管理系 翁頌舜 教授</li>
                                    <li>《108~110年》第十六屆 中正大學資訊管理學系暨研究所 廖則竣 教授</li>
                                    <li>《110~112年》第十七屆 銘傳大學資訊管理學系暨研究所 廖則竣 教授</li>
                                    <li>《112~至今》第十八屆 淡江大學資訊管理學系 蕭瑞祥 教授兼總務長</li>
                                </ul>
                                <h3>活動記事</h3>
                                <table>
                                    <tr>
                                        <th>活动</th>
                                        <th>描述</th>
                                    </tr>
                                    <tr>
                                        <td>國際資訊管理學術研討會 (CSIM ICIM)</td>
                                        <td>已舉辦三十四屆。最近幾年，研討會的投稿論文已成長到400~500篇，錄取率約50~60%，參與盛會的各界人士近800人。</td>
                                    </tr>
                                    <tr>
                                        <td>資訊管理暨實務研討會 (CSIM IMP)</td>
                                        <td>已舉辦二十八屆。最近幾年，研討會的投稿論文已成長到350~400篇，錄取率約60~70%，參與盛會的各界人士近600人。</td>
                                    </tr>
                                    <tr>
                                        <td>全國大專院校資訊服務創新競賽暨資訊管理專題競賽</td>
                                        <td>已舉辦二十八屆。於111年，參賽的各校校隊隊數已達250隊。</td>
                                    </tr>
                                </table>
                                <h4>國際資訊管理學術研討會暨資管學會年會(每年的五月份舉行)</h4>
                                <table>
                                <tr>
                                    <th>屆次</th>
                                    <th>承辦學校</th>
                                    <th>年度</th>
                                    <th>屆次</th>
                                    <th>承辦學校</th>
                                    <th>年度</th>
                                </tr>
                                <tr>
                                    <td>一</td>
                                    <td>中山大學</td>
                                    <td>79</td>
                                    <td>二</td>
                                    <td>輔仁大學</td>
                                    <td>80</td>
                                </tr>
                                <tr>
                                    <td>三</td>
                                    <td>交通大學</td>
                                    <td>81</td>
                                    <td>四</td>
                                    <td>銘傳大學</td>
                                    <td>82</td>
                                </tr>
                                </table>
                                <h4>國際資訊管理研究暨實務研討會(每年十二月份舉行)</h4>
                                <table>
                                <tr>
                                    <th>屆次</th>
                                    <th>承辦學校</th>
                                    <th>年度</th>
                                    <th>屆次</th>
                                    <th>承辦學校</th>
                                    <th>年度</th>
                                </tr>
                                <tr>
                                    <td>一</td>
                                    <td>中央大學</td>
                                    <td>83</td>
                                    <td>二</td>
                                    <td>大葉大學</td>
                                    <td>84</td>
                                </tr>
                                <tr>
                                    <td>三</td>
                                    <td>中正大學</td>
                                    <td>83</td>
                                    <td>四</td>
                                    <td>輔仁大學</td>
                                    <td>87</td>
                                </tr>
                                </table>

                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className="line_right">
                <div className="line_title">
                    <p>組織相關</p>
                </div>
                <Accordion className='About_Society'>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        style={about_society}
                    >
                        <Typography style={typographText}>章程</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <div className="about_info">
                                <a href="">
                                    <div>
                                        <PictureAsPdfIcon />中華民國資訊管理學會組章程_2024-XX-XX修訂版
                                    </div>
                                </a>
                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
        <div className="about_line">
            <div className="line_left">
                <div className="line_title">
                    <p>學會組織</p>
                </div>
                <Accordion className='About_Society'>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        style={about_society}
                    >
                        <Typography style={typographText}>組織成員</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <div className="about_info">
                            <h3>學會組織</h3>
                            <p>本會以會員(會員代表)大會為最高權力機構，會員(會員代表)大會閉會期間由理事會代行職權；監事會為監察機構。</p>
                            <p>理事會理事長對內綜理督導會務，對外代表學會，並擔任會員(會員代表)大會、理事會主席。</p>
                            <p>本會置秘書長一人，處理本會事務。</p>
                            <h3>人員：</h3>
                            <ul>
                                <li>理事長：蕭瑞祥（淡江大學資訊管理學系 教授兼總務長）</li>
                                <li>秘書長：鄭哲斌（淡江大學資訊管理學系 副教授）</li>
                                <li>專員：楊先生、林小姐</li>
                            </ul>
                            <h3>聯絡方式：</h3>
                            <p>電話：02-26215656 分機 2228</p>
                            <p>E-mail：<a href="mailto:csim.service@gmail.com" >csim.service@gmail.com</a></p>
                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className="line_right">
                <div className="line_title">
                    <p>理監事</p>
                </div>
                <Accordion className='About_Society'>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        style={about_society}
                    >
                        <Typography style={typographText}>第十八屆理監事名單</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        <div className="about_info">
                                <a href="">
                                    <div>
                                        <PictureAsPdfIcon />中華民國資訊管理學會_第十八屆理監事名單
                                    </div>
                                </a>
                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
        <div className="about_line">
            <div className="line_left">
                <div className="line_title">
                    <p>申請入會</p>
                </div>
                <Accordion className='About_Society'>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        style={about_society}
                    >
                        <Typography style={typographText}>說明</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <div className="about_info">
                                <h3>申請入會及會費說明</h3>
                                    <ol>
                                        <li>
                                            <p>本學會秘書處即日起將在學會網站公告會員清查與補繳會費事宜，並個別通知未繳費補繳會費或補登錄會員資料(失聯會員)等作業，若逾期未補繳或登錄會員資料時，將彙集名單送理監事聯席會議審理停權事宜。</p>
                                        </li>
                                        <li>
                                            <p>停權後，會員可隨時繳費或補錄資料，以回復會員各項權利。(依97.12.13中華民國資訊管理學會第十屆第八次理監事聯席會議決議辦理)</p>
                                        </li>
                                        <li>
                                            <p>有關會員年繳會費事宜，新入會會員自繳費日期起，其會員權益算至下一年度年底(12/31)止，第三年起(含舊會員)的年繳會員繳費期間為每年年初至當年五月底止，每年年底清查會員資格一次。</p>
                                        </li>
                                        <li>
                                            <p>會員資料若須更新請email辦理。</p>
                                        </li>
                                        <li>
                                            <p>會費繳交請至郵局劃撥，劃撥帳號：19411984，戶名：社團法人中華民國資訊管理學會</p>
                                        </li>
                                        <li>
                                            <p>會費規定及入會程序：</p>
                                            <ul>
                                                <li>
                                                    <p>個人會員</p>
                                                    <ol type="a">
                                                        <li>
                                                            <p>正會員需符合下列條件：</p>
                                                            <ul>
                                                                <li>國內外大專講師（含）以上、或在研究發展機構擔任相當職務者</li>
                                                                <li>國內外資訊管理或相關研究所畢業，或研究所休習三年以上，並有論文公開發表者</li>
                                                                <li>政府或民營企業擔任資訊管理或其他主管三年以上者</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <p>會費相關規定：</p>
                                                            <ul>
                                                                <li>入會費：學生會員NT$ 100 元、一般會員及正會員NT$ 500 元</li>
                                                                <li>年費：學生會員NT$ 200 元/年、一般會員及正會員NT$ 800 元/年、若欲成為永久會員請一次繳交NT$ 8,000 元</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <p>入會程序</p>
                                                            <ol type="i">
                                                                <li>填寫申請表，電子檔寄交本會秘書處</li>
                                                                <li>送理事會通過後，通知繳費，完成入會手續</li>
                                                            </ol>
                                                        </li>
                                                    </ol>
                                                </li>
                                                <li>
                                                    <p>團體會員</p>
                                                    <ol type="a">
                                                        <li>
                                                            <p>團體會員需符合之條件：</p>
                                                            <ul>
                                                                <li>凡國內外工商業界或學術機構經正會員一人以上之推薦，並經本會理事會通過後，得為團體會員，並推派代表一人，享有正會員權利。</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <p>會費相關規定：</p>
                                                            <ul>
                                                                <li>入會費：NT$ 500 元</li>
                                                                <li>年費：NT$ 5,000 元/年，若欲成為永久團體會員請一次繳交NT$ 50,000 元</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <p>入會程序</p>
                                                            <ol type="i">
                                                                <li>填寫申請表，電子檔寄交本會秘書處</li>
                                                                <li>送理事會通過後，通知繳費，完成入會手續</li>
                                                            </ol>
                                                        </li>
                                                    </ol>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <p>相關章程規定：節錄本學會章程中關於會員之基本權利與義務相關規定，讓可敬的會員先進知悉。依中華民國資訊管理學會章程之第二章會員之第八條、第九條及第十二條規定，</p>
                                            <ol type="a">
                                                <li>
                                                    <p>第八條 會員有遵守本會章程決議及繳納會費之義務。</p>
                                                </li>
                                                <li>
                                                    <p>第九條 會員(會員代表)有違反法令章程連續兩年未繳會費或不遵守會員(會員代表)大會決議者得經理事會決議與以警告或停權處分，其危害團體情節重大者得經會員(會員代表)大會決議予以除名。</p>
                                                </li>
                                                <li>
                                                    <p>第十二條 正會員及團體會員所派代表有表決權 選舉權 被選舉權與罷免權。其他會員僅有列席會員大會之權利；每一正會員(會員代表)為一權。</p>
                                                </li>
                                            </ol>
                                        </li>
                                    </ol>
                                    <p><strong>秘書室 敬啟</strong></p>
                                    <p>聯絡電話：02-26215656分機2228</p>
                                    <p>電子信箱：<a href="mailto:csim.service@gmail.com">csim.service@gmail.com</a></p>
                                    <h3>入會申請表下載</h3>
                                    <a href="入會申請表(個人會員申請)-102年度.docx">
                                        <div>
                                            <PictureAsPdfIcon />入會申請表(個人會員申請)-102年度
                                        </div>
                                    </a>
                                    <a href="入會申請表(團體會員申請)-102年度.docx">
                                        <div>
                                            <PictureAsPdfIcon />入會申請表(團體會員申請)-102年度
                                        </div>
                                    </a>
                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className="line_right">
                <div className="line_title">
                    <p>會議記錄</p>
                </div>
                <Accordion className='About_Society'>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        style={about_society}
                    >
                        <Typography style={typographText}>記錄</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <div className="about_info">
                                <h3>第十三屆第二次理監事聯席會議會議紀錄(2013-10-14)</h3>
                                <a href="入會申請表(團體會員申請)-102年度.docx">
                                    <div>
                                        <PictureAsPdfIcon />入會申請表(團體會員申請)-102年度
                                    </div>
                                </a>
                                <h3>第十二屆第十一次監事會議會議紀錄</h3>
                                <a href="入會申請表(團體會員申請)-102年度.docx">
                                    <div>
                                        <PictureAsPdfIcon />入會申請表(團體會員申請)-102年度
                                    </div>
                                </a>
                                <h3>第十三屆第一次理監事聯席會議會議紀錄</h3>
                                <a href="入會申請表(團體會員申請)-102年度.docx">
                                    <div>
                                        <PictureAsPdfIcon />入會申請表(團體會員申請)-102年度
                                    </div>
                                </a>
                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
        <div className="about_line">
            <div className="line_left">
                <div className="line_title">
                    <p>資料下載</p>
                </div>
                <Accordion className='About_Society'>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        style={about_society}
                    >
                        <Typography style={typographText}>連結</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        <div className="about_info">
                                <h3>中華民國資訊管理學會常用資料下載檔案:</h3>
                                <a href="入會申請表-個人用-102年度.docx">
                                    <div>
                                        <DescriptionRoundedIcon /> 入會申請表-個人用-102年度
                                    </div>
                                </a>
                                <a href="入會申請表-團體用-102年度.docx">
                                    <div>
                                        <DescriptionRoundedIcon /> 入會申請表-團體用-102年度
                                    </div>
                                </a>
                                <a href="社團法人中華民國資訊管理學會會員代表大會代表選舉辦法.docx">
                                    <div>
                                        <DescriptionRoundedIcon /> 社團法人中華民國資訊管理學會會員代表大會代表選舉辦法
                                    </div>
                                </a>
                                <a href="社團法人中華民國資訊管理學會傑出貢獻獎實施辦法.docx">
                                    <div>
                                        <DescriptionRoundedIcon /> 社團法人中華民國資訊管理學會傑出貢獻獎實施辦法
                                    </div>
                                </a>
                                <a href="資訊管理學報編輯委員會組織章程（20120304修訂通過）.pdf">
                                    <div>
                                        <PictureAsPdfIcon /> 資訊管理學報編輯委員會組織章程（20120304修訂通過）
                                    </div>
                                </a>
                                <a href="第13屆會員代表選舉出席暨投票委託書">
                                    <div>
                                        <DescriptionRoundedIcon /> 第13屆會員代表選舉出席暨投票委託書
                                    </div>
                                </a>
                                <a href="中華民國資訊管理學會第十七屆理事、監事選舉公告，並自即日起開始接受候選人推薦登記">
                                    <div>
                                        <DescriptionRoundedIcon /> 中華民國資訊管理學會第十七屆理事、監事選舉公告，並自即日起開始接受候選人推薦登記
                                    </div>
                                </a>
                                <a href="第十七屆理事、監事候選人推薦登記表.docx">
                                    <div>
                                        <DescriptionRoundedIcon /> 第十七屆理事、監事候選人推薦登記表
                                    </div>
                                </a>
                                <a href="第十七屆會員代表選舉投票委託書.docx">
                                    <div>
                                        <DescriptionRoundedIcon /> 第十七屆會員代表選舉投票委託書
                                    </div>
                                </a>
                                <a href="第18屆理監事候選人推薦登記表.docx">
                                    <div>
                                        <DescriptionRoundedIcon /> 第18屆理監事候選人推薦登記表
                                    </div>
                                </a>
                                <a href="會員代表大會出席委託書.docx">
                                    <div>
                                        <DescriptionRoundedIcon /> 會員代表大會出席委託書
                                    </div>
                                </a>
                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            {/* <div className="line_right">
                <div className="line_title">
                    <p>會議記錄</p>
                </div>
                <Accordion className='About_Society'>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography >記錄</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div> */}
        </div>
    </div>
    )
}