import React from 'react';
import { BusinessList } from '../Components/BusinessList/BusinessList';
import { SearchBar } from '../Components/SearchBar/SearchBar';
import './App.css';

const business = {
  imageSrc:
    "https://placehold.co/750x1000",
  name: "Restaurant Name",
  address: "Number Street Name",
  city: "City",
  state: "State",
  zipCode: "Zip Code",
  category: "Category",
  rating: "rating",
  reviewCount: "review count",
};

const businesses = [business, business, business, business, business, business];

function App() {
  return (
    <div className="app">
      <div className="header">
        <h1>ravenous</h1>
      </div>
      <SearchBar />
      <BusinessList businesses={businesses}/>
    </div>
  );
}

export default App;
