export type PaginationType = {
	page: number;
	total_pages: number;
	total_results: number;
};

export enum SortType {
	DESC = 'desc',
	ASC = 'asc',
}
