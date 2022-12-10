import { useNavigation, StackActions, CommonActions } from '@react-navigation/native';

export const useNavigationHook = () => {
    const { dispatch } = useNavigation();

    const navigate = (routeStack, routeParams?) => {
        const pushAction = StackActions.push(routeStack, routeParams ? {...routeParams} : {});
        dispatch(pushAction);
    }

    const navigateBack = () => {
        const popAction = StackActions.pop(1);
        dispatch(popAction);
    }

    const resetNavigationState = () => {
      const clearAction = CommonActions.reset({index: 0, routes: [{name: 'Account'}]});
      dispatch(clearAction);
    }

    return {
        navigate,
        navigateBack,
        resetNavigationState
    }
}
