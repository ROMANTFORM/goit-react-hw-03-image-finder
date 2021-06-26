// import React, { Component } from 'react';

import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';

import './ImageGallery.css';

const ImageGallery = ({images, onClick}) => {
    return (
        <>
        <ul className="ImageGallery" onClick={onClick}>
            {images.map(({id, webformatURL, tags, largeImageURL}) => (
            <ImageGalleryItem 
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
            onClick={onClick}
                />  
            ))}    
        </ul>
            
        </>
    )
};

export default ImageGallery;