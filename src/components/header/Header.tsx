import { Link } from 'react-scroll';
import { SvgSelector } from '../../common/svgSelector/SvgSelector';
import { NavLink } from '../../types/enum/navLink';
import styles from './Header.module.scss';
import { Links } from './links/Links';
import { Nav } from './nav/Nav';

export function Header() {
	// test git

	return (
		<header className={styles.header}>
			<div className={styles.headerContainer}>
				<Link
					className={styles.logo}
					to={NavLink.Home}
					spy={true}
					smooth={true}
					offset={-60}
					duration={500}
				>
					<SvgSelector svgName={'PortfolioSvg'} />
				</Link>

				<Nav />

				<Links />
			</div>
		</header>
	);
}
