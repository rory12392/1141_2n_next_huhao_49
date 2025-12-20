'use client';

import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';

import Form from './_components/Form_49';
import Items from './_components/Items_49';

import Wrapper from '../_assets/Wrapper/Grocery_49';

const GroceryPage_49 = () => {
const [items, setItems] = useState([]);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    setItems([...items, newItem]);
    toast.success('Item added successfully!');
  };

  return (
    <Wrapper>
      <section className='section-center'>
        <ToastContainer position='top-center' />
        <Form addItem={addItem} />
        <Items items={items} />
      </section>
    </Wrapper>
  );
};
export default GroceryPage_49;
