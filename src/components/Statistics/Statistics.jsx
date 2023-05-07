export const Statistics = props => {
  const keys = Object.keys(props);
  return (
    <>
      <ul>
        {keys.map(key => (
          <li key={keys.indexOf(key)}>
            {key === 'positiveFeedback' ? "positive feedback" : key}: {props[key]}
            {key === 'positiveFeedback' ? '%' : undefined}
          </li>
        ))}
      </ul>
    </>
  );
};
