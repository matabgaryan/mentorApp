import {useSelector} from "react-redux";
import {RootState} from "~core/types";
import {logout} from "~store/slices/auth";
import {useAppDispatch} from "~hooks/redux/useRedux";
import {useNavigationHook} from "~hooks/navigation/useNavigationHook";
import {addEmployee, deleteEmployee} from "~store/slices/employees";
import {useState} from "react";

export const useAccount = () => {
    const { isAuthenticated, userInfo } = useSelector((state: RootState) => state.auth);
    const dispatch = useAppDispatch();
    const { resetNavigationState } = useNavigationHook();
    const [isShareAccount, setShareAccount] = useState(false)
    const handleLogout = () => {
        resetNavigationState()
        dispatch(logout());
        dispatch(deleteEmployee({id:userInfo?.id}))
    }

    const toggleShareAccount = (isShare) => {
        setShareAccount(isShare);
        if (isShare) dispatch(addEmployee(userInfo));
        else dispatch(deleteEmployee({id:userInfo?.id}))
    }

    return {
        isShareAccount,
        isAuthenticated,
        handleLogout,
        toggleShareAccount,
    }
}
