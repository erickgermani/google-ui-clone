import './Header.scss';
import Links from './header/Links';
import Menu from './header/Menu';
import User from './header/User';

const Header = () => (
	<div className="header">
		<div className="menu">
			<Links />
			<div className="tools">
				<Menu />
				<User />
			</div>
		</div>
	</div>
);

export default Header;
