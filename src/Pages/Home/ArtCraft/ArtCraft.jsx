import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import SingleArtCraft from './SingleArtCraft';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const ArtCraft = ({ loadedItems }) => {
    const [artCraft, setArtCraft] = useState(loadedItems);
    const [showAll, setShowAll] = useState(false);
    const firstSixArtCrafts = artCraft.slice(0, 6);
    
    useEffect(() => {
        Aos.init();
    }, [artCraft]);

    const handleShowAll = () => {
        setShowAll(true);
    };

    return (
        <div className='mb-5'>
            <h1 className='text-center text-3xl font-bold mt-5 mb-5'>Our Featured Craft Items</h1>
            {artCraft.length === 0 ? (
                <p className='text-center text-red-400 font-bold'>No data found.</p>
            ) : (
                <div
                    data-aos='fade-zoom-in'
                    data-aos-offset='200'
                    data-aos-easing='ease-in-sine'
                    data-aos-duration='500'
                    className='w-[98%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                >
                    {showAll ? (
                        artCraft.map((artCraftItem) => (
                            <SingleArtCraft key={artCraftItem?._id} artCraftItem={artCraftItem} setArtCraft={setArtCraft}></SingleArtCraft>
                        ))
                    ) : (
                        firstSixArtCrafts.map((artCraftItem) => (
                            <SingleArtCraft key={artCraftItem?._id} artCraftItem={artCraftItem} setArtCraft={setArtCraft}></SingleArtCraft>
                        ))
                    )}
                </div>
            )}
            {/* Show All button */}
            {artCraft.length > 6 && !showAll && (
                <div className="text-center mt-8">
                   <Link to={`/allArt&Craft`}>
                   <Button onClick={handleShowAll} className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Show All
                    </Button>
                   </Link>
                </div>
            )}
        </div>
    );
};

export default ArtCraft;
