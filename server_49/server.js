import express from 'express';
import cors from 'cors';

const app = express();

import db from './utils/database.js';

app.use(cors());

app.use('/api/blog_49', async (req, res, next) => {
  const results = await db.query(`select * from blog_49`);
  console.log('results', JSON.stringify(results.rows));
  res.json(results.rows);
});

app.use('/api/shop_49/cart/:uid', async (req, res, next) => {
  console.log('uid', req.params.uid);

  const results = await db.query(
    `
    select C.user_id, U.uname as user_name, C.product_id,
    S.pname as product_name, C.quantity, S.price, S.img_url
    from cart2_49 as C, user2_49 as U, shop2_49 as S
    where U.uid = $1
      and C.user_id = U.uid
      and C.product_id = S.pid
  `,
    [req.params.uid]
  );

  console.log('results', JSON.stringify(results.rows));
  res.json(results.rows);
});

app.use('/api/shop_49/:category', async (req, res, next) => {
  console.log('category', req.params.category);
  const results = await db.query(
    `select * from category2_49, shop2_49 where cname = $1 and cid = cat_id`,
    [req.params.category]
  );
  //console.log('results', JSON.stringify(results.rows));
  res.json(results.rows);
});

app.use('/api/shop_49', async (req, res, next) => {
  const results = await db.query(`select * from shop2_49`);
  console.log('results', JSON.stringify(results.rows));
  res.json(results.rows);
});

app.use('/', (req, res, next) => {
  res.send('Hu Hao, 213417149');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port} `);
});
