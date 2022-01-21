import { useSelector, useDispatch } from 'react-redux';
import * as selectors from '../../redux/selectors';
import * as actions from '../../redux/actions';

import { Col } from 'react-bootstrap';
import ExpenseCard from '../expenseCard/ExpenseCard';
import ChangeBtn from '../changeBtn/ChangeBtn';

import s from './MainSection.module.css';

const MainSection = () => {
  const changingCurrency = useSelector(selectors.getСhangingCurrency);
  const changingValue = useSelector(selectors.getСhangingValue);

  const getingCurrency = useSelector(selectors.getGetingCurrency);
  const getingValue = useSelector(selectors.getGetingValue);

  const dispatch = useDispatch();

  return (
    <>
      <Col md={5}>
        <h3>Сhanging</h3>
      </Col>
      <Col md={2}></Col>
      <Col md={5}>
        <h3>Geting</h3>
      </Col>
      <Col md={5}>
        <ExpenseCard
          selectCurrency={changingCurrency}
          currencyValue={changingValue}
          handleCurrency={currency =>
            dispatch(actions.changeFromCurrency(currency))
          }
          handleValue={value => dispatch(actions.changeFromValue(value))}
        />
      </Col>
      <Col md={2} className={s.alingBtn}>
        <ChangeBtn />
      </Col>

      <Col md={5}>
        <ExpenseCard
          selectCurrency={getingCurrency}
          currencyValue={getingValue}
          handleCurrency={currency =>
            dispatch(actions.changeToCurrency(currency))
          }
          handleValue={value => dispatch(actions.changeToValue(value))}
        />
      </Col>
    </>
  );
};

export default MainSection;
