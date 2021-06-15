import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faPeopleCarry } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';

const StatsList = (props) => {
    return (
        <div className="mb-16">
            <div className="flex flex-col items-center mt-14">
                <div className="font-bold mb-4 text-purple-700">WHAT WE DO</div>
                <div className="text-2xl">You can help lots of people by donating a little</div>
            </div>

            <div className="flex py-10 px-8 mt-8 bg-purple-100 rounded">
                <Stats value="$3,600" description="Donations received in the last year" icon={faHandHoldingHeart}></Stats>
                <Stats value="3,000+" description="Meals provided in the last year" icon={faUtensils}></Stats>
                <Stats value="4" description="Sustained free meal sites in Vietnam" icon={faMapMarkedAlt}></Stats>
            </div>
        </div>
        // <div className="flex flex-col my-4 w-full justify-around px-4 md:flex-row">
        //     <Stats value="1,200+" category="Meals Provided" icon={faUtensils}></Stats>
        //     <Stats value="12+" category="Towns Visited" icon={faMapMarkedAlt}></Stats>
        //     <Stats value="50+" category="Volunteers" icon={faPeopleCarry}></Stats>
        //     <Stats value="26+" category="Donators" icon={faHandHoldingHeart}></Stats>
        // </div>
    );
};

const Stats = ({ value, description, icon }) => {
    return (
        <div className="flex flex-col items-center mx-8">
            <div className="flex items-baseline text-purple-600">
                <FontAwesomeIcon className="mr-3 text-xl" icon={icon}></FontAwesomeIcon>
                <div className="font-bold text-3xl mb-2">{value}</div>
            </div>
            <div className="text-lg font-semibold">{description}</div>
        </div>
        // <div className="flex flex-col items-center mx-4 group hover:bg-purple-700 hover:shadow-xl rounded-md p-4 transition-all duration-100">
        //     <div className="font-bold text-6xl text-purple-700 group-hover:text-white">{value}</div>
        //     <div className="flex items-baseline group-hover:text-white">
        //         <FontAwesomeIcon className="mr-2 text-xl" icon={icon}></FontAwesomeIcon>
        //         <div className="text-2xl font-medium">{category}</div>
        //     </div>
        // </div>
    );
};

export { Stats, StatsList };
