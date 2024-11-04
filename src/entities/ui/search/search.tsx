import { FC, useState } from 'react';
import deleteLight from '../../../assets/icons/close.svg';
import searchLight from '../../../assets/icons/icon_light.svg';

import { setSearch } from '../../../features/slice/paramsSortSlice/paramsSortSlice';
import {
	useAppDispatch,
	useAppSelector,
} from '../../hooks/ReduxHooks/reduxHooks';
import style from './search.module.scss';

const Search: FC = function Search() {
	const dispatch = useAppDispatch();

	const { search } = useAppSelector(state => ({
		search: state.paramsSort.search,
	}));

	const [value, setValue] = useState(search);
	const [focus, setFocus] = useState(false);

	return (
		<div className={style.search__module}>
			<div className={style.wrapper}>
				<button
					className={style.search}
					type="button"
					onSubmit={e => e.preventDefault()}
				>
					<img
						src={searchLight}
						alt="Кнопка поиска"
					/>
				</button>
				<input
					type="text"
					name="search"
					placeholder="Painting title"
					value={value}
					onChange={e => {
						setValue(e.target.value);
						dispatch(setSearch(e.target.value));
					}}
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
					className={style.search_area}
				/>
				{value && !focus && (
					<button
						className={style.close}
						type="button"
						onClick={() => {
							setValue('');
							dispatch(setSearch(''));
						}}
					>
						<img
							src={deleteLight}
							alt="Кнопка удаления текста"
						/>
					</button>
				)}
			</div>
		</div>
	);
};

export default Search;
