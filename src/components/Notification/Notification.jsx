import css from './Notification.module.css';

export const Notification = ({ message }) => {
  return <strong className={css.message}>{message}</strong>;
};
