import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { StarRating } from '@/shared/ui/StarRating';
import { Modal } from '@/shared/ui/Modal';
import { Drawer } from '@/shared/ui/Drawer';
import { AppInput } from '@/shared/ui/AppInput';
import { AppButton, ButtonSize, ButtonTheme } from '@/shared/ui/AppButton';
import { isMobileDevice } from '@/shared/lib/detectDevice/detectDevice';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        onAccept,
        feedbackTitle,
        hasFeedback,
        onCancel,
        rate = 0,
        title,
    } = props;
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');
    const isMobile = isMobileDevice();

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStarsCount);
        }
    }, [hasFeedback, onAccept]);

    const acceptHandle = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <AppInput
                value={feedback}
                onChange={setFeedback}
                placeholder={t('Ваш отзыв')}
            />
        </>
    );

    const mobileView = (
        <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
            <VStack gap="32">
                {modalContent}
                <AppButton fullWidth onClick={acceptHandle} size={ButtonSize.L}>
                    {t('Отправить')}
                </AppButton>
            </VStack>
        </Drawer>
    );

    const browserView = (
        <Modal isOpen={isModalOpen} lazy>
            <VStack max gap="32">
                {modalContent}
                <HStack max gap="16" justify="end">
                    <AppButton onClick={cancelHandle} theme={ButtonTheme.OUTLINE_RED}>
                        {t('Закрыть')}
                    </AppButton>
                    <AppButton onClick={acceptHandle}>
                        {t('Отправить')}
                    </AppButton>
                </HStack>
            </VStack>
        </Modal>
    );

    return (
        <Card max className={classNames('', {}, [className])}>
            <VStack align="center" gap="8">
                <Text title={starsCount ? t('Спасибо за оценку') : title} />
                <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
            </VStack>
            { isMobile ? mobileView : browserView }
        </Card>
    );
});
