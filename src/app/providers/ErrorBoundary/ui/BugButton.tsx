import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AppButton } from '@/shared/ui/AppButton';

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <AppButton onClick={() => setError(true)}>{t('trow error')}</AppButton>
    );
};
