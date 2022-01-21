// import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as selectors from '../../redux/selectors';
import * as actions from '../../redux/actions';

import { Col, Button } from 'react-bootstrap';
import ExpenseCard from '../expenseCard/ExpenseCard';
import FormCard from '../formCard/FormCard';

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
          <Button
            variant="success"
            onClick={() => dispatch(actions.changeCurrency())}
          >
            Change
          </Button>
        </FormCard>
      </Col>
      <Col md={5}>
        <h3>Geting</h3>
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
