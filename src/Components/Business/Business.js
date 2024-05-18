import React from "react";
import styles from "./Business.module.css";

const Business = ({ business }) => {

  let maps = `http://maps.google.com/?q=${business.name},${business.address},${business.city},${business.state},${business.zipCode}`;

  return (
    <div className={styles.business}>
      <div className={styles.imageContainer}>
        <a href={business.url} target="_blank"><img src={business.imageSrc} alt="" /></a>
      </div>
      <h2>{business.name}</h2>
      <div className={styles.businessInfos}>
        <a href={maps} target="_blank"><div className={styles.businessAddress}>
          <p>{business.address}</p>
          <p>{business.city}</p>
          <p>{`${business.state} ${business.zipCode}`}</p>
        </div></a>
        <div className={styles.businessReviews}>
          <h3>{business.category.toUpperCase()}</h3>
          <h3 className={styles.businessRating}>{`${business.rating} stars`}</h3>
          <p>{`${business.reviewCount} reviews`}</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
