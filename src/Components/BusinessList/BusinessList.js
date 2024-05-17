import React from 'react';
import { Business } from "../Business/Business";
import './BusinessList.css';

export const BusinessList = ({ businesses }) => {
    return (
        <div className="business-list">
            {businesses.map((business) => {
                return <Business business={business} key={business.name} />
            })}
        </div>
    )
}