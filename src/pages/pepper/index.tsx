import React from 'react';
import { VictoryPie } from 'victory';

import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import "./index.css"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Button from '@mui/material/Button'



interface PieChartData {
    x: string;
    y: number;
}

interface PieChartProps {
    data: PieChartData[];
}

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: '論文名稱', width: 200 },
    { field: 'field', headerName: '應用領域', width: 150 },
    { field: 'keywords', headerName: '關鍵字', width: 200 },
    { field: 'authors', headerName: '作者', width: 200 },
];

const rows = [
    { id: 1, title: '併購企業資訊系統整合自製與委外決策模式研究', field: '資訊管理', keywords: '併購企業, 資訊整合, 自製與委外決策模式', authors: '盧春芳, 黃世禎, 傅上珍' },
    { id: 2, title: '知識鏈之探討: 以顧客、供應商與競爭者', field: '資訊管理', keywords: '知識鏈, 顧客知識, 供應商知識, 競爭者知識', authors: '曾淑美, 吳俊儀' },
    { id: 3, title: 'Web Service與定位技術的整合及應用', field: '通訊網路技術', keywords: 'Context Awareness, Web Service, 位置資訊', authors: '卓忠志, 潘志勝, 古東明' },
    { id: 4, title: '無線區域網路之位置導向服務品質監測', field: '通訊網路技術', keywords: '無線區域網路, 服務品質, 效能管理, SNMP', authors: '陳彥錚, 陳秋彰' },
    { id: 5, title: '非集中式點對點環境下之快速與低頻寬需求的服務搜尋方法設計', field: '通訊網路技術', keywords: '點對點, 網域名稱伺服器, 非集中式點對點網路, 服務搜尋', authors: '陳青文, 楊朝翔, 顏佩詩' },
    { id: 6, title: '在多重通道隨意網路上利用控制與資料通道頻寬比例使效能最大化之策略', field: '通訊網路技術', keywords: '無線隨意網路, 媒體存取層, 效能, 資料頻道, 控制頻道', authors: '陳青文, 方清宏, 賴俊良, 洪瑞聰' },
    { id: 7, title: 'Misuse Detection of New Malicious Emails', field: '通訊網路技術', keywords: 'email virus detection, self-organizing maps, network security', authors: 'Dong-Her Shih, Chun-Pin Chang, Hsiu-Sen Chiang' },
    { id: 8, title: '協同過濾技術在商品推薦系統上之應用與成效評估', field: '通訊網路技術', keywords: '電子商務, 消費者行為, 協同過濾, 推薦系統', authors: '吳肇銘, 金志聿, 林怡秀' },
    { id: 9, title: '結合IC卡之校園安全網頁系統的設計與實現', field: '通訊網路技術', keywords: 'IC卡, WWW, AES, RSA, PHP', authors: '陳軒正, 楊中皇' },
    { id: 10, title: '以電力能源為基礎的蜂巢式階層管理', field: '通訊網路技術', keywords: '隨意式無線網路, 無基礎建設的網路結構, 蜂巢式階層管理架構, 行動代理人, 行動設備', authors: '王淑卿, 嚴國慶, 周雨韻' },
];

export default function DataTable() {
    // 计算每个领域的出现次数
    const fieldCounts: { [key: string]: number } = {};
    rows.forEach(row => {
        if (row.field in fieldCounts) {
            fieldCounts[row.field]++;
        } else {
            fieldCounts[row.field] = 1;
        }
    });
    const pieChartData: { x: string; y: number }[] = Object.entries(fieldCounts).map(([field, count]) => ({
        x: field,
        y: count,
    }));
    
    return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ margin:"10px",width: 'calc(80% - 8px)' }}>
        <DataGrid
            rows={rows}
            columns={columns}
            pagination
            pageSizeOptions={[5, 10]}
            checkboxSelection
        />
        </div>
        <div style={{ width: 'calc(50% - 8px)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <PieChart data={pieChartData} />
            <Button variant="contained" color="primary" style={{ margin: 'auto', marginTop: "0px",fontWeight:"bolder"}}>
                論文下載
            </Button>
        </div>
    </div>
    );
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
    const colors = ["#d6752b", "#123262", "#2a5ca8"]; // 自定义颜色数组

    return (
        <>
            <div 
            style={{
                marginTop: "3rem",
                fontSize: "2rem",
                fontWeight: "bold",
                textAlign: 'center', 
                verticalAlign: 'middle',
            }}
            >
            應用領域
            </div>
            <div style={{ width: '400px', height: '400px', margin: 'auto', marginTop: 0 }}> {/* 设置容器的宽度和高度 */}
            <VictoryPie
                data={data}
                colorScale={colors} // 使用自定义颜色数组
                style={{ labels: { fontSize: 14, fill: "black" } }} // 设置标签文字颜色
            />
            </div>
        </>
    );
}


const Pepper:React.FC = () => {

    return(
        <>
            <Header />
            <div className="news_banner">
                <p>論文查詢</p>
            </div>
            <div className="seminar_pepper">
                <div className='seminar_table'>
                    <DataTable />
                </div>
                {/* <div className="seminar_pei">
                    <PieChart data={pieChartData} />
                </div> */}
            </div>
            <Footer />
        </>
    )
}

export { Pepper }