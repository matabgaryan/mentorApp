import {ActionReducerMapBuilder, createAsyncThunk, createSlice, SliceCaseReducers} from "@reduxjs/toolkit";
import {STATUS} from "~core/enums";
import { getMentorsList } from "~core/api/employees";
import {IEmployee, IMentorsState} from "./interface";
import {NoInfer} from "@reduxjs/toolkit/dist/tsHelpers";

const initialState: IMentorsState = {
    status: "",
    mentors: [],
};

const mentorsSlice = createSlice<IMentorsState, SliceCaseReducers<IMentorsState>>({
    name: "mentorsSlice",
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<NoInfer<IMentorsState>>) => {
        builder
            .addCase(getMentors.pending, (state) => {
                state.status = STATUS.PENDING;
            })
            .addCase(getMentors.fulfilled, (state, action) => {
                state.mentors = action.payload;
                state.status = STATUS.SUCCEEDED;
            })
            .addCase(getMentors.rejected, (state) => {
                state.status = STATUS.REJECTED;
            });
    },
});

export const getMentors = createAsyncThunk<IEmployee[]>("fetch/mentors", async () => {
    return await getMentorsList();
});

export default mentorsSlice.reducer;
