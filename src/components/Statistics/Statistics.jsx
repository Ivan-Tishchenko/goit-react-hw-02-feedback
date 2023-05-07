import css from './Statistics.module.css';

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
