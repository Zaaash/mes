import { configureStore } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper"
import tbdReducer from "./sliceTBD"
import { useSelector } from "react-redux"

/**
 * Next Redux wrapper requires a
 * function which returns the store
 */
function buildStore() {
  return configureStore({
    reducer: {
      example: tbdReducer,
    },
  })
}

/**
 * Create types for store and RootState
 */
export type Store = ReturnType<typeof buildStore>
export type RootState = ReturnType<Store["getState"]>

/**
 * Exports for globals variables
 */
// Global wording
export const appWording = {
  en: {},
  fr: {},
}

/**
 * Improves typescript support for default
 * useSelector hook
 * @param fn Selector function
 */
export const useAppSelector = <T>(fn: (s: RootState) => any) => useSelector<RootState, T>(fn)

export const wrapper = createWrapper<Store>(buildStore)
