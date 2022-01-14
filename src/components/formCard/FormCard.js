import s from './FormCard.module.css';

const FormCard = ({ children }) => {
  return <div className={s.card}>{children}</div>;
};

export default FormCard;
