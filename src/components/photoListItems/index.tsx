/** Components */
import { Card } from 'components/card';
import { Loading } from 'components/loading';
import { NoData } from 'components/noData';
/** Styles */
import './styles/photoListItems.scss'

export const PhotoListItems = ({ loading, photos }) => {
	if (loading) {
		return <Loading />;
	}
	if (photos.length === 0) {
		return <NoData label={'No data Found'} />;
	}

	return (
		<>
			{photos.map(({ id, description, urls, user, likes }: PhotoListType) => {
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
			})}
		</>
	);
};
