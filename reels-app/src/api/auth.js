import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    updateProfile,
    signInWithEmailAndPassword,
    updatePassword,
    signInWithPopup,
    GoogleAuthProvider,
    sendPasswordResetEmail,
    EmailAuthProvider,
    reauthenticateWithCredential
  } from 'firebase/auth';

const signup = async (email, password, username) => { //create
    const auth = getAuth(); 
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {username: username});
}

const signin = async (email, password) => { //read
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password);
}

const changepassword = async (password) => { //update
    const auth = getAuth();

    let credential = EmailAuthProvider.credential(email, oldPassword);
    await reauthenticateWithCredential(auth.currentUser, credential);
    
    await updatePassword(auth.currentUser, newPassword);
    await logout();
}

const resetpassword = async (email) => { //update
    let auth = getAuth();
    await sendPasswordResetEmail(auth, email);
}

const logout = async () => { //delete
    const auth = getAuth();
    await signOut(auth);
}

export { signup, signin, logout, changepassword, resetpassword }