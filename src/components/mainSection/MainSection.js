import { useState } from 'react';

import { Col, Button } from 'react-bootstrap';
import ExpenseCard from '../expenseCard/ExpenseCard';
import FormCard from '../formCard/FormCard';

const MainSection = () => {
  const [fromData, setFromData] = useState({ currency: 'UAH', value: 0 });
  const [toData, setToData] = useState({ currency: 'UAH', value: 0 });

  const handleFromCurrency = newFromData => {
    setFromData({ ...fromData, currency: newFromData });
  };

  const handleToCurrency = newToData => {
    setToData({ ...toData, currency: newToData });
  };

  const handleFromValue = newFromData => {
    setFromData({ ...fromData, value: newFromData });
  };

  const handleToValue = newToData => {
    setToData({ ...toData, value: newToData });
  };

  const changeForms = () => {
    const tempData = fromData;
    setFromData({ ...toData });
    setToData({ ...tempData });
  };

  return (
    <>
      <Col md={5}>
        <ExpenseCard
          select={fromData.currency}
          currency={fromData.value}
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
          select={toData.currency}
          currency={toData.value}
          handleCurrency={handleToCurrency}
          handleValue={handleToValue}
        />
      </Col>
    </>
  );
};

export default MainSection;
