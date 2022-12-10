import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "~hooks/redux/useRedux";
import {RootState} from "~core/types";
import {STATUS} from "~core/enums";
import {Loader} from "~components/loader";
import {getEmployees} from "~store/slices/employees";
import {UsersList} from "~screens/Employees/components/UserList";
import SafeScreen from "~containers/SafeAreaView";

const Employees = () => {
    const dispatch = useAppDispatch();
    const { applications, status } = useAppSelector((state: RootState) => state.applications);
    const isLoading = status === STATUS.PENDING

    useEffect( () => {
        if (!applications.length) dispatch(getEmployees());
    }, [applications]);

    return (
        <SafeScreen>
            <Loader visible={isLoading} />
            <UsersList data={applications}/>
        </SafeScreen>
    );
};

export default Employees;
