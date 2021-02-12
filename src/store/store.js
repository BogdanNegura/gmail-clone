import { configureStore } from "@reduxjs/toolkit"
import { mailSlice } from "../features/mail-slice"

export default configureStore({
    reducer: {
        mail: mailReducer
    }
})