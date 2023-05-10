import { render, screen } from '@testing-library/react';
import { AppButton, ButtonTheme } from './AppButton';

describe('AppButton', () => {
    test('component is rendered', () => {
        render(<AppButton>TEST</AppButton>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('with clear theme', () => {
        render(<AppButton theme={ButtonTheme.CLEAR}>TEST</AppButton>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
