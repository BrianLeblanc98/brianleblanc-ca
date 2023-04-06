import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, User, setPersistence, browserLocalPersistence } from "firebase/auth";

export default function() {
  const { $auth, $provider } = useNuxtApp();

  const user = useState<User | null>('user', () => null);

  const isSignedIn = (): boolean => {
    if ($auth.currentUser) {
      return true;
    } else {
      return false;
    }
  }

  const fireBaseSignIn = () => {
    setPersistence($auth, browserLocalPersistence)
      .then(() => {
        return signInWithPopup($auth, $provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            // The signed-in user info.
            const resultUser = result.user;
            user.value = resultUser;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return {
    user,
    isSignedIn,
    fireBaseSignIn
  }
}
