import Wrapper from '@/assets/wrappers/midterm/Shop_49';
// import { Link } from 'react-router-dom';
import Link from 'next/link';

const P2_StaticPage_49 = () => {
  return (
    <Wrapper>
      <div className='midterm'>
        <div className='homepage'>
          <div className='directory-menu'>
            <div className='menu-item'>
              <img
                className='background-image'
                src='/images/midterm/homepage/hats.png'
                alt=''
              />
              <Link href='/midterm/hats_49' className='content'>
                <h1 className='title'>HATS</h1>
                <span className='subtitle'>SHOP NOW</span>
              </Link>
            </div>
            <div className='menu-item'>
              <img
                className='background-image'
                src='/images/midterm/homepage/jackets.png'
                alt=''
              />
              <Link href='/midterm/jackets_49' className='content'>
                <h1 className='title'>JACKETS</h1>
                <span className='subtitle'>SHOP NOW</span>
              </Link>
            </div>
            <div className='menu-item'>
              <img
                className='background-image'
                src='/images/midterm/homepage/sneakers.png'
                alt=''
              />
              <Link href='/midterm/sneakers_49' className='content'>
                <h1 className='title'>SNEAKERS</h1>
                <span className='subtitle'>SHOP NOW</span>
              </Link>
            </div>
            <div className='large menu-item'>
              <img
                className='background-image'
                src='/images/midterm/homepage/womens.png'
                alt=''
              />
              <Link href='/exams/midterm/p1_49' className='content'>
                <h1 className='title'>WOMENS</h1>
                <span className='subtitle'>SHOP NOW</span>
              </Link>
            </div>
            <div className='large menu-item'>
              <img
                className='background-image'
                src='/images/midterm/homepage/mens.png'
                alt=''
              />
              <Link href='/midterm/mens_49' className='content'>
                <h1 className='title'>MENS</h1>
                <span className='subtitle'>SHOP NOW</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default P2_StaticPage_49;