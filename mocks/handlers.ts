import { rest } from 'msw';
import baseResponse from './index';
import trendingListJson from './data/trendingList.json';

const handles = [
  rest.get('/tending/list', (req, res, ctx) => {
    return res(ctx.json(baseResponse(trendingListJson)));
  }),
];
export default handles;
