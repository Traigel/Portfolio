import {NavLink} from '../types/enum/navLink';
import {NavType} from '../types/nav';

export const navInApp: NavType[] = [
  {href: NavLink.Home, navName: 'home'},
  {href: NavLink.About, navName: 'about'},
  {href: NavLink.Skills, navName: 'skills'},
  {href: NavLink.Projects, navName: 'portfolio'},
  {href: NavLink.Contacts, navName: 'contact'},
]