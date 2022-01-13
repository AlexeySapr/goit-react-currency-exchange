import { useRef } from 'react';

import { Form, Button } from 'react-bootstrap';
import FormCard from '../formCard/FormCard';

const ExpenseCard = ({ handleExpenses }) => {
  const refName = useRef();
  const refAmount = useRef();

  const handleSubmit = e => {
    e.preventDefault();

    handleExpenses({
      [refName.current.name]: refName.current.value,
      [refAmount.current.name]: Number(refAmount.current.value),
    });

    e.target.reset();
  };

  return (
    <FormCard>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter expense name</Form.Label>
          <Form.Control
            type="text"
            size="lg"
            name="name"
            ref={refName}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter expense amount</Form.Label>
          <Form.Control
            type="number"
            size="lg"
            name="amount"
            ref={refAmount}
            defaultValue={0}
          />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button variant="primary" size="lg" type="submit">
            Add
          </Button>
        </div>
      </Form>
    </FormCard>
  );
};

export default ExpenseCard;
