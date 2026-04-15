import AboutMe from './_components/AboutMe';
import Banner from './_components/Banner';
import Experiences from './_components/Experiences';
import Skills from './_components/Skills';
import ChatWidgetLauncher from '@/components/ChatWidget';

const apiBaseUrl = process.env.API_BASE_URL;
const apiKey = process.env.API_KEY;
const apiSecret = process.env.API_SECRET;

export default function Home() {
    return (
        <div className="page-">
            <Banner />
            <AboutMe />
            <Skills />
            <Experiences />
            <ChatWidgetLauncher
                apiBaseUrl={apiBaseUrl}
                apiKey={apiKey}
                apiSecret={apiSecret}
                title="Ai Support Bot"
                subtitle="Aadarsh Bot"
                greeting="Hello!, How can I help you today?"
            />
        </div>
    );
}
