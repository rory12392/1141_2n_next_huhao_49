'use client';

import { useState } from 'react';

import Blog2_49 from './_components/Blog2_49.jsx';
import Wrapper from '../../_assets/Wrapper/Blog2_49';
import Alert_49 from '../../_components/Alert_49';

import { BlogContextProvider_49, useBlogContext_49 } from './_blogContext_49.jsx';

const BlogLocalJsonPage2_49 = () => {
  
  return (
    <BlogContextProvider_49>
      <Content_49 />
    </BlogContextProvider_49>
  );
};

const Content_49 = () => {
  const {  
    name, 
    id, 
    blogs_49, 
    alert, 
    showAlert, 
    removeItem, 
    clearAllBlogs, 
    loadAllBlogs 
  } = useBlogContext_49();
  return(
    <Wrapper>
      {alert.show && <Alert_49 alert={alert} showAlert={showAlert} />}
      <section className='blogs'>
        <div className='section-title'>
          <h2>
            blogs context from local json 2 -- {name}, {id}{' '}
          </h2>
        </div>
        <div className='blogs-center'>
          {blogs_49.map((item) => {
            const { id, title, descrip, category, img } = item;
            return (
              <Blog2_49
                key={id}
                id={id}
                title={title}
                descrip={descrip}
                category={category}
                img={img}
                removeItem={removeItem}
              />
            );
          })}
        </div>
        <div className='flex justify-center items-center gap-8 mt-8'>
          <button
            type='button'
            className='text-red-700 bg-red-200 hover:bg-red-300 capitalize px-4 py-2 text-base rounded'
            onClick={clearAllBlogs}
          >
            clear all blogs
          </button>
          <button
            type='button'
            className='text-blue-700 bg-blue-200 hover:bg-blue-300 capitalize px-4 py-2 text-base rounded'
            onClick={loadAllBlogs}
          >
            load all blogs
          </button>
        </div>
      </section>
    </Wrapper>
  )
}

export default BlogLocalJsonPage2_49;
