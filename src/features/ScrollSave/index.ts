import {
    scrollSaveReducer,
    scrollSaveActions,
} from './model/slices/scrollSaveSlice';

export type { ScrollSaveSchema } from './model/types/scrollSaveSchema';

export { getScrollSaveByPath } from './model/selectors/scrollSave';

export { scrollSaveReducer, scrollSaveActions };
