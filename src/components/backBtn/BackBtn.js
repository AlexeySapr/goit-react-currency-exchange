import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as LeftArrow } from '../svgIcons/left-arrow.svg';

const BackBtn = () => {
  const navigate = useNavigate();
  return (
    <Button variant="primary" onClick={() => navigate(-1)}>
      <LeftArrow width="20" fill="#fff" />
      Go back
    </Button>
  );
};

export default BackBtn;
