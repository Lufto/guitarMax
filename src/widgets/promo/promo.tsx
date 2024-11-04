import { FC } from 'react';
import { Button } from '../../entities/ui/button/button';
import style from './promo.module.scss';

const Promo: FC = function Promo() {
	return (
		<section className={style.section}>
			<div className={style.container}>
				<h1>
					Гитары от известных брендов
					<br />с доставкой по России и СНГ
				</h1>
				<p>
					Мы продаем гитары брендов Fender, Gibson, Yamaha,
					<br />
					Shure, Jackson и многие другие по низким ценам
				</p>
				<a href="#products">
					<Button mod={'brawn'}>Перейти к покупкам</Button>
				</a>
			</div>
		</section>
	);
};

export default Promo;
