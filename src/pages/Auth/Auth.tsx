import css from './Auth.module.scss';
import {useState} from "react";
import classNames from 'classnames';
import {AuthForm} from "../../components/AuthForm/AuthForm";

export const Auth = () => {
    const [isSignUp, setSignUp] = useState(false);

    const formsConfig = [
        {
            actionUrl: '/sign-in',
            subtitle: 'START SESSION',
            title: 'Sign In to EMartians.',
            text: "Don't have an account?",
            togglerText: 'Sign Up.',
            privacyText: 'By clicking the Log In you agree to the Privacy Policy.',
            submitButtonText: 'Log In'
        },
        {
            actionUrl: '/sign-up',
            subtitle: 'REGISTER NOW',
            title: 'Sign Up.',
            text: "Already have an account?",
            togglerText: 'Sign In.',
            privacyText: 'By clicking the Sign Up you agree to the Privacy Policy.',
            submitButtonText: 'Sign Up'
        }
    ];

    return (
        <div className={css.Auth}>
            <div className={classNames(css.Auth__holder, {[css.Auth__holder_left]: isSignUp})}>
            </div>
            <div className={classNames(css.Auth__blur, {[css.Auth__blur_left]: isSignUp})}></div>

            {formsConfig.map((config, i) =>
                (<AuthForm setSignUp={setSignUp} {...config}/>)
            )}
        </div>
    )
}