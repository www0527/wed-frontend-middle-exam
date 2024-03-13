import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import ScrollToTopButton from '../../components/scroll_to_top_button/scrollToTopButton';
import { NewsContent, NewsContent2, NewsContent3, NewsContent4 ,NewsContent5 } from '../../components/news_content';


const News: React.FC = () => {
    return (
        <>
        <Header />
        <NewsContent cssName='news_banner1'/>
        <Footer />
        <ScrollToTopButton />
        </>
    );
};
const News2: React.FC = () => {
    return (
        <>
        <Header />
        <NewsContent2 cssName='news_banner1'/>
        <Footer />
        <ScrollToTopButton />
        </>
    );
};
const News3: React.FC = () => {
    return (
        <>
        <Header />
        <NewsContent3 cssName='news_banner1'/>
        <Footer />
        <ScrollToTopButton />
        </>
    );
};
const News4: React.FC = () => {
    return (
        <>
        <Header />
        <NewsContent4 cssName='news_banner1'/>
        <Footer />
        <ScrollToTopButton />
        </>
    );
};
const News5: React.FC = () => {
    return (
        <>
        <Header />
        <NewsContent5 cssName='news_banner1'/>
        <Footer />
        <ScrollToTopButton />
        </>
    );
};

export { News,News2,News3,News4,News5 };
