import {RegisterForm} from "~core/api/interfaces";
import {AsyncStorageManager} from "~core/services/AsyncStorageManager";
import {StorageEnums} from "~core/enums";
import {TIMER_SHORT} from "~constants/appCosntants";
import {IUser} from "~store/slices/interface";

export const register: (formData: RegisterForm) => Promise<RegisterForm> = (formData) => {
    return  new Promise(async (resolve) => {
        await AsyncStorageManager.setValueByKey(JSON.stringify(formData), StorageEnums.AuthUser)
        setTimeout(() => resolve(formData), TIMER_SHORT);
    });
}

export const signIn: () => Promise<IUser> = () => {
    return  new Promise(async (resolve, reject) => {
        const userData = await AsyncStorageManager.getValueByKey(StorageEnums.AuthUser)
        if (userData){
            setTimeout(() => {
                resolve(JSON.parse(userData))
            }, TIMER_SHORT);
        } else reject()
    });
}
