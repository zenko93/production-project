import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { NotificationList } from 'entities/Notification';
import { Popover } from 'shared/ui/Popups';
import { AppButton, ButtonTheme } from 'shared/ui/AppButton/AppButton';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    return (
        <Popover
            className={classNames(cls.NotificationButton, {}, [className])}
            direction="bottom left"
            trigger={(
                <AppButton theme={ButtonTheme.CLEAR}>
                    <Icon Svg={NotificationIcon} inverted />
                </AppButton>
            )}
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    );
});
