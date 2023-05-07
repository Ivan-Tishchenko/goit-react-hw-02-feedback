import css from './FeedbackOptions.module.css';

export const FeedbackOptions = props => {
  const { callback, state } = props;
  const keys = Object.keys(state);
  return (
    <>
      {keys.map(name =>
        keys.indexOf(name) < 3 ? (
          <button key={keys.indexOf(name)} className={css.button} onClick={callback}>
            {name}
          </button>
        ) : undefined
      )}
    </>
  );
};
