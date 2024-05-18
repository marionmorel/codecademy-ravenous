import React, { useState } from "react";
import styles from "./App.module.css";

import BusinessList from "../Components/BusinessList/BusinessList";
import SearchBar from "../Components/SearchBar/SearchBar";
import Yelp from "../utils/Yelp";

const App = () => {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = async (term, location, sortBy) => {
    const businesses = await Yelp.search(term, location, sortBy);
    setBusinesses(businesses);
  };

  return (
    <div className={styles.app}>
      <h1>ravenous</h1>
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={businesses} />
    </div>
  );
};

export default App;
