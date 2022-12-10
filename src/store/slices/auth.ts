import {ActionReducerMapBuilder, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IAuthInitialState, IUser} from "./interface";
import {NoInfer} from "@reduxjs/toolkit/dist/tsHelpers";
import {STATUS} from "~core/enums";
import {register, signIn} from "~core/api/auth";
import {RegisterForm} from "~core/api/interfaces";

const initialState = {
    loading: false,
    userInfo: null,
    isAuthenticated: false,
    error: false,
    status: '',
    openLoginModal: false
} as IAuthInitialState

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.userInfo = action.payload;
            state.status = STATUS.SUCCEEDED;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.userInfo = null;
        }
    },
    extraReducers: (builder: ActionReducerMapBuilder<NoInfer<IAuthInitialState>>) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = STATUS.PENDING;
                state.loading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.userInfo = action.payload;
                state.status = STATUS.SUCCEEDED;
                state.isAuthenticated = true;
                state.loading = false;
            })
            .addCase(login.rejected, (state) => {
                state.status = STATUS.REJECTED;
                state.loading = false;
            });
        builder
            .addCase(registerUser.pending, (state) => {
                state.status = STATUS.PENDING;
                state.loading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.userInfo = action.payload;
                state.status = STATUS.SUCCEEDED;
                state.isAuthenticated = true;
                state.loading = false;
            })
            .addCase(registerUser.rejected, (state) => {
                state.status = STATUS.REJECTED;
                state.loading = false;
            });
    },
})


export const login = createAsyncThunk<IUser>("auth/auth", async () => {
    return await signIn();
});

export const registerUser = createAsyncThunk("auth/admin", async (form: RegisterForm, thunkAPI) => {
    return await register(form);
});
export const { logout, setUser } = authSlice.actions;

export default authSlice.reducer;
