'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

import Wrapper from '../../_wrapper/Shop_49';
import Product_49 from '../../_componemts/Product_49';

import { supabase } from '@/db/clientSupabase';

const FetchShopByCategory_49 = () => {
  const [shop_49, setShop_49] = useState([]);
  const params = useParams();
  const category = params.category;
  console.log('category', category);

  const fetchShopFromSupabase = async () => {
  try {
    let { data, error } = await supabase
      .from('category2_49')
      .select('*, shop2_49(*)')
      .eq('cname', category);

    console.log('data', data[0].shop2_49);

    if (data.length !== 0) {
      setShop_49(data[0].shop2_49);
    }
  } catch (err) {
    console.log(err);
  }
};


  useEffect(() => {
    fetchShopFromSupabase();
  }, []);

  return (
    <Wrapper>
      <div className='shop-page'>
        <div className='section-title'>
          <h4 className='text-center'> HU HAO, 213417149 </h4>
        </div>
        <div className='collection-page'>
          <h1 className='title'>{category}</h1>
          <div className='items'>
            {shop_49?.map((item) => {
              const { pid, pname, price, img_url } = item;
              return (
                <Product_49
                  key={pid}
                  img_url={img_url}
                  pname={pname}
                  price={price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FetchShopByCategory_49;
