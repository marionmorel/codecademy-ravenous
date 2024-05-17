import React from 'react';
import { Business } from "../Business/Business";
import './BusinessList.css';

export const BusinessList = () => {
    return (
        <div className="business-list">
            <Business />
            <Business />
            <Business />
        </div>
    )
}