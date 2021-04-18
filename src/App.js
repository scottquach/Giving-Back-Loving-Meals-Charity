import './App.css';
import Navigation from './components/Navigation';
import { StatsList } from './components/Stats';
import Hero from './components/Hero';

function App() {
    return (
        <div className="flex flex-col w-screen h-screen max-h-screen">
            <Navigation></Navigation>
            <div className="flex flex-1 flex-col">
                <div style={{ height: '30rem' }}>
                    <Hero></Hero>
                </div>
                <div className="flex flex-1 justify-center items-center">
                    <StatsList></StatsList>
                </div>
            </div>
        </div>
    );
}

export default App;
