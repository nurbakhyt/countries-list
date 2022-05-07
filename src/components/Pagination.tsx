import React, { useMemo } from 'react';
import styles from './Pagination.module.css';

type PaginationProps = {
  total: number;
  current: number;
  perPage: number;
  goToPage: (n: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  total,
  perPage,
  current,
  goToPage,
}) => {
  const pagesNumber = useMemo(
    () => Math.ceil(total / perPage),
    [total, perPage]
  );

  return (
    <ul className={styles.container}>
      <li className={styles.item} onClick={() => goToPage(current - 1)}>&larr;</li>
      {(new Array(pagesNumber)).fill(1).map(
        (_, idx) =>
          <li
            key={idx}
            className={`${styles.item} ${current === idx + 1 && styles.active}`}
            onClick={() => goToPage(idx + 1)}
          >
            {idx + 1}
          </li>)}
      <li className={styles.item} onClick={() => goToPage(current + 1)}>&rarr;</li>
    </ul>
  )
};

export default Pagination;
