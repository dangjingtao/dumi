import React from 'react';
import { Link } from 'umi';
import styles from './_layout.css';
import { history } from 'umi';


export default function (props) {
  const toBBB = () => {
    history.push('bbb')
  }
  return (
    <div>
      <h1>Page _layout</h1>
      {/* 声明式 */}
      <Link to="aaa">Go to aaa page</Link>&nbsp;|&nbsp;
      {/* 命令式 */}
      <button onClick={toBBB}>Go to bbb page</button>
      <div>{props.children}</div>
    </div>
  )
}


