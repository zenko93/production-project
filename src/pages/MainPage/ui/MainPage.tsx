import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from '@/app/providers/ErrorBoundary';
import { Page } from '@/widgets/Page/Page';
import { RatingCard } from '@/entities/Rating';

const MainPage = memo(function MainPage() {
    const { t } = useTranslation();

    return (
        <Page>
            <BugButton />
            {t('Главная страница')}
            <RatingCard />
        </Page>
    );
});

export default MainPage;
