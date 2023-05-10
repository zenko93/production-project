export { UserRole } from './consts/consts';
export {
    isUserAdmin,
    isUserManager,
    getUserRoles,
} from './model/selectors/roleSelectors';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { userActions, userReducer } from './model/slice/userSlice';
export type { UserSchema, User } from './model/types/user';
