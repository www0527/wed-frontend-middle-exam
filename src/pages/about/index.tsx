import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import AccordionExpandIcon from '../../components/about_content/AccordionExpandIcon';
import ScrollToTopButton from '../../components/scroll_to_top_button/scrollToTopButton'

const About: React.FC = () => {
    return (
    <>
        <Header />
        <AccordionExpandIcon />
        <Footer />
        <ScrollToTopButton />
    </>
    );
};

export default About;
