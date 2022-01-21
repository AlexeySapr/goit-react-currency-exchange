import { useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';

import { ReactComponent as ChangeArrows } from './arrows-svgrepo-com.svg';
import s from './ChangeBtn.module.css';

const ChangeBtn = () => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className={s.button}
      onClick={() => dispatch(actions.changeCurrency())}
    >
      <ChangeArrows className={s.arrows} width="50" />
    </button>
  );
};

export default ChangeBtn;
