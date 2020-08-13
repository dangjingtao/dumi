import { Redirect } from 'umi';

export default (props) => {
  // 获取bbb权限，正常来说应该从redux获取
  const isBBB = !!localStorage.isBBB;

  if (isBBB) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/404" />;
  }
}