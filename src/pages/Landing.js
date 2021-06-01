import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { StatsList } from "../components/Stats";

const Landing = () => {
    return (
        <div className="flex flex-1 flex-col">
            <div className="h-3/5">
                <Hero></Hero>
            </div>
            <div className="flex flex-1 justify-center items-center">
                <StatsList></StatsList>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Landing;
