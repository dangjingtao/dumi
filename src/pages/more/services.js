import { request } from 'umi';

export async function getChannelData (params) {
  return request('/api/getChannelData', {
    method: 'get',
  });
}
export async function
  getChannelDataBySearch (params) {
  return request('/api/getChannelDataBySearch', {
    method: 'post',
    data: params,
  });
}