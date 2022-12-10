import {useEffect} from "react";
import SplashScreen from 'react-native-splash-screen'
import {useAppSelector, useAppDispatch} from "~hooks/redux/useRedux";
import {RootState} from "~core/types";
import {getMentors} from "~store/slices/mentors";
import {AsyncStorageManager} from "~core/services/AsyncStorageManager";
import {StorageEnums} from "~core/enums";
import {setUser} from "~store/slices/auth";
import {request, PERMISSIONS} from 'react-native-permissions';

export const useInitializeAppHook = () => {
    const dispatch = useAppDispatch();
    const { mentors } = useAppSelector((state: RootState) => state.mentors);

    const checkLocalStorage = async () => {
       const data = await AsyncStorageManager.getValueByKey(StorageEnums.AuthUser);
       if (data){
           dispatch(setUser(JSON.parse(data)));
       }
    }

    useEffect( () => {
        if (!mentors.length) dispatch(getMentors());
    }, [mentors]);

    useEffect(() => {
        SplashScreen.hide();
        (async () =>  {
            await request(PERMISSIONS.IOS.CAMERA)
            await checkLocalStorage()
        })()
    }, [])

    return;
}
