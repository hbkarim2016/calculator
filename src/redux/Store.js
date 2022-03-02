import { configureStore } from "@reduxjs/toolkit";
import CalcSlice from "./reducers/CalcSlice";
const Store = configureStore({
    reducer:{
        calculator: CalcSlice
    }
});

export default Store;