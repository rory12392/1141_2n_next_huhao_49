import React from 'react';
import Wrapper from '../assets/wrappers/Navbar_49';
// import { Link } from 'react-router-dom';
import Link from 'next/link';

const Navbar_49 = () => {
  return (
    <Wrapper>
      <header className='header'>
        <div
          className='header-row container'
          role='navigation'
          aria-label='Main'
        >
          <div className='header-left'>
            <div className='logo'>
              <h1>TkuDemo</h1>
            </div>
          </div>
          <div className='header-right'>
            <ul className='main-menu'>
              <li className='menu-item'>
                <Link href='/' className='active'>
                  Home
                </Link>
              </li>

              {/* <li className='menu-item mega-menu'>
                <Link href='#'>Mega menu +</Link>
                <div className='mega-menu-wrapper slideInUp'>
                  <div className='mega-menu-col'>
                    <h5>Menu block 1</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <Link href='#'>Menu block item 1</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 2</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 3</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 4</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='mega-menu-col'>
                    <h5>Menu block 2</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <Link href='#'>Menu block item 1</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 2</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 3</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 4</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='mega-menu-col'>
                    <h5>Menu block 3</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <Link href='#'>Menu block item 1</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 2</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 3</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 4</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='mega-menu-col'>
                    <h5>Menu block 4</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <Link href='#'>Menu block item 1</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 2</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 3</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 4</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li> */}

              <li className='menu-item dropdown'>
                <Link href='#'>Demo +</Link>
                <div className='sub-menu-wrapper slideInUp'>
                  <ul className='sub-menu'>
                    <li className='menu-item'>
                      <Link href='/booklist_49'>W2-BookList_49</Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='/static_49'>W3-BlogStatic_49</Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='/localjson_49'>W3-BlogLocalJson_49</Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='/node_49'>W4-BlogNode_49</Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='#'>W5-BlogSupa_49</Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className='menu-item dropdown'>
                <Link href='#'>Tuhrefrials +</Link>
                <div className='sub-menu-wrapper slideInUp'>
                  <ul className='sub-menu'>
                    <li className='menu-item'>
                      <Link href='/tuhrefrials/t11_49'>
                        T11_ErrorExamplePage_49
                      </Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='/tuhrefrials/t12_49'>
                        T12_UseStateBasicsPage_49
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className='menu-item dropdown'>
                <Link href='#'>Midterm +</Link>
                <div className='sub-menu-wrapper slideInUp'>
                  <ul className='sub-menu'>
                    <li className='menu-item'>
                      <Link href='/exams/midterm/p1_49'>P1_StaticPage_49</Link>
                    </li>

                    <li className='menu-item'>
                      <Link href='/exams/midterm/p2_49'>P2_StaticPage2_49</Link>
                    </li>

                    <li className='menu-item'>
                      <Link href='/exams/midterm/p3_49'>P3_NodePage_49</Link>
                    </li>

                    <li className='menu-item'>
                      <Link href='/exams/midterm/p4_49'>P4_SupaPage_49</Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className='menu-item'>
                <Link href='#'>Contact</Link>
              </li>
            </ul>
            <Link
              href='#'
              id='hamburger-icon'
              className='mobile-hrefggler'
              aria-label='Mobile Menu'
            >
              <i className='fas fa-bars'></i>
            </Link>
          </div>
          <div id='mobile-menu' className='mobile-menu hidden slideInDown'>
            <ul>
              <li className='menu-item'>
                <Link href='#' className='active'>
                  Home
                </Link>
              </li>

              {/* <li className='menu-item mega-menu'>
                <Link href='#'>Mega menu +</Link>
                <div className='mega-menu-wrapper'>
                  <div className='mega-menu-col'>
                    <h5>Menu block 1</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <Link href='#'>Menu block item 1</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 2</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 3</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 4</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='mega-menu-col'>
                    <h5>Menu block 2</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <Link href='#'>Menu block item 1</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 2</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 3</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 4</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='mega-menu-col'>
                    <h5>Menu block 3</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <Link href='#'>Menu block item 1</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 2</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 3</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 4</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='mega-menu-col'>
                    <h5>Menu block 4</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <Link href='#'>Menu block item 1</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 2</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 3</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 4</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li> */}

              <li className='menu-item dropdown'>
                <Link href='#'>Services +</Link>
                <div className='sub-menu-wrapper'>
                  <ul className='sub-menu'>
                    <li className='menu-item'>
                      <Link href='#'>Service 1</Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='#'>Service 2</Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='#'>Service 3</Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='#'>Service 4</Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className='menu-item dropdown'>
                <Link href='#'>Tuhrefrials +</Link>
                <div className='sub-menu-wrapper slideInUp'>
                  <ul className='sub-menu'>
                    <li className='menu-item'>
                      <Link href='/tuhrefrials/t11_49'>
                        T11_ErrorExamplePage_49
                      </Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='/tuhrefrials/t12_49'>
                        T12_UseStateBasicsPage_49
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='menu-item'>
                <Link href='#'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </Wrapper>
  );
};

export default Navbar_49;
