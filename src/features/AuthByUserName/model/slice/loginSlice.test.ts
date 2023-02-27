import { DeepPartial } from '@reduxjs/toolkit';
import { loginActions, loginReducer } from './loginSlice';
import { LoginSchema } from '../types/loginSchema';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const mockedState = { username: '123' };
        const state: DeepPartial<LoginSchema> = mockedState;

        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('123'),
        )).toBe(mockedState);
    });

    test('test set password', () => {
        const mockedState = { password: '123' };
        const state: DeepPartial<LoginSchema> = mockedState;

        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('123'),
        )).toBe(mockedState);
    });
});
