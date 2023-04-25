import type {
    StateSchema, ThunkExtraArg, ThunkConfig, ReduxStoreWithManager, StateSchemaKey,
} from './config/StateSchema';
import { createReduxStore, AppDispatch } from './config/store';
import { StoreProvider } from './ui/StoreProvider';

export {
    createReduxStore,
    StoreProvider,
};

export type {
    StateSchema,
    AppDispatch,
    ThunkExtraArg,
    ThunkConfig,
    ReduxStoreWithManager,
    StateSchemaKey,
};
