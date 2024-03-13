import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React from 'react';
import { VictoryPie } from 'victory';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import "./seminar_pepper.css"

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Collapse,
    IconButton,
    Typography,
} from '@mui/material';
import { KeyboardArrowDown as KeyboardArrowDownIcon, KeyboardArrowUp as KeyboardArrowUpIcon } from '@mui/icons-material';

function createData(
    name: string,
    organizer: string,
    year: number,
) {
    return {
        name,
        organizer,
        year,
        history: [
            {
            date: '併購企業資訊系統整合自製與委外決策模式研究',
            },
            {
            date: '知識鏈之探討: 以顧客、供應商與競爭者',
            },
        ]
        };
    }
    
function Row(props: { row: ReturnType<typeof createData> }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
            <TableCell>
                <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
                >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
            </TableCell>
            <TableCell component="th" scope="row">
                {row.name}
            </TableCell>
            <TableCell align="right">{row.organizer}</TableCell>
            <TableCell align="right">{row.year}</TableCell>
            </TableRow>
            <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                <Box sx={{ margin: 1 }}>
                    <Typography variant="h6" gutterBottom component="div">
                        相關論文
                    </Typography>
                    {row.history.map((historyRow, index) => (
                        <Typography key={index}>
                            <a href="" style={{textDecoration: "none"}}><PictureAsPdfIcon />{historyRow.date}</a>
                        </Typography>
                        ))}
                </Box>
                </Collapse>
            </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const rows = [
    createData('第十九屆國際資訊管理學術研討會', '中華民國資訊管理學會, 暨南國際大學資管系', 2008),
    createData('第十五屆國際資訊管理學術研討會', '中華民國資訊管理學會', 2004),
];

function CollapsibleTable() {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
            <TableHead>
                <TableRow>
                <TableCell />
                <TableCell>研討會名稱</TableCell>
                <TableCell align="right">主辦單位</TableCell>
                <TableCell align="right">年份</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                <Row key={row.name} row={row} />
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    );
}

const PieChart = () => {
    const data = [
        { x: "2008", y: 50 },
        { x: "2004", y: 50 },
    ];

    const colors = ["#d6752b", "#123262", "#2a5ca8"]; // 自訂顏色陣列

    return (
        <>
            <div 
            style={{
                marginTop:"3rem",
                fontSize:"2rem",
                fontWeight:"bold",
                textAlign: 'center', 
                verticalAlign: 'middle',
                }}>年份</div>
            <div style={{ width: '400px', height: '400px', margin: 'auto', marginTop: 0 }}> {/* 设置容器的宽度和高度 */}
                <VictoryPie
                data={data}
                colorScale={colors} // 使用自訂顏色陣列
                style={{ labels: { fontSize: 14, fill: "black" } }} // 设置标签文字颜色
                />
            </div>
        </>
    );
}


const SeminarPepper:React.FC = () => {

    return(
        <>
            <Header />
            <div className="news_banner">
                <p>研討會論文集</p>
            </div>
            <Box
            className='search-container'
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '30ch' },
            }}
            noValidate
            autoComplete="off"
            >
                <TextField id="outlined-basic" label="請輸入關鍵字" variant="standard" />
            </Box>
            <div className="seminar_pepper">
                <div className='seminar_table'>
                    <CollapsibleTable />
                </div>
                <div className="seminar_pei">
                    <PieChart />
                </div>
            </div>
            <Footer />
        </>
    )
}

export { SeminarPepper }