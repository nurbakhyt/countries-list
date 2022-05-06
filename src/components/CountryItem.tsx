import React from 'react';
import styles from './CountryItem.module.css';

type CountryProps = Country;

const CountryItem: React.FC<CountryProps> = ({ area, name, region })  => (
  <div className={styles.country}>
    <p className={styles.name}>{name}</p>
    <p>Region: {region}</p>
    <p>Area: <span className={styles.area}>{area}</span></p>
  </div>
);

export default CountryItem;
