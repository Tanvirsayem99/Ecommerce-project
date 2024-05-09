const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    user:[]
}
const Slice = createSlice({
    name:"addUserSlice",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            const data={
                email:action.payload
            }
            state.user.push(data)
        }
    }
})
export const {addUser} = Slice.actions;
export default Slice.reducer;