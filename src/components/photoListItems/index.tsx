/** Components */
import { Card } from 'components/card';
import { Loading } from 'components/loading';
import { NoData } from 'components/noData';
/** Types */
import { PhotoListType, PhotoListTypes } from './types';
/** Styles */
import './styles/photoListItems.scss';

export const PhotoListItems = ({
	loading,
	photos,
	loadMore,
}: PhotoListTypes) => {
	if (loading) {
		return <Loading />;
	}
	if (photos.length === 0) {
		return <NoData label={'No data Found'} />;
	}

	return (
		<div className='list'>
			<div className={`list__items ${loading && 'loadContent'}`}>
				{photos.map(({ id, description, urls, user, likes }: PhotoListType) => {
					return (
						<Card
							id={id}
							key={id}
							title={user?.first_name ?? 'photo title'}
							description={description || 'description'}
							likes={likes}
							imgUrl={urls.regular}
							onClick={() => ({})}
						/>
					);
				})}
			</div>
			{photos.length > 0 && (
				<div className='list__loadMore' onClick={loadMore}>
					Load More
				</div>
			)}
		</div>
	);
};
