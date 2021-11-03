import { PostsType } from "../types/types";

const ADD_POST = "ADD_POST";



let initState = {
    posts: [
        {id:1, message:"Hello, world!", likesCount: 133},
        {id:2, message:"I Love React", likesCount: 135},
        {id:3, message:"React Developer", likesCount: 183},
    ] as Array<PostsType>
}

type InitStateType = typeof initState;

const profileReducer = (state=initState, action:actions):InitStateType => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id:4,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        }
        default:
            return state;
    }
}

type actions = AddPostActionType

type AddPostActionType = {
    type: typeof ADD_POST
    newPostText: string
}

export const addPost = (newPostText: string):AddPostActionType => ({type:ADD_POST,newPostText})

export default profileReducer;