export { ProfileCard } from './ui/ProfileCard/ProfileCard';

export { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
export { updateProfileData } from './model/services/updateProfileData/updateProfileData';
export type { ProfileSchema, Profile } from './model/types/profile';
export { profileActions, profileReducer } from './model/slice/profileSlice';
export { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';

export { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
export { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
export { getProfileReadonly } from 'entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly';
export { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm';
export {
    getProfileValidateErrors,
} from 'entities/Profile/model/selectors/getProfileValidateErrors/getProfileValidateErrors';
export { ValidateProfileError } from 'entities/Profile/model/types/profile';
