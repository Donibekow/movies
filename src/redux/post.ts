import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: PostState = {
  posts: [],
  loading: true,
  error: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPostStart(state) {
      state.loading = true;
      state.error = null;
    },
    getPostSuccess( state, action: PayloadAction<Post[]>) {
        state.loading = false;
        state.posts = action.payload
    },
    getPostError( state, action: PayloadAction<string>) {
        state.loading = false;
        state.error = action.payload;
    }
  },
});

export const { getPostStart, getPostSuccess, getPostError } = postSlice.actions;

export default postSlice.reducer;
