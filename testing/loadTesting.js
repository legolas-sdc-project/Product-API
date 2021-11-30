const http = require('k6/http');
const { sleep, check } = require('k6');

export const options = {
  vus: 1,
  duration: '10s',
};

const url = 'http://localhost:3010/products';

export default function () {
  const res = http.get(`${url}/100000/related`);
  check(res, {
    'status was 200': r => r.status === 200,
    'transaction time < 2000ms': r => r.timings.duration < 2000,
  });
  sleep(1);
};