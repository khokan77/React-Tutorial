import {  Menu, X } from 'lucide-react';
import React from 'react';
import Link from './Link';

const authRoutes = [
    { id: 1, route: '/Home', name: 'Home' },
    { id: 2, route: '/About', name: 'About' },
    { id: 3, route: '/Contact', name: 'Contact' },
  ];

  const links =  authRoutes.map(route => <Link key={route.id} route={route}></Link>)

const NavBar = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <nav className='flex justify-between items-center border-2 p-2'> 
        <span className='flex gap-2' onClick={() => setOpen(!open)}>
            {open? <X className="md:hidden"/>: <Menu className="md:hidden"/> }
        <ul className={`md:hidden absolute bg-amber-200 
          ${open? 'top-8': '-top-28'}
            duration-1000`}>
        {  links  }
        </ul>
        <h3>My NavBar</h3>
        </span>
            <ul className='md:flex hidden gap-4'>              
                {  links  }
            </ul>    
            <button>Sign In</button>        
        </nav>
    );
};

export default NavBar;