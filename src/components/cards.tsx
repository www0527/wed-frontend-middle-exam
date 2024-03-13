import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardInterface } from "../CardsInterface"
import React from 'react';
import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocationCityRoundedIcon from '@mui/icons-material/LocationCityRounded';


import './cards.css';



const Cards:React.FC<CardInterface> = ({ img,title }) => {
    return (
        <Card sx={{ maxWidth: 300, backgroundColor:"#fefaf5"}}>
            <CardMedia
            sx={{ height: 250 }}
            image={img}
            title="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
            </Typography>
            </CardContent>
            <CardActions>
                <Button className='cards_button' size="small">了解更多</Button>
            </CardActions>
        </Card>
    );
}
const HomeNewsCards:React.FC<CardInterface> = ({ img,title }) => {
    return (
        <Card sx={{ maxWidth: 300, backgroundColor:"#fefaf5"}}>
            <CardMedia
            sx={{ height:  210 }}
            image={img}
            title="green iguana"
            />
            <CardContent>
                <Typography style={{textAlign:"center", fontWeight:'bold'}} gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" />
            </CardContent>
            <CardActions>
                <Button size="small">了解更多</Button>
            </CardActions>
        </Card>
    );
}
const NewsCards:React.FC<CardInterface> = ({ img,title }) => {
    return (
        <Card 
        className="news_cards" 
        sx={{ 
            boxShadow:"0px 1px 2px #000000",
            width: 330, 
            backgroundColor:"#ffffff" ,
            height:360}}
        onClick={()=>{}}
        >
            <div className='news_cards_media'>
                <CardMedia
                sx={{ height: 200 }}
                image={img}
                title="green iguana"
                />
            </div>
            <CardContent>
                <Typography style={{ fontSize:"1.25rem",    fontWeight:'bold'}} gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography style={{fontWeight:"bolder", color:"#acacac"}} variant="body2" color="text.secondary">2024-03-12</Typography>
            </CardContent>
        </Card>
    );
}
const SchoolCards:React.FC<CardInterface> = ({ img,title }) => {
    const ButtonStyle={
        width: '100%',
        height: "2.75rem",
        fontSize: "1.25rem",
        fontWeight: "bold",
        color: "#d6752b",
        backgroundColor:"rgba(255,255,255,0)",
        border: "3px solid #d6752b",
    }

    return (
        <Card className='school_cards_container' sx={{ maxWidth: "100%",boxShadow:"0px 5px 20px rgba(0, 0, 0, 0.226)"}}>
            <div className='school_cards_left'>
                <div className="school_media_container">
                    <CardMedia
                    sx={{ height:300,width:'90%',objectFit: 'cover',margin:"5%" }}
                    image={img}
                    title="green iguana"
                    />
                </div>
                <Typography style={{textAlign:"center", fontWeight:'bold'}} gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
            </div>
            <div className="school_cards_right">
                <div className="school_cards_l_l">
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            <div className='school_info'>
                                <div>
                                    <FmdGoodRoundedIcon />
                                    <p>地址</p>
                                </div>
                                <p className='detail_info'>XX市XX區XX路XX號</p>
                            </div>
                            <div className='school_info'>
                                <div>
                                    <PhoneRoundedIcon />
                                    <p>電話</p>
                                </div>
                                <p className='detail_info'>02-24XX-XXXX</p>
                            </div>
                            <div className='school_info'>
                                <div>
                                    <EmailRoundedIcon />
                                    <p>信箱</p>
                                </div>
                                <p className='detail_info'>test.school@gmail.com</p>
                            </div>
                            <div className='school_info'>
                                <div>
                                    <LocationCityRoundedIcon />
                                    <p>辦公室位置</p>
                                </div>
                                <p className='detail_info'>XX大樓SS101</p>
                            </div>
                        </Typography>
                    </CardContent>
                </div>
                <div className="school_cards_r_r">
                    <CardActions>
                        <Button style={ButtonStyle} variant="contained" color="success" >學校官網</Button>
                    </CardActions>
                </div>
            </div>
        </Card>
    );
}

export {Cards,HomeNewsCards,SchoolCards,NewsCards}