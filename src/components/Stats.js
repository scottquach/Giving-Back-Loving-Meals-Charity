import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faPeopleCarry } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';

const StatsList = (props) => {
    return (
        <div className="flex w-full justify-around px-4">
            <Stats value="1,200+" category="Meals Provided" icon={faUtensils}></Stats>
            <Stats value="12+" category="Towns Visited" icon={faMapMarkedAlt}></Stats>
            <Stats value="50+" category="Volunteers" icon={faPeopleCarry}></Stats>
            <Stats value="26+" category="Donators" icon={faHandHoldingHeart}></Stats>
        </div>
    );
};

const Stats = ({ value, category, icon }) => {
    return (
        <div className="flex flex-col items-center mx-4 group hover:bg-purple-700 hover:shadow-xl rounded-md p-4 transition-all duration-100">
            <div className="font-bold text-6xl text-purple-700 group-hover:text-white">{value}</div>
            <div className="flex items-baseline group-hover:text-white">
                <FontAwesomeIcon className="mr-2 text-xl" icon={icon}></FontAwesomeIcon>
                <div className="text-2xl font-medium">{category}</div>
            </div>
        </div>
    );
};

export { Stats, StatsList };
