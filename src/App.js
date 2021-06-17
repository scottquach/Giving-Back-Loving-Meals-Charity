import './App.css';
import Navigation from './components/Navigation';
import AboutUs from './pages/AboutUs';
import Landing from './pages/Landing';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="flex flex-col w-full h-full ">
                <Navigation></Navigation>
                <div className="h-14"></div>
                <Switch>
                    <Route path="/about">
                        <AboutUs></AboutUs>
                    </Route>
                    <Route path="/">
                        <Landing></Landing>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
