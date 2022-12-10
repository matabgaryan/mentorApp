import AsyncStorage from '@react-native-async-storage/async-storage';
import { IAsyncStorageManager } from './interfaces';

export const AsyncStorageManager: IAsyncStorageManager = {

    async setValueByKey(value, key) {
        await AsyncStorage.setItem(key, value);
    },

    async removeValueByKey(key){
        await AsyncStorage.removeItem(key)
    },

    async getValueByKey(key) {
        try {
            const token = await AsyncStorage.getItem(key);
            if (token !== null && token !== 'false') {
                return token;
            }
            return undefined;
        }catch (e) {
            return null;
        }
    },

    async getAllKeys(){
        try {
            return await AsyncStorage.getAllKeys();
        }catch (e) {
            return null
        }
    },

    async removeAllTokens() {
        await AsyncStorage.clear();
    },

};
