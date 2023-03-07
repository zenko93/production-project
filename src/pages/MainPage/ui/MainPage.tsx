import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';

const MainPage = memo(function MainPage() {
    const { t } = useTranslation();

    return (
        <div>
            <BugButton />
            {t('Главная страница')}
        </div>
    );
});

export default MainPage;
