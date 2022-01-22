import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as LeftArrow } from '../svgIcons/left-arrow.svg';
import s from './BackBtn.module.css';

const BackBtn = () => {
  const navigate = useNavigate();
  return (
    // <div className={s.btnContainer}>
    //   <Button variant="primary" onClick={() => navigate(-1)}>
    //     <LeftArrow className={s.leftArrow} />
    //     Go back
    //   </Button>
    //   </div>

    <Button
      variant="primary"
      className={s.btnContainer}
      onClick={() => navigate(-1)}
    >
      <LeftArrow className={s.leftArrow} />
      Go back
    </Button>
  );
};

export default BackBtn;
