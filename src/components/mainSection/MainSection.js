import { useState } from 'react';

import { Col, Button } from 'react-bootstrap';
import ExpenseCard from '../expenseCard/ExpenseCard';
import FormCard from '../formCard/FormCard';

const multFrom = 10;
const moltTo = 3;

const MainSection = () => {
  const [fromCurrency, setFromCurrency] = useState('UAH');
  const [fromValue, setFromValue] = useState(0);
  const [toCurrency, setToCurrency] = useState('UAH');
  const [toValue, setToValue] = useState(0);

  const handleFromCurrency = newCurrency => {
    setFromCurrency(newCurrency);
  };

  const handleToCurrency = newCurrency => {
    setToCurrency(newCurrency);
  };

  const handleFromValue = newValue => {
    setFromValue(newValue);
    setToValue(newValue * multFrom);
  };

  const handleToValue = newValue => {
    setToValue(newValue);
    setFromValue(newValue * moltTo);
  };

  const changeForms = () => {
    const tempCurrency = fromCurrency;
    const tempValue = fromValue;

    setFromCurrency(toCurrency);
    setFromValue(toValue);

    setToCurrency(tempCurrency);
    setToValue(tempValue);
  };

  return (
    <>
      <Col md={5}>
        <ExpenseCard
          selectCurrency={fromCurrency}
          currencyValue={fromValue}
          handleCurrency={handleFromCurrency}
          handleValue={handleFromValue}
        />
      </Col>
      <Col md={2}>
        <FormCard>
          <Button variant="light" onClick={changeForms}>
            Change
          </Button>
        </FormCard>
      </Col>
      <Col md={5}>
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
