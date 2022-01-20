import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as selectors from '../../redux/selectors';
import * as actions from '../../redux/actions';

import { Col, Button } from 'react-bootstrap';
import ExpenseCard from '../expenseCard/ExpenseCard';
import FormCard from '../formCard/FormCard';

const currencyRate = {
  EUR: 1,
  USD: 1.1228,
  UAH: 32,
  RUB: 85.3333,
};

const calculate = (changingCur, getingCur, value) => {
  const newValue =
    (currencyRate[getingCur] / currencyRate[changingCur]) * value;
  return Math.round(newValue * 100) / 100;
};

const MainSection = () => {
  const [fromCurrency, setFromCurrency] = useState('UAH');
  const [fromValue, setFromValue] = useState(0);
  const [toCurrency, setToCurrency] = useState('UAH');
  const [toValue, setToValue] = useState(0);

  const changingCurrency = useSelector(selectors.getСhangingCurrency);
  const changingValue = useSelector(selectors.getСhangingValue);
  const dispatch = useDispatch();

  // const handleFromCurrency = newCurrency => {
  //   setFromCurrency(newCurrency);

  //   const result = calculate(newCurrency, toCurrency, fromValue);
  //   setToValue(result);
  // };

  const handleToCurrency = newCurrency => {
    setToCurrency(newCurrency);

    const result = calculate(fromCurrency, newCurrency, fromValue);
    setToValue(result);
  };

  const handleFromValue = newValue => {
    setFromValue(newValue);

    const result = calculate(fromCurrency, toCurrency, newValue);
    setToValue(result);
  };

  const handleToValue = newValue => {
    setToValue(newValue);

    const result = calculate(toCurrency, fromCurrency, newValue);
    setFromValue(result);
  };

  const changeForms = () => {
    const tempCurrency = fromCurrency;

    setFromCurrency(toCurrency);
    setToCurrency(tempCurrency);

    const result = calculate(toCurrency, fromCurrency, fromValue);
    setToValue(result);
  };

  return (
    <>
      <Col md={5}>
        <h3>Сhanging</h3>
        <ExpenseCard
          selectCurrency={changingCurrency}
          currencyValue={changingValue}
          handleCurrency={currency =>
            dispatch(actions.changeFromCurrency(currency))
          }
          handleValue={value => dispatch(actions.changeFromValue(value))}
        />
      </Col>
      <Col md={2}>
        <FormCard>
          <Button variant="success" onClick={changeForms}>
            Change
          </Button>
        </FormCard>
      </Col>
      <Col md={5}>
        <h3>Geting</h3>
        <ExpenseCard
          selectCurrency={toCurrency}
          currencyValue={toValue}
          handleCurrency={handleToCurrency}
          handleValue={handleToValue}
        />
      </Col>
    </>
  );
};

export default MainSection;
