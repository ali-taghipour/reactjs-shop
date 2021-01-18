import React from 'react';
import SignIn from '../../Components/sign-in/sign-in.component';
import SignUp from '../../Components/sign-up/sign-up.component';
import './sign-in-and-sign-up.styles.scss';

const SignInSignUpPage = () => (
    <div>
        <h1> SIGN IN</h1>
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    </div>
)

export default SignInSignUpPage;