import React from 'react';

import Business from "../Business/Business";

import styles from './BusinessList.module.css';

const BusinessList = ({ businesses }) => {
    return (
        <div className={styles.businessList}>
            {businesses.map((business) => {
                return <Business business={business} key={business.name} />
            })}
        </div>
    )
}

export default BusinessList;