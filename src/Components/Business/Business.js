import React from 'react';
import './Business.css';

export const Business = ({ business }) => {
    return (
        <div className="business">
            <div className="image-container">
                <img 
                src={business.imageSrc} 
                alt="business" />
            </div>
            <h2 className="business-name">{business.name}</h2>
            <div className="business-infos">
                <div className="business-address">
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{business.state} {business.zipCode}</p>
                </div>
                <div className="business-reviews">
                    <h3>{business.category}</h3>
                    <h3 className="business-ratings">{business.rating}</h3>
                    <p>{business.reviewCount}</p>
                </div>
            </div>
        </div>
    )
}