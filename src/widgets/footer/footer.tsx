import { Link } from 'react-router-dom';
import Logo from '../../assets/icons/logo.svg';

import { FC } from 'react';
import style from './footer.module.scss';

const Footer: FC = function Footer() {
	return (
		<footer className={style.footer}>
			<div className={style.container}>
				<Link to="/">
					<img
						src={Logo}
						alt="Логотип"
						className={style.logo}
					/>
				</Link>
				<div>
					Главный офис: <address>г.Ульяновск, Гончарова 20.</address>
				</div>
				<a href="tel:+79374513876">+7 (937) 451-38-76</a>
			</div>
		</footer>
	);
};

export default Footer;
