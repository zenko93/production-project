import {
    ButtonHTMLAttributes, FC, memo, ReactNode,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './AppButton.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
    fullWidth?: boolean;
}

export const AppButton = memo(function AppButton(props: AppButtonProps) {
    const {
        className = '',
        children,
        theme = ButtonTheme.OUTLINE,
        square,
        disabled,
        fullWidth,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
    };

    const additional: string[] = [className, cls[theme], cls[size]];

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, additional)}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
