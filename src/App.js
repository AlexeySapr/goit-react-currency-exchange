import { useState, useEffect } from 'react';
import './App.css';

import { Container, Row, Col } from 'react-bootstrap';

import Section from './components/section/Section';
import AppHeader from './components/appHeader/AppHeader';
import BudgetCard from './components/budgetCard/BudgetCard';
import ExpenseCard from './components/expenseCard/ExpenseCard';
import InfoSection from './components/infoSection/InfoSection';
import ExpenseInfoSection from './components/expenseInfoSection/ExpenseInfoSection';
import { nanoid } from 'nanoid';

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
      <AppHeader title={'Budget calculator'} />
      <Container>
        <Row md={4}>
          <Col md={5}>
            <Section>
              <BudgetCard handleBudget={handleBudget} />
            </Section>
            <Section>
              <ExpenseCard handleExpenses={handleExpenses} />
            </Section>
          </Col>
          <Col md={7}>
            <InfoSection budget={budget} expenses={allExpenses} />
            {expenses.length > 0 && (
              <ExpenseInfoSection
                expenses={expenses}
                delItems={handleDelItems}
              />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
