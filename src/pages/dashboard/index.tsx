/** Components */
import { Searchbar } from 'components/searchbar';
import { Button } from 'components/button';
import { PhotoListItems } from 'components/photoListItems';
/** Hooks */
import { usePhotos } from 'hooks/usePhotos';
/** Styles */
import './styles/dashboard.scss';

export const Dashboard: React.FC = () => {
	const {
		query,
		loading,
		photos,
		handleChange,
		handleSearchClick,
		loadMoreContent,
	} = usePhotos();

	return (
		<div className='dashboard' role='dashboard'>
			<div className='dashboard__filter'>
				<Searchbar
					type='search'
					placeholder={'Search...'}
					width={'30%'}
					height={'50px'}
					name={'search'}
					onChange={handleChange}
					value={query}
				/>
				<Button
					width={'100px'}
					label={'Filter'}
					height={'auto'}
					onClick={() => handleSearchClick(query)}
				/>
			</div>
			<div className='dashboard__content'>
				<PhotoListItems
					loading={loading}
					photos={photos}
					loadMore={loadMoreContent}
				/>
			</div>
		</div>
	);
};
