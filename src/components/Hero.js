import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from '../images/jason-blackeye-IajNM5tQxdM-unsplash.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
        <div className="my-4">
            <div className="text-center text-3xl font-bold text-purple-700 mb-2 md:text-4xl md:text-left">
                Giving Back Meals<br className="md:hidden"></br> Since 2016
            </div>
            <div className="text-center md:w-2/3 md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque auctor elit, ac dictum eros pulvinar
                in. Pellentesque ut accumsan risus, ac posuere magna. Aenean ut elementum arcu. Vestibulum ut nulla turpis. In et
                risus ultricies arcu hendrerit fringilla at a nisl.
            </div>
        </div>
    );
};

const HeroAction = () => {
    return (
        <div className="flex flex-col items-center space-x-4 space-y-4 my-8 md:flex-row md:space-y-0 ">
            <a
                className="py-2 px-4 flex items-center font-semibold hover:bg-blue-700 hover:border-blue-500  hover:text-white shadow-md border-2  rounded-lg group transition-all duration-100"
                href="https://www.facebook.com/groups/2834877599904077"
                target="_blank"
            >
                <FontAwesomeIcon className="mr-2 text-blue-700 group-hover:text-white" icon={faFacebook} />
                <div>Visit us on Facebook</div>
            </a>
            <button className="py-2 px-4 flex items-center font-semibold hover:bg-red-500 hover:border-red-500  hover:text-white shadow-md border-2 rounded-lg group transition-all duration-100">
                <FontAwesomeIcon className="mr-2 text-red-500 group-hover:text-white" icon={faHandHoldingHeart} />
                <div>Donate</div>
            </button>
        </div>
    );
};

const HeroImages = () => {
    // return <img className="block h-full w-full object-cover" src={image}></img>;
    return (
        <img
            className="block h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80A"
        ></img>
    );
};

export default Hero;
