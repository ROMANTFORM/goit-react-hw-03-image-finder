// import React, { Component } from 'react';

import './ImageGalleryItem.css';

const ImageGalleryItem = ({ webformatURL, tags, id, largeImageURL, onClick }) => {
    
    return (
            
        <li className="ImageGalleryItem" id={id} >
            <img
                src={webformatURL}
                alt={tags}
                className="ImageGalleryItem-image"
                onClick={onClick}
                data-src={largeImageURL}
            />
        </li>
             
        )
}


export default ImageGalleryItem;