import React from 'react';
import Logo from '/src/_assets/Logo'

const Navbar = () => {
  return (
    <nav className="py-4 border-b bg-white">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="block flex items-center">
          <Logo className="mx-auto rounded-full w-10 h-10"/>
          <div className="text-xl font-bold">React Jet Stream</div>
        </a>
        <ul className="flex space-x-4">
          <li><a href="/auth/login">Login</a></li>
          <li><a href="/auth/register">Register</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
