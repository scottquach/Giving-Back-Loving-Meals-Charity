import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Support = () => {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col items-center p-4 md:w-1/2 md:mt-10 w-full">
                <div className="mb-10">
                    <div className="text-2xl font-bold">Support Us</div>
                    <div>
                        All funds go to providing meals to those in need. No employees are paid and all workers are volunteers
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-around w-full">
                    <div className="border rounded-md px-4 pt-2 pb-8 mb-4 md:mb-0 md:w-5/12 leading-5">
                        <div className="text-xl font-bold">Venmo</div>
                        <div>Anna Trinh</div>
                        <div className="italic">@LovingMeals</div>
                    </div>
                    <div className="border rounded-md px-4 pt-2 pb-8 md:w-5/12 leading-5">
                        <div className="text-xl font-bold">Direct</div>
                        <div>Reach out directly on our Facebook</div>
                        <a
                            className="flex items-center py-2"
                            href="https://www.facebook.com/groups/2834877599904077"
                            target="_blank"
                        >
                            <FontAwesomeIcon className="mr-2 text-blue-700 group-hover:text-white" icon={faFacebook} />
                            <div>Facebook page</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Support };
