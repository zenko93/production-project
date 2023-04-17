import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useCallback, useState } from 'react';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { NotificationList } from 'entities/Notification';
import { Popover } from 'shared/ui/Popups';
import { AppButton, ButtonTheme } from 'shared/ui/AppButton/AppButton';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { isMobileDevice } from 'shared/lib/detectDevice/detectDevice';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    const isMobile = isMobileDevice();
    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <AppButton onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
            <Icon Svg={NotificationIcon} inverted />
        </AppButton>
    );

    if (isMobile) {
        return (
            <>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList />
                </Drawer>
            </>
        );
    }

    return (
        <Popover
            className={classNames(cls.NotificationButton, {}, [className])}
            direction="bottom left"
            trigger={trigger}
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    );
});
