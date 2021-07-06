import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from '../images/jason-blackeye-IajNM5tQxdM-unsplash.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import TeamPhoto from '../images/about_team.jpg';
import { NavLink } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="flex flex-col h-full w-full bg-gray-50 items-center md:flex-row">
            <div className="px-4 flex-1 md:px-24">
                <HeroMessage></HeroMessage>
                <HeroAction></HeroAction>
            </div>
            <div className="flex-1 h-full">
                <HeroImages></HeroImages>
            </div>
            {/* <div className="flex-1 max-h-full self-stretch">
                <HeroImages></HeroImages>
            </div> */}
        </div>
    );
};

const HeroMessage = () => {
    return (
        <div className="my-6 px-2">
            <div className="text-left text-2xl font-bold mb-2 md:text-4xl md:text-left">
                <span class="text-purple-700">Giving Back</span> Meals<br className="md:hidden"></br> For 20 Years
            </div>
            <div className="text-left md:w-2/3 md:text-left">
                Giving Back charity group was found by a refugee woman named Anna. Anna Tran came to the United States as a
                refugee in the early year 1980s. During her first trip back to Vietnam she noticed many children not in school for their school age.
                Anna built the elementary school for the village. <br></br><br></br> The funding was eventually named Giving Back.             </div>
        </div>
    );
};

const HeroAction = () => {
    return (
        <div className="flex flex-row items-baseline space-x-4 space-y-4 my-8 md:space-y-0 text-sm md:text-base">
            <a
                className="py-2 px-4 flex items-center font-semibold hover:bg-blue-700 hover:border-blue-500  hover:text-white shadow-md border-2  rounded-lg group transition-all duration-100"
                href="https://www.facebook.com/groups/2834877599904077"
                target="_blank"
            >
                <FontAwesomeIcon className="mr-2 text-blue-700 group-hover:text-white" icon={faFacebook} />
                <div>Visit us on Facebook</div>
            </a>
            <button className="py-2 px-4 flex items-center font-semibold bg-red-500  hover:border-red-300  text-white shadow-md border-2 rounded-lg group transition-all duration-100">
                <FontAwesomeIcon className="mr-2 "  icon={faHandHoldingHeart} />
                    <NavLink to="/support">Support</NavLink>
            </button>
        </div>
    );
};

const HeroImages = () => {
    return (
        <img
            className="block h-full w-full object-contain"
            src={TeamPhoto}
            alt="Could not load photo"
        />
    );
};

export default Hero;
