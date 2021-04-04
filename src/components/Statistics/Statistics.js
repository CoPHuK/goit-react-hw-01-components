import React from 'react';
import propTypes from 'prop-types';
import style from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    console.dir(stats),
    (
      <section className={style.statistics}>
        {title && <h2 className={title}>{title}</h2>}
        <ul className={style.stat_list}>
          {stats.map(stat => {
            const { id, label, percentage } = stat;
            return (
              <li className={style.item} key={id}>
                <span className={style.label}> {label}</span>
                <span className={style.percentage}> {percentage}%</span>
              </li>
            );
          })}
        </ul>
      </section>
    )
  );
};
Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    }),
  ),
};
export default Statistics;
