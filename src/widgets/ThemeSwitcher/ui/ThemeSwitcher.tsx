import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import ThemeIcon from 'shared/assets/icons/theme.svg';
import { AppButton, ButtonTheme } from 'shared/ui/AppButton/AppButton';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { toggleTheme, theme } = useTheme();

    return (
        <AppButton
            onClick={toggleTheme}
            theme={ButtonTheme.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
        >
            <ThemeIcon className={cls[theme]} />
        </AppButton>
    );
};
