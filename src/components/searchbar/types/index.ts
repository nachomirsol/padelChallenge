export type SearchbarTypes = {
	width?: string;
	height?: string;
	type: string;
	name: string;
	placeholder?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
