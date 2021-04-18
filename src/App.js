import './App.css';
import Navigation from './components/Navigation';
import { StatsList } from './components/Stats';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
    return (
        <div className="flex flex-col w-screen h-screen ">
            <Navigation></Navigation>
            <div className="flex flex-1 flex-col">
                <div className="h-3/5">
                    <Hero></Hero>
                </div>
                <div className="flex flex-1 justify-center items-center">
                    <StatsList></StatsList>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
}

export default App;
