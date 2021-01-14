import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDNcnwHnw_cdgb_1TrcVM-Jl85pfFlc3Cs",
    authDomain: "store-8729c.firebaseapp.com",
    databaseURL: "https://store-8729c.firebaseio.com",
    projectId: "store-8729c",
    storageBucket: "",
    messagingSenderId: "674288151674",
    appId: "1:674288151674:web:356ba77fe966da4c"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users /${userAuth.uid} `);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { email, displayName } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
