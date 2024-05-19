import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';

export default function NavLinks() {
  return (
    <Navbar
      links={[
        <NavLink key={1} to='/' className={({isActive}) => (isActive ? 'active' : 'navTxt')} >About</NavLink>,
        <NavLink key={1} to='/portfolio' className={({isActive}) => (isActive ? 'active' : 'navTxt')} >Portfolio</NavLink>,
        <NavLink key={1} to='/contact' className={({isActive}) => (isActive ? 'active' : 'navTxt')} >Contact</NavLink>,
        <NavLink key={1} to='/resume' className={({isActive}) => (isActive ? 'active' : 'navTxt')} >Resume</NavLink>,
      ]}
    />
  )
}

