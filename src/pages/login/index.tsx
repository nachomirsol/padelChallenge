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
	const { credentials, handleChange, handleClick, error } = useLogin();

	return (
		<div className='login'>
			<img src={LOGO_PLAYTOMIC} alt='logo playtomic' />
			<div className='login__form'>
				<Input
					type='text'
					placeholder={'email'}
					width={'60%'}
					name={'email'}
					onChange={handleChange}
					value={credentials.email}
				/>
				<Input
					type='password'
					placeholder={'password'}
					width={'60%'}
					name={'password'}
					onChange={handleChange}
					value={credentials.password}
				/>
				<Button
					label='login'
					width={'60%'}
					height={'40px'}
					onClick={handleClick}
				/>
				{error && <span>Error in Login or password</span>}
			</div>
		</div>
	);
};
