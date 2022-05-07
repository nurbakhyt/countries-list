import React, { ReactNode } from 'react';
import styles from './Select.module.css';

type SelectProps = {
  label: string;
  value: string,
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: ReactNode;
};

const Select: React.FC<SelectProps> = ({ label, children, value, onChange }) => (
  <label className={styles.label}>
    {label}&nbsp;
    <select className={styles.select} value={value} onChange={onChange}>
      {children}
    </select>
  </label>
);

export default Select;
