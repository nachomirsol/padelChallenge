import { firebaseApp } from 'lib/firebase/firebase';
import { getAuth, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { setLocalStorage } from 'utils/localStorage';

const auth = getAuth(firebaseApp);

export const logInWithEmailAndPassword = async (
	email: string,
	password: string
) => {
	try {
		const user = await signInWithEmailAndPassword(auth, email, password);
		const token = user?.user?.accessToken;
		setLocalStorage(token);
		return token;
	} catch (err) {
		console.error(err);
	}
};
