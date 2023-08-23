import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

interface UserState {
    data: FirebaseAuthTypes.User | null;
}

const initialState: UserState = {
    data: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (
            state,
            action: PayloadAction<FirebaseAuthTypes.User | null>,
        ) => {
            state.data = action.payload;
        },
    },
});

export const { setUser } = userSlice.actions;

export const getUserData = (state: RootState) => state.user.data;

export default userSlice.reducer;
