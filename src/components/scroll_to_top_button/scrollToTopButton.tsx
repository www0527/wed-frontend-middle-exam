import React, { useState, useEffect } from 'react';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import './scrollToTopButton.css'; // 样式文件

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

  // 检测页面滚动，判断是否显示悬浮按钮
    const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 50) {
        setIsVisible(true);
    } else {
        setIsVisible(false);
    }
    };

  // 监听页面滚动事件
    useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

  // 滚动到页面顶部
    const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    };

    return (
    <div className={`scroll-to-top ${isVisible ? 'show' : ''}`} onClick={scrollToTop}>
        <ArrowUpwardRoundedIcon />
    </div>
    );
};

export default ScrollToTopButton;
