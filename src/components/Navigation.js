import { Dialog, Menu } from '@headlessui/react';
import { useState } from 'react';

const Navigation = () => {
    return (
        <div className="flex p-2 shadow items-center md:py-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 hidden md:block text-red-500"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                />
            </svg>
            <div className="mr-auto font-bold text-xl leading-tight ml-2">
                Giving Back <br className="md:hidden"></br> <span className="text-purple-700">Loving</span> Meals
            </div>

            <div className="hidden md:flex">
                <div className="text-lg mx-2 px-4 font-medium rounded-full border-2 border-gray-600 hover:border-purple-500 cursor-pointer hover:text-purple-700">
                    Donate
                </div>
                <div className="text-lg mx-3 font-medium cursor-pointer hover:text-purple-700">Contact</div>
                <div className="text-lg mx-3 font-medium cursor-pointer hover:text-purple-700">About Us</div>
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

    return (
        <div>
        
        </div>
    );
};

export default Navigation;
