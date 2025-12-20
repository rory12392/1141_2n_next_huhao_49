'use client';

import { useState, createContext, useContext } from 'react';
import blogData_49 from '../../_assets/data/blogData.json';

const BlogContext = createContext();

export const BlogContextProvider_49 = ({ children }) => {
  const [name, setName] = useState('huhao');
  const [id, setId] = useState(213417149);
  const [blogs_49, setBlogs_49] = useState(blogData_49);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
  };

  const removeItem = (id) => {
    showAlert(true, 'blog removed', 'danger');
    setBlogs_49(blogs_49.filter((blog) => blog.id !== id));
  };

  const clearAllBlogs = () => {
    showAlert(true, 'clear all blogs', 'danger');
    setBlogs_49([]);
  };

  const loadAllBlogs = () => {
    showAlert(true, 'load all blogs', 'success');
    setBlogs_49([]);
    setBlogs_49(blogData_49);
  }; 
  return <BlogContext.Provider value={{
    name,
    id,
    blogs_49,
    alert,
    showAlert,
    removeItem,
    clearAllBlogs,
    loadAllBlogs,
  }}>{children}</BlogContext.Provider>;
};

export const useBlogContext_49 = () => {
  return useContext(BlogContext);
};