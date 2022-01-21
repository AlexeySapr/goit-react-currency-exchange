import { useSelector } from 'react-redux';
import * as selectors from '../../redux/selectors';
import { calculate } from '../../services/calculate';
import { reserve } from '../../services/reserve';

import s from './CurrentRate.module.css';

const CurrentRate = () => {
  const changingCurrency = useSelector(selectors.getСhangingCurrency);
  const getingCurrency = useSelector(selectors.getGetingCurrency);

  return (
    <ul className={s.currentList}>
      <li className={s.currentListItem}>
        <p>Курс</p>
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
        <p>Резерв</p>
        <p>{`${reserve[getingCurrency]} ${getingCurrency}`}</p>
      </li>
    </ul>
  );
};

export default CurrentRate;
