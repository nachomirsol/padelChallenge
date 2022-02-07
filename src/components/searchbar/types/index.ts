export type SearchbarTypes = {
	width?: string;
	type: string;
	name: string;
	placeholder?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
