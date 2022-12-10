import {
    ActionReducerMapBuilder,
    createAsyncThunk,
    createSlice,
    PayloadAction,
    SliceCaseReducers
} from "@reduxjs/toolkit";
import {STATUS} from "~core/enums";
import {getEmployeesList} from "~core/api/employees";
import {IEmployee, IEmployeesState} from "./interface";
import {NoInfer} from "@reduxjs/toolkit/dist/tsHelpers";

const initialState: IEmployeesState = {
    status: "",
    applications: [],
};

const employeesSlice = createSlice<IEmployeesState, SliceCaseReducers<IEmployeesState>>({
    name: "applications",
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.applications.unshift(action.payload);
        },
        deleteEmployee: (state, action: PayloadAction<{ id: string }>)=>{
            console.log(action.payload.id, 'action.payload.id')
            state.applications = state.applications.filter(
                (item) => item.id !== action.payload.id
            );
        }
    },
    extraReducers: (builder: ActionReducerMapBuilder<NoInfer<IEmployeesState>>) => {
        builder
            .addCase(getEmployees.pending, (state) => {
                state.status = STATUS.PENDING;
            })
            .addCase(getEmployees.fulfilled, (state, action) => {
                state.applications = action.payload;
                state.status = STATUS.SUCCEEDED;
            })
            .addCase(getEmployees.rejected, (state) => {
                state.status = STATUS.REJECTED;
            });
    },
});

export const getEmployees = createAsyncThunk<IEmployee[]>("fetch/applications", async () => {
    return await getEmployeesList();
});
export const { addEmployee, deleteEmployee } = employeesSlice.actions;

export default employeesSlice.reducer;
