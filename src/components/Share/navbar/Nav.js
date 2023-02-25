import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'; 

const Nav = () => {


    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blogs">Blog</Link></li>
        <li><a href="#contact">Contact</a></li>

    </>

    return (
     <>


      <div className='bg-info'>
          <div className="navbar w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="" className="btn btn-ghost normal-case text-2xl">Bipul Hossain</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-xl">
                    {menuItems}
                </ul>
            </div>
        </div>
      </div>
     </>
    );
};



export default Nav;