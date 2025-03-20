import css from './AuthForm.module.scss'
import {Dispatch, FC, SetStateAction} from "react";

interface Props {
    setSignUp: Dispatch<SetStateAction<boolean>>;
    actionUrl: string;
    subtitle: string;
    title: string;
    text: string;
    togglerText: string;
    submitButtonText: string;
    privacyText: string;
}

export const AuthForm: FC<Props> = (props) => {
    const {setSignUp, actionUrl, subtitle, title, text, togglerText, submitButtonText, privacyText} = props;

    const toggleForm = function () {
        setSignUp((prevState) => !prevState);
    }

    return (
        <form action={actionUrl} method="POST" className={css.AuthForm}>
            <h3 className={css.AuthForm__subtitle}>{subtitle}</h3>

            <h1 className={css.AuthForm__title}>{title}</h1>

            <div>
                <span
                    className={css.AuthForm__text}>{text}</span>
                <button type='button' className={css.AuthForm__toggler}
                        onClick={toggleForm}>{togglerText}</button>
            </div>

            <div className={css.AuthForm__fields}>
                <div className={css.AuthForm__field}>
                    <input type="email" name="email" placeholder="" autoComplete={'email'} required/>
                    <label htmlFor='email'>Email</label>
                </div>

                <div className={css.AuthForm__field}>
                    <input type="password" name="password" placeholder="" autoComplete={'password'} required/>
                    <label htmlFor='password'>Password</label>
                </div>
            </div>

            <button type="submit" className={css.AuthForm__btn}>{submitButtonText}</button>

            <span
                className={css.AuthForm__text}>{privacyText}
            </span>
        </form>
    )
}