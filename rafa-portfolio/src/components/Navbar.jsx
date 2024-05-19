import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

import menuImg from '../assets/menu-bar.png';

export default function Navbar({ links }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className='navBar'>
        <img src={menuImg} className='menuBtn'
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        ></img>

        <div style={{ minHeight: '150px' }} >
          <Collapse in={open} dimension="width">
            <div id="example-collapse-text">
              <Card body style={{ width: '400px' }} className='collapseMenu'>
                {links.map((link, index) => (
                  <div key={index} className='btn navLinks'
                    onClick={() => setOpen(!open)}>
                    {link}
                  </div>
                ))}
              </Card>
            </div>
          </Collapse>
        </div>
      </div>

      <div className='navLinkDiv'>
        {links.map((link, index) => (
          <div key={index} className='btn navLinksExpanded'>
            {link}
          </div>
        ))}
      </div>
    </>

  )
}
