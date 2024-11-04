import { useEffect } from 'react';
import {
	setRestoreFromPrise,
	setRestoreUpPrise,
} from '../../../features/slice/paramsSortSlice/paramsSortSlice';
import {
	useAppDispatch,
	useAppSelector,
} from '../../hooks/ReduxHooks/reduxHooks';
import style from './inputRange.module.scss';

const InputRange = () => {
	const dispatch = useAppDispatch();

	const { fromPrise, upPrise, maxPrise } = useAppSelector(state => ({
		fromPrise: state.paramsSort.fromPrise,
		upPrise: state.paramsSort.upPrise,
		maxPrise: state.product.maxPrise,
	}));

	useEffect(() => {
		dispatch(setRestoreUpPrise(maxPrise));
	}, [dispatch, maxPrise]);

	return (
		<div className={style.inputRange}>
			<input
				type="number"
				placeholder="от"
				value={fromPrise}
				onChange={event => {
					dispatch(setRestoreFromPrise(+event.target.value));
					if (+event.target.value > upPrise) {
						dispatch(setRestoreUpPrise(+event.target.value));
					}
				}}
			/>
			<input
				type="number"
				placeholder="до"
				value={upPrise}
				onChange={event => {
					dispatch(setRestoreUpPrise(+event.target.value));
				}}
			/>
		</div>
	);
};

export default InputRange;
