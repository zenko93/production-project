import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { AppButton } from '@/shared/ui/AppButton/AppButton';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">{ counterValue }</h1>
            <AppButton
                data-testid="increment-btn"
                onClick={increment}
            >
                {t('increment')}
            </AppButton>
            <AppButton
                data-testid="decrement-btn"
                onClick={decrement}
            >
                {t('decrement')}
            </AppButton>
        </div>
    );
};
