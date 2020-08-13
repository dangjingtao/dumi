import React from 'react';
import styles from './$id$.css';

export default ({ match }) => {
  const { id } = match.params
  return (
    <div>
      <h1 className={styles.title}>Page SDetail/$id$</h1>
      <p>{id || 'id不存在'}</p>
    </div>
  );
}
