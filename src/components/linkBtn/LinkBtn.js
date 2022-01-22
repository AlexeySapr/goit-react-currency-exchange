import { Link } from 'react-router-dom';
import s from './LinkBtn.module.css';

const LinkBtn = ({ btnText, isDisabled }) => {
  return (
    <Link to="success" className={s.exchangeBtn} disabled={isDisabled}>
      {btnText}
    </Link>
  );
};

export default LinkBtn;
