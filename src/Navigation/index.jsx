import React from 'react'
import tsLogo from '../assets/ts_logo.png'

const index = () => {

  const navLinks = [
    { title: 'Expertise', path: '/' },
    { title: 'Workforce Solutions', path: '/about' },
    { title: 'Industries', path: '/services' },
    { title: 'Supplier Diversity', path: '/contact' },
    { title: 'About', path: '/contact' },
    { title: 'Careers', path: '/contact' },
    { title: 'Contact', path: '/contact' },
  ]

  return (
    <div className='w-full p-6' style={{
      height: '12vh',
    }}>
      <ul className='flex justify-between items-center'>
        <li>
          <img src={tsLogo} alt="" />
        </li>
        <ul className='flex justify-between items-center gap-5'>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.path}>{link.title}</a>
            </li>
          ))}
        </ul>
      </ul>
    </div>
  )
}

export default index