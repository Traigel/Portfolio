import {LinksType} from '../types/links';
import {LinksName} from '../types/enum/links';


const GIT_HUB_HREF = 'https://github.com/Traigel'
const INSTAGRAM_HREF = 'https://www.instagram.com/vova_tron/'
const LINKEDIN_HREF = 'https://www.linkedin.com/in/traigel/'

export const headerLinks: LinksType[] = [
  {href: GIT_HUB_HREF, svgName: LinksName.GitHub},
  {href: INSTAGRAM_HREF, svgName: LinksName.Instagram},
  {href: LINKEDIN_HREF, svgName: LinksName.Linkedin},
]