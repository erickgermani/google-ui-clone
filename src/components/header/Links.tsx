import { Link } from '../../interfaces';

const Links = () => {
	const links: Link[] = [
		{
			label: 'Gmail',
			href: 'https://mail.google.com/mail/',
		},
		{
			label: 'Imagens',
			href: 'https://www.google.com.br/imghp',
		},
	];

	return (
		<ul className="links">
			{links.map((link: Link, index): JSX.Element => {
				return (
					<li
						className="link"
						key={index}
					>
						<a href={link.href}> {link.label} </a>
					</li>
				);
			})}
		</ul>
	);
};

export default Links;
