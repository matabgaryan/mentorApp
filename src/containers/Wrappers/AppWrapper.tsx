import MainNavigator from "~navigation/MainNavigator";
import React from "react";
import {useInitializeAppHook} from "~hooks/app/useInitializeApp";

export const AppWrapper = () => {
    useInitializeAppHook()
    return(
        <MainNavigator/>
    )
}
