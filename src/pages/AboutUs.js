import TeamPhoto from '../images/about_team.jpg';

const AboutUs = () => {
    const teamPhoto = require('../images/about_team.jpg');
    console.log(teamPhoto);
    return (
        <div className="flex flex-col mt-24 items-center w-full">
            <div className="w-1/2 flex-col">
                <div className="flex">
                    <div className="mb-4">
                        <div className="text-4xl font-bold mb-2">Small Roots</div>
                        <div className="mr-8">
                            Giving Back charity group was found by a refugee woman named Anna. Anna Tran came to the United States
                            as a vietnamese refugee in the early year 1980s.
                        </div>
                    </div>
                    <img className="h-64 mb-4 shadow rounded object-contain" src={TeamPhoto} alt="Could not load image"></img>
                </div>
                <OurVision></OurVision>
                <AnnasStory></AnnasStory>
            </div>
        </div>
    );
};

const OurVision = () => {
    return (
        <div className="p-4 mb-4 rounded bg-purple-100 shadow">
            <div className="mb-2 text-2xl font-bold">Our Vision</div>
            <div>
                Currently Giving Back Loving Meals has sponsored 50 lonely disabled neo don seniors in the remote area. Five free
                meals at local hospitals, plus involvement in building bridges, loving homes for the poor families with small
                children...her wishes is not stopped here, but continue on and on within her capabilities
            </div>
        </div>
    );
};

const AnnasStory = () => {
    return (
        <div className="p-4 mb-8 rounded bg-purple-100 shadow">
            <div className="mb-2 text-2xl font-bold ">Anna's Story</div>
            <img></img>
            <div className="flex flex-col mr-64">
                <p className="mb-4">
                    Anna Tran came to the United States as a refugee in the early year 1980s. Her first trip back to Vn to
                    attending her daughter's wedding after being away for 14 years from home. While she was visited home she
                    noticed many children not in school for their school age. Anna built the elementary school for the village.
                    And the funding was named Giving Back. The named Giving Back born that year. Besides building the school, Anna
                    continues to provide help relief to the needy families.
                </p>
                <p className="mb-4">
                    For over 20 years, Anna continues helping the poor and underprivileged people in society with her own small
                    savings. She came home each year to distributed funds to the needy. Most rent, from 2018 she started sharing
                    her work with friends and Giving Back become public and have more volunteers to help to deliver care to the
                    communities. She also received small financial assistance from the kind hearts.
                </p>
                <p className="">
                    Anna was grown up during Vietnam Civil her mother was a single mother with 6 young children. Their life was
                    dependent on income from her mom who was a vendor. Grown-up in a poor family has nothing and sometimes not
                    even enough meals of the day. Anna never forget where she came from and the childhood experience has a strong
                    influence on her to help others.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
