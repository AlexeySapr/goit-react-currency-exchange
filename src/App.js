import { useState, useEffect } from 'react';
import './App.css';

import { Container, Row, Col } from 'react-bootstrap';

import Section from './components/section/Section';
import AppHeader from './components/appHeader/AppHeader';
import BudgetCard from './components/budgetCard/BudgetCard';
import ExpenseCard from './components/expenseCard/ExpenseCard';
import ExpenseInfoSection from './components/expenseInfoSection/ExpenseInfoSection';
import { nanoid } from 'nanoid';
import FormCard from './components/formCard/FormCard';
import CurrentRate from './components/currentRate/CurrentRate';
import Title from './components/title/Title';

const App = () => {
  const [budget, setBudget] = useState(() => {
    return JSON.parse(localStorage.getItem('budget')) ?? 0;
  });
  const [expenses, setExpenses] = useState(() => {
    return JSON.parse(localStorage.getItem('expenses')) ?? [];
  });

  const handleDelItems = id => {
    setExpenses(expenses.filter(elem => elem.id !== id));
  };

  const handleBudget = budget => {
    setBudget(budget);
  };

  const handleExpenses = newExp => {
    setExpenses([{ id: nanoid(), ...newExp }, ...expenses]);
  };

  const allExpenses = expenses.reduce((sum, item) => {
    return sum + item.amount;
  }, 0);

  useEffect(() => {
    window.localStorage.setItem('budget', JSON.stringify(budget));
  }, [budget]);

  useEffect(() => {
    window.localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  return (
    <>
      <AppHeader title={'Currency exchange'} />
      <Container>
        <Row>
          <Section>
            <CurrentRate />
          </Section>
        </Row>

        <Row>
          <Section>
            <Title text={'Exchange values'} />
          </Section>
        </Row>

        {/* *********************** */}
        <Row>
          <Col md={4}>
            <Section>
              <FormCard num={3} />
            </Section>
          </Col>
          <Col md={4}>
            <Section>
              <FormCard num={4} />
            </Section>
          </Col>
          <Col md={4}>
            <Section>
              <FormCard num={5} />
            </Section>
          </Col>
        </Row>
        {/* *********************** */}

        <Row>
          <Section>
            <FormCard num={6} />
          </Section>
        </Row>

        {/* <Row md={4}>
          <Col md={5}>
            <Section>
              <FormCard />
            </Section>
            <Section>
              <FormCard />
            </Section>
          </Col>
          <Col md={7}>
            <Section>
              <FormCard />
            </Section>
          </Col>
        </Row> */}
      </Container>
    </>
  );
};

export default App;
