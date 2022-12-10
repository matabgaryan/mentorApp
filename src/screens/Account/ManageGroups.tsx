import React from "react";
import {GroupList} from "~screens/Groups/GroupList";
import {useAppDispatch, useAppSelector} from "~hooks/redux/useRedux";
import {RootState} from "~core/types";
import {View} from "react-native";
import {setUser} from "~store/slices/auth";
import {AsyncStorageManager} from "~core/services/AsyncStorageManager";
import {StorageEnums} from "~core/enums";
import {useNavigationHook} from "~hooks/navigation/useNavigationHook";

export const ManageGroups = () => {
    const { navigateBack } = useNavigationHook();
    const dispatch = useAppDispatch();
    const { applications } = useAppSelector((state: RootState) => state.applications);
    const { userInfo } = useAppSelector((state: RootState) => state.auth);

    const handleSubmit = (groups) => {
        const useData = {...userInfo, groups: [...groups]};
        dispatch(setUser(useData));
        AsyncStorageManager.setValueByKey(JSON.stringify(useData), StorageEnums.AuthUser);
        navigateBack();
    }

    return(
        <View>
            <GroupList
                btnText="Update"
                defaultValues={userInfo?.groups}
                data={applications.filter((item) => item.id !== userInfo?.id)}
                submit={handleSubmit}
            />
        </View>
    )
}
