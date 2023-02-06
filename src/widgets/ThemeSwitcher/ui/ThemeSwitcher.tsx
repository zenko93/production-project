import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'
import {useTheme} from "app/providers/ThemeProvider";
import ThemeIcon from 'shared/assets/icons/theme.svg'
import {AppButton} from "shared/ui/AppButton/AppButton";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
  const { toggleTheme, theme } = useTheme();

  return (
    <AppButton
      onClick={toggleTheme}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
    >
      <ThemeIcon className={cls[theme]} />
    </AppButton>
  );
};
