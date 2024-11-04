import { FC } from 'react';

import {
	setAddFilter,
	setDeleteFilter,
	setToggle,
} from '../../../features/slice/paramsSortSlice/paramsSortSlice';
import {
	useAppDispatch,
	useAppSelector,
} from '../../hooks/ReduxHooks/reduxHooks';
import style from './checkbox.module.scss';
import { ICheckbox } from './ICheckbox';

const Checkbox: FC<ICheckbox> = function Checkbox({ data, filterKey }) {
	const dispatch = useAppDispatch();

	const isChecked = useAppSelector(state =>
		filterKey
			? state.paramsSort[filterKey]
			: state.paramsSort.typesFilter.includes(data.name)
	);

	const handleChange = () => {
		if (filterKey) {
			dispatch(setToggle(filterKey));
		} else {
			if (isChecked) {
				dispatch(setDeleteFilter(data.name));
			} else {
				dispatch(setAddFilter(data.name));
			}
		}
	};

	return (
		<li className={style.checkbox}>
			<label>
				<input
					type="checkbox"
					value={data.name}
					checked={isChecked}
					onChange={handleChange}
				/>
				{data.name}
			</label>
		</li>
	);
};

export default Checkbox;
