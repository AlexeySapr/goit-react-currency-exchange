import { useState, useEffect } from 'react';
import './App.css';

import { Container, Row, Col, Button } from 'react-bootstrap';

import Section from './components/section/Section';
import AppHeader from './components/appHeader/AppHeader';

import { nanoid } from 'nanoid';
import FormCard from './components/formCard/FormCard';
import CurrentRate from './components/currentRate/CurrentRate';
import Title from './components/title/Title';
import MainSection from './components/mainSection/MainSection';

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
          <MainSection />
        </Row>
        {/* *********************** */}

        <Row>
          <Section>
            <FormCard>
              <Button variant="primary">Exchange</Button>
            </FormCard>
          </Section>
        </Row>
      </Container>
    </>
  );
};

export default App;
