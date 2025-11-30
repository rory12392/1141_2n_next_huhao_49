'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

import Wrapper from '@/assets/wrappers/midterm/Shop_49';
import Product_49 from '@/components/midterm/Product_49';


const FetchShopByCategory_49 = () => {
  const [shop_49, setShop_49] = useState([]);
  const params = useParams();
  const category = params.category;
  console.log('category', category);

  const fetchShopFromNode = async () => {
    try {
        const response = await fetch(
        `http://localhost:5000/api/shop_49/${category}`
        );
        const data = await response.json();
        console.log('shop_49 data', data);
        if (data.length !== 0) {
        setShop_49(data);
        }
    } catch (err) {
        console.log(err);
    }
  };

useEffect(() => {
  fetchShopFromNode();
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
