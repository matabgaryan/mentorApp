import React from "react";
import {GroupList} from "~screens/Groups/GroupList";
import {useAppSelector} from "~hooks/redux/useRedux";
import {RootState} from "~core/types";

export const StepThree = ({submit}) => {
    const { applications } = useAppSelector((state: RootState) => state.applications);

    return(
        <GroupList data={applications} submit={submit}/>
    )
}
