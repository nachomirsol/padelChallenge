/** Components */
import { Searchbar } from 'components/searchbar';
import { Button } from 'components/button';
import { Card } from 'components/card';
import { Loading } from 'components/loading';
import { NoData } from 'components/noData';
/** Hooks */
import { useDashboard } from './hooks/useDashboard';
/** Styles */
import './styles/dashboard.scss';

export const Dashboard: React.FC = () => {
	const {
		query,
		loading,
		photos,
		updateLikes,
		handleChange,
		handleSearchClick,
		loadMoreContent,
	} = useDashboard();

	const renderPhotoList = () => {
		if (loading) {
			return <Loading />;
		}
		if (photos.length === 0) {
			return <NoData label={'No data Found'} />;
		}

		return photos.map(({ id, description, urls, user, likes }: any) => {
			return (
				<Card
					id={id}
					key={id}
					title={user?.first_name ?? 'photo title'}
					description={description || 'description'}
					likes={likes}
					imgUrl={urls.regular}
					onClick={() => updateLikes(id)}
				/>
			);
		});
	};

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

			<div className={`dashboard__content ${loading && 'loadContent'}`}>
				{renderPhotoList()}
			</div>
			{photos.length > 0 && (
				<div className='dashboard__loadMore' onClick={loadMoreContent}>
					Load More
				</div>
			)}
		</div>
	);
};
