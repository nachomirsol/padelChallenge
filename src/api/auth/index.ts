import { firebaseApp } from 'lib/firebase/firebase';
import { getAuth, signOut, signInWithEmailAndPassword } from 'firebase/auth';


const auth = getAuth(firebaseApp);

export const logInWithEmailAndPassword = async (
	email: string,
	password: string
) => {
	try {
		const user = await signInWithEmailAndPassword(auth, email, password);
		return user;
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};
