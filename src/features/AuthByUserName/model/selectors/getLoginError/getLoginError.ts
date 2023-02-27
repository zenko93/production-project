import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export const getLoginError = (state: StateSchema) => state?.loginForm?.error;
