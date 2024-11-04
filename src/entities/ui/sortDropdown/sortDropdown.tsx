import { FC, useState } from 'react';

import clsx from 'clsx';
import { setRestoreSort } from '../../../features/slice/paramsSortSlice/paramsSortSlice';
import {
	useAppDispatch,
	useAppSelector,
} from '../../hooks/ReduxHooks/reduxHooks';
import { ISortDropdown } from './ISortDropdown';
import style from './sortDropdown.module.scss';

const SortDropdown: FC<ISortDropdown> = function Select({ data }) {
	const [active, setActive] = useState(false);

	const dispatch = useAppDispatch();
	const sort = useAppSelector(state => state.paramsSort.sort);

	return (
		<li>
			<div className={clsx(style.sort, active ? style.active : '')}>
				<div
					className={style.NameSort}
					onClick={() => setActive(!active)}
				>
					Сортировать по:
				</div>
				<ul>
					{data.map(data => {
						return (
							<li
								className={clsx(sort === data.name ? style.activeLi : '')}
								onClick={() => dispatch(setRestoreSort(data.name))}
								key={data.id}
							>
								{data.name}
							</li>
						);
					})}
				</ul>
			</div>
		</li>
	);
};

export default SortDropdown;
