import React from 'react';
import FormInput from '../../Components/form-input/form-input.component'
import CustomButtom from '../../Components/custom-button/custom-button.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            alert(error);
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' label='email' handleChange={this.handleChange} value={this.state.email} required />

                    <FormInput name='password' type='password' label='password' handleChange={this.handleChange} value={this.state.password} required />

                    <div className='buttons'>
                        <CustomButtom type='submit'>Sign in</CustomButtom>
                        <CustomButtom isGoogleSignIn onClick={signInWithGoogle}>Sign in with Google</CustomButtom>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;