import { TItemFilter } from '../../../features/slice/filterSlice/IFilterSlice';
import { IToggleFilterKey } from '../../../features/slice/paramsSortSlice/IParamsSortSlice';

export interface ICheckbox {
	data: TItemFilter;
	filterKey?: IToggleFilterKey;
}
