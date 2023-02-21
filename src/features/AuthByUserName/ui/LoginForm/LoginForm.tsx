import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import { AppInput } from 'shared/ui/AppInput/AppInput';
import { useEffect, useState } from 'react';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
    isOpen?: boolean;
}

export const LoginForm = ({ className, isOpen }: LoginFormProps) => {
    const { t } = useTranslation();
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsFocused(true);
        } else {
            setIsFocused(false);
        }
    }, [isOpen]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <AppInput
                type="text"
                placeholder={t('Введите username')}
                className={cls.input}
                autoFocus={isFocused}
            />
            <AppInput
                type="text"
                placeholder={t('Введите password')}
                className={cls.input}
            />
            <AppButton className={cls.loginBtn}>
                {t('Войти')}
            </AppButton>
        </div>
    );
};
