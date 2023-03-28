import { HYDRATE } from 'next-redux-wrapper'
import { createSlice } from '@reduxjs/toolkit'

interface LgState {
  code: string
}

const initialState: LgState = {
  code: 'fr',
}

const sliceTBD = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLg: (state, action) => {
      state.code = action.payload
      localStorage.setItem('appLg', state.code)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      console.log('HYDRATE', action.payload)
      return {
        ...state,
        ...action.payload,
      }
    })
  },
})

export const { setLg } = sliceTBD.actions
export const getLg = (state: any) => state.language.code
export default sliceTBD.reducer