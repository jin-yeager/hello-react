// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit'

const voSlice = createSlice({
    name: 'vo',
    initialState: {
        cnt: 0,
        nm: '홍길동'
    },
    reducers: {
        up: (state) => {
            state.cnt++
        },
        dw: (state) => {
            state.cnt--
        },
        yh: (state) => {
            state.nm = '영희'
        },
        cs: (state) => {
            state.nm = '철수'
        }
    }
})

export const { up, dw, yh, cs } = voSlice.actions

const store = configureStore({
    reducer: {
        vo: voSlice.reducer
    }
})

export default store
