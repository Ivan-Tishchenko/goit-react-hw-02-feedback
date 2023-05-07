import css from './Section.module.css';

export const Section = props => {
  return (
    <section className={css.section}>
      <h2 className={css.title}>{props.title}</h2>
      <div>{props.children}</div>
    </section>
  );
};
