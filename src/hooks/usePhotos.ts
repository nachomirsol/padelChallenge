import { useState, useEffect } from 'react';
/** Libraries */
import { useSelector, useDispatch } from 'react-redux';
/** Actions */
import {
	filterPhotos,
	getListPhotoImages,
	loadMoreData,
	updateLike,
} from 'store/photos/actions';
/** Types */
import { RootState } from 'store/rootReducer';

export const usePhotos = () => {
	const [query, setQuery] = useState('');

	const [page, setPage] = useState(1);

	const { loading, photos } = useSelector((state:RootState) => state?.photos);

	const dispatch = useDispatch();

	useEffect(() => {
		if (page === 1) {
			dispatch(getListPhotoImages(page));
		} else {
			dispatch(loadMoreData(page));
		}
	}, [page]);

	const updateLikes = (id: string) => {
		dispatch(updateLike(id));
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};

	const handleSearchClick = (querySearch: string) => {
		if (query === '') {
			dispatch(getListPhotoImages(1));
		} else {
			dispatch(filterPhotos(querySearch));
		}
	};

	const loadMoreContent = () => {
		setPage((prevPage) => prevPage + 1);
	};

	return {
		query,
		loading,
		photos,
		updateLikes,
		handleChange,
		handleSearchClick,
		loadMoreContent,
		getListPhotoImages,
	};
};
