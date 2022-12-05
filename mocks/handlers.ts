import { rest } from 'msw';
import baseResponse from './index';
import registerJson from './data/register.json';

const handles = [
  rest.post('/mock/w3social/login/register', (req, res, ctx) => {
    return res(ctx.json(baseResponse(registerJson)));
  }),
  rest.post('/mock/w3social/login/changePassword', (req, res, ctx) => {
    return res(ctx.json(baseResponse(registerJson)));
  }),
];
export default handles;
