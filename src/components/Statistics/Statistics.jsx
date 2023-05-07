import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = props => {
  const keys = Object.keys(props);
  return (
    <>
      <ul className={css.list}>
        {keys.map(key => (
          <li key={keys.indexOf(key)} className={css.item}>
            {key === 'positivePercentage' ? 'positive feedback' : key}:{' '}
            {props[key]}
            {key === 'positivePercentage' ? '%' : undefined}
          </li>
        ))}
      </ul>
    </>
  );
};
Statistics.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
