import { render, screen } from '@testing-library/react';
import { AppButton, ThemeButton } from 'shared/ui/AppButton/AppButton';

describe('AppButton', () => {
    test('component is rendered', () => {
        render(<AppButton>TEST</AppButton>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('with clear theme', () => {
        render(<AppButton theme={ThemeButton.CLEAR}>TEST</AppButton>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
