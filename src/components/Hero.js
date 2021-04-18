import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from '../images/jason-blackeye-IajNM5tQxdM-unsplash.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Hero = () => {
    return (
        <div className="flex h-full w-full bg-gray-50 items-center">
            <div className="px-24 flex-1">
                <HeroMessage></HeroMessage>
                <HeroAction></HeroAction>
            </div>
            <div className="flex-1 max-h-full self-stretch">
                <HeroImages></HeroImages>
            </div>
        </div>
    );
};

const HeroMessage = () => {
    return (
        <div className="">
            <div className="text-left text-4xl font-bold text-purple-700 mb-2">Giving Back Meals Since 2016</div>
            <div className="text-left w-2/3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque auctor elit, ac dictum eros pulvinar
                in. Pellentesque ut accumsan risus, ac posuere magna. Aenean ut elementum arcu. Vestibulum ut nulla turpis. In et
                risus ultricies arcu hendrerit fringilla at a nisl.
            </div>
        </div>
    );
};

const HeroAction = () => {
    return (
        <div className="flex space-x-4 mt-8">
            <button className="py-2 px-4 flex items-center font-semibold hover:border-purple-700 hover:text-purple-700 shadow-md border-2 border-black rounded-lg">
                <FontAwesomeIcon className="mr-2" icon={faFacebook} />
                <div>Visit us on Facebook</div>
            </button>
            <button className="py-2 px-4 flex items-center font-semibold hover:border-purple-700 hover:text-purple-700 shadow-md border-2 border-black rounded-lg">
                <FontAwesomeIcon className="mr-2 text-red-500" icon={faHandHoldingHeart} />
                <div>Donate</div>
            </button>
        </div>
    );
};

const HeroImages = () => {
    return <img className="block h-full w-full object-cover" src={image}></img>;
};

export default Hero;
