/** Components */
import { Button } from 'components/button';
import { Input } from 'components/input';
/** Hooks */
import { useLogin } from './hooks/useLogin';
/** Assets */
import LOGO_PLAYTOMIC from 'assets/logo/logo-playtomic.png';
/** Styles */
import './styles/login.scss';

export const Login: React.FC = () => {
	const {
		credentials: { email, password },
		handleChange,
		handleSubmit,
		error,
	} = useLogin();

	return (
		<div className='login' role='login'>
			<img src={LOGO_PLAYTOMIC} alt='logo playtomic' />
			<div className='login__form'>
				<Input
					type='text'
					placeholder={'email'}
					width={'60%'}
					name={'email'}
					onChange={handleChange}
					value={email}
				/>
				<Input
					type='password'
					placeholder={'password'}
					width={'60%'}
					name={'password'}
					onChange={handleChange}
					value={password}
				/>
				<Button
					label='login'
					width={'60%'}
					height={'40px'}
					onClick={handleSubmit}
					disabled={email === '' || password === ''}
				/>
				{error && <span>Error in Login or password</span>}
			</div>
		</div>
	);
};
