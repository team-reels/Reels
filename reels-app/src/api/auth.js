import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    updateProfile,
    signInWithEmailAndPassword,
    updatePassword,
    // signInWithPopup,
    // GoogleAuthProvider,
    sendPasswordResetEmail,
    EmailAuthProvider,
    reauthenticateWithCredential,
    confirmPasswordReset
  } from 'firebase/auth';

const signup = async (email, username, password) => { //create
    const auth = getAuth(); 
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {username: username});
    console.log(`Signup successful for ${username}`);
}

const signin = async (email, password) => { //read
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password);
    console.log(`Signin successful for ${email}`);
}

const changepassword = async (email, oldPassword, newPassword) => { //update
    const auth = getAuth();

    let credential = EmailAuthProvider.credential(email, oldPassword);
    await reauthenticateWithCredential(auth.currentUser, credential);
    
    await updatePassword(auth.currentUser, newPassword);
    console.log(`Password changed for ${email}`);
    await logout();
}

const resetpassword = async (email) => { //update
    let auth = getAuth();
    await sendPasswordResetEmail(auth, email);
    console.log(`Password reset email sent to ${email}`);
}

const logout = async () => { //delete
    const auth = getAuth();
    console.log(`Logout successful for ${auth.currentUser.email}`)
    await signOut(auth);
}

const resetPassword = async (newPass, oob) => {
    await confirmPasswordReset(oob, newPass);
}

export { resetPassword, signup, signin, logout, changepassword, resetpassword }