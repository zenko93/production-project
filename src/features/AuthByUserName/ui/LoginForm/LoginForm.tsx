import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton, ButtonTheme } from 'shared/ui/AppButton/AppButton';
import { AppInput } from 'shared/ui/AppInput/AppInput';
import {
    memo, useCallback, useEffect, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
    isOpen?: boolean;
}

export const LoginForm = memo(({ className, isOpen }: LoginFormProps) => {
    const { t } = useTranslation();
    const [isFocused, setIsFocused] = useState(false);
    const dispatch = useDispatch();
    const {
        username, password, isLoading, error,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    useEffect(() => {
        if (isOpen) {
            setIsFocused(true);
        } else {
            setIsFocused(false);
        }
    }, [isOpen]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text text={t('Вы ввели неправильный логин или пароль')} theme={TextTheme.ERROR} /> }
            <AppInput
                type="text"
                placeholder={t('Введите username')}
                className={cls.input}
                autoFocus={isFocused}
                onChange={onChangeUsername}
                value={username}
            />
            <AppInput
                type="text"
                placeholder={t('Введите password')}
                className={cls.input}
                onChange={onChangePassword}
                value={password}
            />
            <AppButton
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </AppButton>
        </div>
    );
});
