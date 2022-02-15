import { firebaseApp } from 'lib/firebase/firebase';
import { getAuth, signOut, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth(firebaseApp);

export const getUserDB = () => {
	const user = auth.currentUser;

	if (user) {
		return user.email;
	} else {
		return null;
	}
};

export const logInWithEmailAndPassword = async (
	email: string,
	password: string
) => {
	const authData = await signInWithEmailAndPassword(auth, email, password);

	return {
		access_token: authData?.user?.accessToken,
		email: authData?.user?.email,
	};
};

export const logout = async () => {
	try {
		await signOut(auth);
	} catch (err) {
		console.error(err);
	}
};
