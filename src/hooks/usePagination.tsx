import {useCallback, useEffect, useMemo, useState} from 'react';

const usePagination = (list: string[]) => {
  const perPage = 20;
  const [current, setCurrent] = useState(1);

  const total = useMemo(() => list.length, [list]);
  const from = useMemo(() => (current - 1) * perPage, [current]);

  const paginatedList = useMemo(() => list.slice(from, from + perPage), [list, from]);

  const goToPage = useCallback((n: number) => {
    if (n > 0 && n <= Math.ceil(total / perPage))
      setCurrent(n);
  }, [total]);

  useEffect(() => {
    setCurrent(1);
  }, [list]);

  return {
    current,
    perPage,
    total,
    goToPage,
    paginatedList,
  }
};

export default usePagination;
