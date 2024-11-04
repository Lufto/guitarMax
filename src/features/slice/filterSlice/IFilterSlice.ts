export type TItemFilter = {
	id: number;
	name: string;
};

export interface IFilterSlice {
	instrument: TItemFilter[];
	accessory: TItemFilter[];
	sort: TItemFilter[];
}
