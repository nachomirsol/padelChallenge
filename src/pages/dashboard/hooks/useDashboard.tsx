import { useState, useEffect } from 'react';
/** Libraries */
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
/** Actions */
import {
	filterPhotos,
	getListPhotoImages,
	updateLike,
} from 'store/photos/actions';

export const useDashboard = () => {
	const [query, setQuery] = useState('');

	const { loading, photos } = useSelector((state) => state?.photos);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getListPhotoImages());
	}, []);

	const updateLikes = (id: string) => {
		dispatch(updateLike(id));
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};

	const handleSearchClick = (querySearch: string) => {
		if (query === '') {
			dispatch(getListPhotoImages());
		} else {
			dispatch(filterPhotos(querySearch));
		}
	};

	return {
		query,
		loading,
		photos,
		updateLikes,
		handleChange,
		handleSearchClick,
	};
};
