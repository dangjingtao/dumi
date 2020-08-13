import React from 'react';
import styles from './$id.css';

export default ({ match }) => {
  // 获取当前id
  const { id } = match.params;

  return (
    <div>
      <h1 className={styles.title}>Page Detail/{id}</h1>
    </div>
  );
}
