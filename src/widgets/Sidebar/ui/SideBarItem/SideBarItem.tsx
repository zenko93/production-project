import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SideBarItem.module.scss';
import { SidebarItemType } from '../../model/items';

interface SideBarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SideBarItem = memo(function SideBarItem({ item, collapsed }: SideBarItemProps) {
    const { t } = useTranslation();

    return (
        <AppLink
            theme={AppLinkTheme.INVERTED}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
});
