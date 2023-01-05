import './Content.scss';
import Buttons from './content/Buttons';
import Logo from './content/Logo';
import Search from './content/Search';

const Content = () => (
	<div className="content">
		<Logo />
		<Search />
		<Buttons />
	</div>
);

export default Content;
