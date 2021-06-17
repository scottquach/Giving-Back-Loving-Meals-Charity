import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="flex p-2 shadow items-center w-full h-14 md:py-4 fixed bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                />
            </svg>
            <Link to="/" className="mr-auto font-bold text-xl leading-tight ml-2">
                Giving Back
            </Link>

            <div className="md:flex">
                <div className="text-lg mx-2 px-4 font-medium rounded-full cursor-pointer border-2  bg-red-500 hover:border-red-300 text-white">Support</div>
                <div className="hidden md:block text-lg mx-3 font-medium cursor-pointer hover:text-purple-700 ">Contact</div>
                <div className="hidden md:block text-lg mx-3 font-medium cursor-pointer hover:text-purple-700">
                    <Link to="/about">About Us</Link>
                </div>
            </div>
            <NavigationMenu></NavigationMenu>
        </div>
    );
};

// const Navigation = () => {
//     return (
//         <div className="flex p-2 px-4 shadow-xl items-center">
//             <div className="mr-auto font-bold text-md" >
//                 Giving Back<br></br> <span className="text-purple-700">Loving</span> Meals
//             </div>
//         </div>
//     );
// };

const NavigationMenu = () => {
    let [isOpen, setIsOpen] = useState(true);

    return <div></div>;
};

export default Navigation;
