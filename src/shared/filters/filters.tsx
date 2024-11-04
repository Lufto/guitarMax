import { FC, useEffect, useState } from 'react';
import { Button } from '../../entities/ui/button/button';
import Checkbox from '../../entities/ui/checkbox/checkbox';
import InputRange from '../../entities/ui/inputRange/inputRange';

import {
	useAppDispatch,
	useAppSelector,
} from '../../entities/hooks/ReduxHooks/reduxHooks';

import CheckboxDropdown from '../../entities/ui/CheckboxDropdown/checkboxDropdown';
import SortDropdown from '../../entities/ui/sortDropdown/sortDropdown';
import {
	fetchGETAccessory,
	fetchGETInstrument,
	fetchGETSort,
} from '../../features/slice/filterSlice/filterAsyncThunk';
import {
	setClearFilter,
	setRestoreUpPrise,
} from '../../features/slice/paramsSortSlice/paramsSortSlice';
import style from './filters.module.scss';

import clsx from 'clsx';
import filterIcon from '../../assets/icons/filter_icon.svg';
import Search from '../../entities/ui/search/search';

const Filters: FC = function Filters() {
	const [active, setActive] = useState(false);

	const dispatch = useAppDispatch();

	const { instrument, accessory, sort, maxPrise } = useAppSelector(state => ({
		instrument: state.filter.instrument,
		accessory: state.filter.accessory,
		sort: state.filter.sort,
		maxPrise: state.product.maxPrise,
	}));

	useEffect(() => {
		dispatch(fetchGETInstrument());
		dispatch(fetchGETAccessory());
		dispatch(fetchGETSort());
	}, [dispatch]);

	return (
		<aside className={style.filters}>
			<div className={style.filters__tittle}>
				<img
					role={'link'}
					tabIndex={0}
					src={filterIcon}
					alt="Иконка фильтров"
					onKeyDown={e => e.key === 'Enter' && setActive(!active)}
					onClick={() => {
						setActive(!active);
					}}
				/>
				<h3>
					Подбор
					<br /> по параметрам
				</h3>
			</div>

			<div className={style.filterWrap}>
				<ul className={clsx(style.listFilter, active ? style.active : '')}>
					<SortDropdown data={sort} />
					<Search />
					<InputRange />
					<CheckboxDropdown
						data={instrument}
						name={'Инструменты'}
					/>
					<CheckboxDropdown
						data={accessory}
						name={'Аксессуары'}
					/>
					<Checkbox
						data={{ id: Math.random(), name: 'Есть в наличии' }}
						filterKey={'absence'}
						key={-2}
					/>
					<Checkbox
						data={{ id: Math.random(), name: 'Бестселлер' }}
						filterKey={'bestseller'}
						key={-1}
					/>
				</ul>
				<Button
					className={clsx(style.btn, active ? style.active : '')}
					mod={'secondaryGray'}
					onClick={() => {
						dispatch(setClearFilter());
						dispatch(setRestoreUpPrise(maxPrise));
					}}
				>
					Сбросить
				</Button>
			</div>
		</aside>
	);
};

export default Filters;
