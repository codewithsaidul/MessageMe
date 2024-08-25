import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    sidebar: {
        open: false,
        type: "CONTACT", //it can be contact , starred,  shared
    }
}


const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        // Toggle the side bar
        toggleSiderbar(state, action) {
            state.sidebar.open = !state.sidebar.open;
        },
        updateSidebarType(state, action) {
            state.sidebar.type = action.payload.type;
        }
    }
})


export default slice.reducer;


//


export function ToggleSiderbar () {
    return async (dispatch, getState) => {
        dispatch(slice.actions.toggleSiderbar())
    }
}



export function UpdateSidebarType ( type ) {
    return async (dispatch, getState) => {
        dispatch(slice.actions.updateSidebarType({
            type
        }))
    }
}