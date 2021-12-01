const http = require('k6/http');
const { sleep, check } = require('k6');

const url = 'http://localhost:3010/products';

export const options = {
  discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: 'constant-arrival-rate',
      rate: 1000,
      timeUnit: '1s', // iterations per second
      duration: '10s',
      preAllocatedVUs: 1000, // how large the innitial pool of VUs would be
      maxVUs: 1000, // maximum number of VU
    },
  },
};

export default function () {
  const res = http.get(`${url}`);
  check(res, {
    'status was 200': r => r.status === 200,
    'transaction time < 2000ms': r => r.timings.duration < 2000,
  });
  sleep(1);
};
