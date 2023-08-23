import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITask } from '../types/task';

interface TaskState {
    data: ITask[] | null;
    toUpdate: any;
}

const initialState: TaskState = {
    data: null,
    toUpdate: null,
};

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setTasks: (state, action: PayloadAction<ITask[]>) => {
            state.data = action.payload;
        },
        setToUpdate: (state) => {
            state.toUpdate = Math.random();
        },
    },
});

export const { setTasks, setToUpdate } = tasksSlice.actions;

export default tasksSlice.reducer;
