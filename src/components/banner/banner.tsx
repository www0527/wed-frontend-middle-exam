import React, { useState } from 'react';
import './banner.css'; // 导入样式文件
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
type ImageSliderProps ={
    images: {
        url:string,
        alt:string,
    }[]
}

export default function Banner ({images}: ImageSliderProps) {
    
    const [imageIndex, setImageIndex] = useState(0)
    function showPreImage () {
        setImageIndex(index =>{
            if(index === images.length -1) return 0
            return index + 1
        })
    }
    function showNextImage () {
        setImageIndex(index =>{
            if(index === 0) return images.length -1
            return index -1
        })
    }

    return (
        <>
        <section style={{width:"100%", height:"100%", position:"relative"}}>
            <div style={{width:"100%", height: "100%", display:"flex", overflow:"hidden"}}>
                {images.map(({url,alt}) =>(
                    <img key={url} src={url} alt={alt} className='img-slider-img' style={{translate: `${-100 * imageIndex}%`}}/>

                ))}
            </div>
            <button onClick={showPreImage} className='img-slider-btn' style={{left:"0"}}
                aria-label='View Preview Image'
                ><ArrowBackIosNewIcon /></button>
            <button onClick={showNextImage} className='img-slider-btn' style={{right:"0"}}
                aria-label='View Next Image'
            ><ArrowForwardIosIcon /></button>
            <div style={{
                position:"absolute",
                bottom:".2rem",
                left:"50%",
                transform:"-50%",
                display:"flex",
                gap:".25rem",
                }}
                
            > {/* 輪播圖點點 */}
                {images.map((_, index) =>(
                    <button 
                        key={index} 
                        className='img-slider-dot-btn' 
                        onClick={()=> setImageIndex(index)}
                        aria-label={`View Image ${index + 1}`}
                        >{index === imageIndex ? <RadioButtonCheckedIcon /> : <RadioButtonUncheckedIcon /> }</button>
                ))}
            </div>
        </section>
        </>
    );
};