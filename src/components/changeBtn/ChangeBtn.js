import { useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';

import { ReactComponent as ChangeArrows } from '../svgIcons/arrows.svg';
import s from './ChangeBtn.module.css';

const ChangeBtn = () => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className={s.button}
      onClick={() => dispatch(actions.changeCurrency())}
    >
      <ChangeArrows className={s.arrows} />
    </button>
  );
};

export default ChangeBtn;
