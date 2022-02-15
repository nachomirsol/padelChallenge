export type PhotoState = {
	loading: boolean;
	error?: boolean;
	photos: any[];
};

export type PhotoActions = {
	type: string;
	payload: any[];
};

export type PhotoActionsError = {
	type: string;
	payload: string;
};

type UserPhoto = {
	first_name: string;
};
type UrlPhoto = {
	regular: string;
};
export type Photo = {
	id: string;
	likes: number;
	user: UserPhoto;
	description: string | null;
	urls: UrlPhoto;
};
