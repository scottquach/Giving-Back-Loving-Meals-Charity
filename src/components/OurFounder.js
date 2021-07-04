import TeamPhoto from '../images/founder.jpg';

const OurFounder = () => {
    return (
        <div className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 px-8 md:px-44 mb-10" >
            <div className="flex flex-col items-start md:mr-8">
                <div className="font-bold text-2xl mb-3 mt-8 text-purple-700">Our Founder</div>
                <div>
                    Anna Tran came to the United States as a refugee in the early year 1980s. Her first trip back to Vn. While she
                    was visited home she noticed many children not in school for their school age. Anna built the elementary
                    school for the village. And the funding was named Giving Back. The named Giving Back born that year. Besides
                    building the school, Anna continues to provide help relief to the needy families.
                </div>
            </div>
            <img className="mt-8 md:ml-16 h-96"  src={TeamPhoto} />
        </div>
    );
};

export default OurFounder;
