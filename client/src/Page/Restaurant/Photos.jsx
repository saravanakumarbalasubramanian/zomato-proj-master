import React, { useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';


// component
import PhotoCollection from '../../Components/restaurant/PhotosCollection';

const Photos = () => {

    const [photos, setPhotos] = useState([
        "https://b.zmtcdn.com/data/pictures/chains/3/50643/5c8e9869c94e8d2d92d983df477fc9c1.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/3/50643/5f337acb3e53d0e9434de66d70dd1ed2.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/3/50643/cc33946e906d921f984cf7d538014128.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/3/50643/bdf9d4f1e2ad7851a1bcd7517f786aea.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/3/50643/cf4980e9a955625c8ab8bf5c171ba98a.jpg",
    ]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentImg, setCurrentImg] = useState(0);
    const closeViewer = () => setIsMenuOpen(false);
    const openViewer = () => setIsMenuOpen(true);


    return (
        <>

            {isMenuOpen && (
                <ImageViewer
                    src={photos}
                    currentIndex={currentImg}
                    disableScroll={false}
                    onClose={closeViewer}
                />
            )}
     

      <div className='flex flex-wrap gap-5'>

            {
                photos.map((photo) => (
                    <PhotoCollection image={photo} openViewer={openViewer} />
                    ))
                }
                </div>


        </>
    )
}

export default Photos