import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ThemeIcon from '@/shared/assets/icons/theme.svg';
import { AppButton, ButtonTheme } from '@/shared/ui/AppButton/AppButton';
import cls from './ThemeSwitcher.module.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(function ThemeSwitcher({ className }: ThemeSwitcherProps) {
    const { toggleTheme } = useTheme();

    return (
        <AppButton
            onClick={toggleTheme}
            theme={ButtonTheme.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
        >
            <ThemeIcon className={cls.icon} />
        </AppButton>
    );
});
