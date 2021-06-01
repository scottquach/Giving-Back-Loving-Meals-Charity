import './App.css';
import Navigation from './components/Navigation';
import AboutUs from './pages/AboutUs';
import Landing from './pages/Landing';

function App() {
    return (
        <div className="flex flex-col w-full h-full ">
            <Navigation></Navigation>
            {/* <Landing></Landing> */}
            <AboutUs></AboutUs>
        </div>
    );
}

export default App;
