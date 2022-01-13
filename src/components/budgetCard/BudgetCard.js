import { Form, Button } from 'react-bootstrap';
import FormCard from '../formCard/FormCard';

const BudgetCard = ({ handleBudget }) => {
  const handleSubmit = e => {
    e.preventDefault();
    handleBudget(e.target.budget.value);
    e.target.reset();
  };

  return (
    <FormCard>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter your total budget</Form.Label>
          <Form.Control
            type="number"
            size="lg"
            defaultValue={0}
            name="budget"
          />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button variant="primary" size="lg" type="submit">
            Save
          </Button>
        </div>
      </Form>
    </FormCard>
  );
};

export default BudgetCard;
