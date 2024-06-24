import { image } from '@config/constant/image';
import { LoginSchema } from '@config/schema/common/auth.schema';
import { loginPageLabel } from '@data/localization/landingPage/login';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLanguage } from '@hooks/useLang';
import Button from '@ui/common/atoms/Button';
import InputField from '@ui/common/atoms/InputField';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

interface FormData {
    email: string;
    password: string;
}

const Login = () => {
    const { language } = useLanguage();
    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
        trigger,
    } = useForm<FormData>({
        resolver: yupResolver(LoginSchema()),
    });

    useEffect(() => {
        trigger();
    }, [language, trigger]);

    const loginSubmit: SubmitHandler<FormData> = (data) => {
        console.log('data is being printed');
        console.log(data);
    };

    return (
        <div className='login'>
            <h2>{loginPageLabel?.welcomeTo[language]}</h2>
            <Link to='/'>
                <img src={image?.logo} alt='logo' />
            </Link>
            <h2>{loginPageLabel?.enterCredentials[language]}</h2>

            <form onSubmit={handleSubmit(loginSubmit)} noValidate>
                <InputField
                    placeholder='Email'
                    type='email'
                    name='email'
                    register={register}
                    error={errors?.email}
                />

                {errors.email && (
                    <span className='red-text'>{errors.email.message}</span>
                )}

                <InputField
                    placeholder='Password'
                    type='password'
                    name='password'
                    register={register}
                    error={errors?.password}
                />

                {errors.password && (
                    <span className='red-text'>{errors.password.message}</span>
                )}

                <Button
                    name={loginPageLabel?.login[language]}
                    type='submit'
                    disabled={isSubmitting}
                />
            </form>

            <p>
                <span className='site-color'>
                    {loginPageLabel?.forgotPassword[language]}
                </span>
            </p>
            <p>{loginPageLabel?.registerNow[language]}</p>
        </div>
    );
};

export default Login;
