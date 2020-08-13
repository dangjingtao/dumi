import React, { Component, useEffect } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Form, Input, Button, Table } from 'antd';
import { connect } from 'dva'; // dva连接redux
import styles from './index.less';

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
},
{
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}];


const More = (props) => {
  const { getMoreData, getMoreDataBySearch, more: { data } } = props;

  useEffect(() => {
    getMoreData();
  }, []);

  const onFinish = value => {
    getMoreDataBySearch(value);
  }

  return (<PageHeaderWrapper>
    <Card>
      <Form onFinish={onFinish}>
        <Form.Item
          label="姓名"
          name="name"
        >
          <Input placeholder="请输⼊姓名" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            查询
          </Button>
        </Form.Item>
      </Form>
    </Card>
    <Card>
      <Table dataSource={data} columns={columns} rowKey="id" />
    </Card>
  </PageHeaderWrapper>)
}


// 输出connect封装的高阶组件
// connect第一个参数返回状态，在此定义的状态是`more`
// 第二个参数返回props，
export default connect(({ more }) => ({ more }), {
  getMoreData: () => ({
    type: 'more/getChannelData'
  }),
  getMoreDataBySearch: search => ({
    type: 'more/getChannelDataBySearch',
    payload: search
  })
})(More);

