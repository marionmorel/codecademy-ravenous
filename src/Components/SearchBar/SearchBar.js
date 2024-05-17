import React from 'react';
import './SearchBar.css';

export const SearchBar = () => {
    return (
        <div className="search-bar">
            <div className="sorting-options">
                <ul>
                    <li>Best Match</li>
                    <li>Highest Rated</li>
                    <li>Most Reviewed</li>
                </ul>
            </div>
            <div className="inputs">
                <input 
                    name="search-business"
                    placeholder="Search Business"
                />
                <input 
                    name="location"
                    placeholder="City"
                />
            </div>
            <div className="submit">
                <button className="submit-btn">Let's Go</button>
            </div>
        </div>
    )
}