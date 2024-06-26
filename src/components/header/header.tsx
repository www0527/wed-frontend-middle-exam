import React from "react";
import "./header.css"
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import { Link, ButtonGroup } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Header(){
    const go = useNavigate();

    const [studyMenuOpen, setStudyMenuOpen] = React.useState(false)
    const [studyAnchorEl, setStudyAnchorEl] = React.useState<null | HTMLElement>(null);
    
    
    const HandleStudyClick =(event:React.MouseEvent<HTMLButtonElement>) =>{
        setStudyAnchorEl(event.currentTarget);
        setStudyMenuOpen(true);
    }

    const handleClose = () => {
    setStudyAnchorEl(null);
    setStudyMenuOpen(false);
    };

    return(
    <>
    <div className="header">
        {/* 左側 header */}
        <div className="header-left">
            <Link className="l-button" onClick={()=>{go("/wed-frontend-middle-exam/")}} underline='none'>
                <img src="https://www.csim.org.tw/sites/default/files/CSIM.gif" />
                <span style={{fontWeight:"bolder"}}>中華民國資訊管理協會</span>
                </Link>
        </div>
        {/* 右側 header */}
        <div className="header-right">
            <ButtonGroup className="r-button" variant="text" color="primary" aria-label="Basic button group" >
                <Button onClick={()=>{go("/wed-frontend-middle-exam/")}} style={{ fontWeight:'bolder', fontSize:'1.2em', color: 'black' }}>首頁</Button>
                <Button
                onClick={()=>{go("/about")}}
                style={{ fontWeight:'bolder', fontSize:'1.2em', color: 'black' }}
                >
                    關於學會</Button>
                <Button style={{ fontWeight:'bolder', fontSize:'1.2em', color: 'black' }} onClick={()=>{go("/DepartmentsOfEachSchool")}}>各校資管系所</Button>
                <Button
                    id="basic-button"
                    aria-controls={studyMenuOpen ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={studyMenuOpen ? 'true' : undefined}
                    onClick={HandleStudyClick}
                    style={{ fontWeight:'bolder', fontSize:'1.2em', color: 'black' }}
                >研究及出版品</Button>
                <Menu
                    id="basic-menu"
                    anchorEl={studyAnchorEl}
                    open={studyMenuOpen}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={()=>{go(window.location.href = 'http://eclab.nkust.edu.tw/submitjim/')}}>資訊管理學報</MenuItem>
                    <MenuItem onClick={()=>{go("/SeminarPepper")}}>研討會論文集</MenuItem>
                    <MenuItem onClick={()=>{go("/Pepper")}}>論文查詢</MenuItem>
                </Menu>
                <Button onClick={()=>{go("/LoginPage")}} style={{ fontWeight:'bolder', fontSize:'1.2em', color: 'black' }}>登入</Button>
            </ButtonGroup>
        </div>
    </div>
    </>
    )
}

