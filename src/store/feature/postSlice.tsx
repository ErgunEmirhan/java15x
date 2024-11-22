import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import apis from "../../config/RestApis"
import { INewPostRequest } from "../../models/INewPostRequest"
import { IBaseResponse } from "../../models/IBaseResponse"

const initialPostState = {
    postList: [],
    isLoadingPostList: false,
    myPostList: [],
    isLoadingMyPostList: false,
    isNewPostLoading: false
}

// fetch
export const fetchGetAllMyPosts= createAsyncThunk(
    'post/fetchGetAllMyPosts',
    async()=>{
      const token = localStorage.getItem('token');  
      return await  fetch(apis.postService+'/get-all-my-posts?token='+token).then(data=>data.json())
    }
)

export const fetchGetAllPosts= createAsyncThunk(
    'post/fetchGetAllPosts',
    async()=>{
        const token = localStorage.getItem('token'); 
      return await  fetch(apis.postService+'/get-all-posts?token='+ token).then(data=>data.json())
    }
)

export const fetchNewPost= createAsyncThunk(
    'post/fetchNewPost',
    async(payload: INewPostRequest)=>{       
      return await  fetch(apis.postService+'/new-post',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      }).then(data=>data.json())
    }
)

const postSlice = createSlice({
    name: 'post',
    initialState: initialPostState,
    reducers: {

    },
    extraReducers: (build)=>{
        build.addCase(fetchGetAllMyPosts.pending,(state)=>{state.isLoadingMyPostList = true})
        build.addCase(fetchGetAllMyPosts.fulfilled,(state,action: PayloadAction<IBaseResponse>)=>{
            state.isLoadingMyPostList = false;
            if(action.payload.code === 200){
                state.myPostList = action.payload.data;
            }
        })
        build.addCase(fetchGetAllPosts.pending,(state)=>{state.isLoadingPostList = true})
        build.addCase(fetchGetAllPosts.fulfilled,(state,action: PayloadAction<IBaseResponse>)=>{
            state.isLoadingPostList = false;
            if(action.payload.code === 200){
                state.postList = action.payload.data;
            }
        })
        build.addCase(fetchNewPost.pending,(state)=>{state.isNewPostLoading = true})
        build.addCase(fetchNewPost.fulfilled,(state,action: PayloadAction<IBaseResponse>)=>{
            state.isNewPostLoading = false
        })
                
    }
})

export default postSlice.reducer