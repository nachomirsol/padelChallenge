export type CardType = {
	id: string;
	title: string;
	description: string;
	likes: number;
	imgUrl: string;
	onClick: (id: string) => void;
};
