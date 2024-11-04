import { FC } from 'react';
import { INoSearch } from './INoSearch';
import style from './noSearch.module.scss';

const NoSearch: FC<INoSearch> = function NoSearch({ text, ...props }) {
	return (
		<section className={style.empty}>
			<div className={style.wrapper}>
				<h2>
					<span>{text}</span>
				</h2>
				{props.children}
			</div>
		</section>
	);
};

export default NoSearch;
