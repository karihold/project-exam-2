import { headers } from './api';

export const get = (url) => fetch(url, { headers }).then((response) => response.json());

export const post = (url, body) => fetch(url, { headers, method: 'POST', body: JSON.stringify(body) });
