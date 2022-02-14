export type PhotoListTypes = {
	loading: boolean;
	photos: any[];
	loadMore: () => void;
};

export type PhotoListType = {
	id: string;
	description: string;
	urls: any;
	user: any;
	likes: number;
};