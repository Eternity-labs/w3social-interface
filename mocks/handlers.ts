import { rest } from 'msw';
import baseResponse from './index';
import registerJson from './data/register.json';
import userInfoJson from './data/userInfo.json';
import tagListJson from './data/tagList.json';

const handles = [
  rest.post('/mock/w3social/login/register', (req, res, ctx) => {
    return res(ctx.json(baseResponse(registerJson)));
  }),
  rest.post('/mock/w3social/login/login', (req, res, ctx) => {
    return res(ctx.json(baseResponse(registerJson)));
  }),
  rest.post('/mock/w3social/login/changePassword', (req, res, ctx) => {
    return res(ctx.json(baseResponse(registerJson)));
  }),
  rest.get('/mock/w3socialLogin/user/getUserInfo', (req, res, ctx) => {
    return res(ctx.json(baseResponse(userInfoJson)));
  }),
  rest.get('/mock/w3social/square/moment/getTagList', (req, res, ctx) => {
    return res(ctx.json(baseResponse(tagListJson)));
  }),
];
export default handles;
