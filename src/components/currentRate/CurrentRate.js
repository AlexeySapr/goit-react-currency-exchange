import s from './CurrentRate.module.css';

const CurrentRate = () => {
  return (
    <ul className={s.currentList}>
      <li className={s.currentListItem}>
        <p>Курс</p>
        <p>1EUR = 32.56UAH</p>
      </li>
      <li className={s.currentListItem}>
        <p>Резерв</p>
        <p>30000UAH</p>
      </li>
    </ul>
  );
};

export default CurrentRate;
