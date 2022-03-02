import { createSlice } from "@reduxjs/toolkit";

const CalcSlice = createSlice({

    name:'calc',
    // THE STORE STATE =>
    initialState:{
        result:'',
        loading:true
    },
    // THE STORE FUNCTIONS => 
    reducers:{
        close_loading:(state) => {
            state.loading = false;
        },
        // HANDLE NUMBERS CLICKED IN STATE 
        handleClick:( state, action ) => {
            state.result += action.payload.eventName ;
        }, 
        // SHOW THE RESULT IN STATE 
        handleResult:( state ) => {
            try{
                state.result = eval(state.result).toString() ;
            }catch(err){
                state.result = 'Error'
            }
        }, 
        // BACKSPACE ONCE FROM STATE 
        backspace: ( state ) => {
            state.result = state.result.slice( 0, state.result.length - 1 );
        },
        // RESET THE CALC
        clear:( state ) => {
            state.result = '';
        }  
    }

});

export const {  close_loading, handleClick, handleResult, backspace, clear } = CalcSlice.actions;
export default CalcSlice.reducer;