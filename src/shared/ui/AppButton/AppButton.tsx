import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './AppButton.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
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
}

export const AppButton:FC<AppButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls.square]: square,
    };

    const additional: string[] = [className, cls[theme], cls[size]];

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, additional)}
            {...otherProps}
        >
            {children}
        </button>
    );
};
