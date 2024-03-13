import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { BehindTheScenes } from '../../components/behind_the scenes/behind_the_scenes';
import { HomeNews } from '../../components/home_news/home_news';
import ScrollToTopButton from '../../components/scroll_to_top_button/scrollToTopButton';

import Banner from '../../components/banner/banner';
import banner1 from '../../images/banner1.jpg'
import banner2 from '../../images/banner2.png'

const IMAGES = [
    {url:banner1,alt:"banner 1"},
    {url:banner2,alt:"banner 2"}];

const Home: React.FC = () => {
    return (
        <>
        <Header />
        <div style={{
            maxWidth:"100%", 
            width:"100%", 
            aspectRatio:"8/2", 
            margin:"0 auto"
        }}>
            <Banner images={IMAGES}></Banner>
        </div>
        <HomeNews />
        <BehindTheScenes />
        <Footer />
        <ScrollToTopButton />
        </>
    );
};

export default Home;
