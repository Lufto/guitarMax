import { Link } from 'react-router-dom';
import Cart from '../../assets/icons/cart.svg';
import Logo from '../../assets/icons/logo.svg';

import clsx from 'clsx';
import { FC } from 'react';
import useCart from '../../entities/hooks/useCart/useCart';
import style from './header.module.scss';

const Header: FC = function Header() {
	const { cartItem } = useCart();

	return (
		<header className={style.header}>
			<div className={style.container}>
				<Link to="/">
					<img
						src={Logo}
						alt=""
						className={style.logo}
					/>
				</Link>
				<nav>
					<Link
						to={'/cart'}
						className={style.link}
					>
						Корзина
						<img
							src={Cart}
							alt="cart"
						/>
						<div
							className={clsx(
								style.current,
								cartItem.length === 0 && style.empty
							)}
						>
							{cartItem.length}
						</div>
					</Link>
				</nav>
			</div>

			<div className={style.container}>
				<hr className={style.line} />
			</div>
		</header>
	);
};

export default Header;
