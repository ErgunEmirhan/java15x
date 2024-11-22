import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IProfile } from "../../models/IProfile";
import apis from "../../config/RestApis";
import { IBaseResponse } from "../../models/IBaseResponse";
interface IUserState{
    profile: IProfile | null,
    searchUsers: any[]
    followerList: any[],
    followingList: any[],
    isProfileLoading: boolean,
    isSearchLoading: boolean,
    isFollowerLoading: boolean,
    isFollowingLoading: boolean
}
const initialUserState:IUserState = {
    profile: null,
    searchUsers: [],
    followerList: [],
    followingList: [],
    isProfileLoading: false,
    isSearchLoading: false,
    isFollowerLoading: false,
    isFollowingLoading: false
}

// fetch
export const fetchGetProfileByToken = createAsyncThunk(
    'user/fetchGetProfileByToken',
    async ()=>{
        const token = localStorage.getItem('token')
        return await fetch( apis.userService+ '/get-profile?token='+token,{

        }).then(data=>data.json());
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {},
    extraReducers: (build)=>{
        build.addCase(fetchGetProfileByToken.pending, (state)=>{
            state.isProfileLoading = true;
        })
        build.addCase(fetchGetProfileByToken.fulfilled, (state, action: PayloadAction<IBaseResponse>)=> {
            state.isProfileLoading = false;
            if(action.payload.code === 200){
                state.profile = action.payload.data;
            }
        })
    }
})

export default userSlice.reducer;