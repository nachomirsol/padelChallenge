import { useEffect } from 'react';
/** Libraries */
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
/** Components */
import { Searchbar } from 'components/searchbar';
import { Button } from 'components/button';
import { Card } from 'components/card';
import { Loading } from 'components/loading';
/** Actions */
import { getListPhotoImages } from 'store/photos/actions';
/** Styles */
import './styles/dashboard.scss';

export const Dashboard: React.FC = () => {
	const { loading, photos } = useSelector((state) => state?.photos);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getListPhotoImages());
	}, []);
	return (
		<div className='dashboard'>
			<div className='dashboard__filter'>
				<Searchbar
					type='password'
					placeholder={'Search...'}
					width={'30%'}
					name={'password'}
					onChange={() => ({})}
					value={''}
				/>
				<Button
					width={'100px'}
					label={'Filter'}
					height={'auto'}
					onClick={() => ({})}
				/>
			</div>

			<div className={`dashboard__content ${loading && 'loadContent'}`}>
				{loading ? (
					<Loading />
				) : (
					photos.map(({ id, description, urls, user, likes }: any) => {
						return (
							<Card
								key={id}
								title={user?.first_name ?? 'photo title'}
								description={description || 'description'}
								likes={likes}
								imgUrl={urls.regular}
							/>
						);
					})
				)}
			</div>
		</div>
	);
};
