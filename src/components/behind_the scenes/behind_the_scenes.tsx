import './behind_the_scenes.css';
import React from 'react';
import { Cards } from "../cards"


const BehindTheScenes:React.FC = () =>{
    return (
        <>
        <div className="container">
            <div className='behind_the_scenes_title_text'>
                <span>幕</span><span>後花絮</span>
            </div>
            <div className='container_body'>
                <Cards 
                img='https://www.csim.org.tw/sites/default/files/dscn0006_diao_zheng_da_xiao_.jpg' 
                title='活動一'
                />
                <Cards 
                img='https://www.csim.org.tw/sites/default/files/img_1165.jpg' 
                title='活動二'
                />
                <Cards 
                img='https://www.csim.org.tw/sites/default/files/img_1170.jpg' 
                title='活動三'
                />
                <Cards 
                img='https://www.csim.org.tw/sites/default/files/20160318_140511.jpg' 
                title='活動四'
                />
            </div>
        </div>
        </>
    )
}

export {Cards,BehindTheScenes};