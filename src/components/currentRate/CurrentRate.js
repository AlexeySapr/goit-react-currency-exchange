import { useSelector } from 'react-redux';
import { selectors } from '../../reduxData';
import { calculate, reserve } from '../../services';

import s from './CurrentRate.module.css';

const CurrentRate = () => {
  const changingCurrency = useSelector(selectors.getСhangingCurrency);
  const getingCurrency = useSelector(selectors.getGetingCurrency);

  return (
    <ul className={s.currentList}>
      <li className={s.currentListItem}>
        <p>NBU exchange rate</p>
        <p>
          1 {changingCurrency} =
          {`${calculate(
            changingCurrency,
            getingCurrency,
            1,
          )} ${getingCurrency}`}
        </p>
      </li>
      <li className={s.currentListItem}>
        <p>Reserve</p>
        <p>{`${reserve[getingCurrency]} ${getingCurrency}`}</p>
      </li>
    </ul>
  );
};

export default CurrentRate;
