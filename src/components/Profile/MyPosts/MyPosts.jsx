import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let NewElements = props.posts.map( u => <Post id={u.id} message={u.message} likesCount={u.likesCount} />)
    const onAddPost = (value) => {
        props.addPost(value.newPostText)
    }
    return(
        <div>
            <div>
            <AddMyPostsReduxForm onSubmit={onAddPost} />
            </div>
            <div>
                {NewElements}
            </div>
        </div>
    )
}
const maxLength100 = maxLengthCreator(100)

const AddMyPostsForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field name="newPostText" component="textarea"
            validate={[required, maxLength100]} />
                <div><button>Опубликовать</button></div>
        </form>
    )
}

const AddMyPostsReduxForm = reduxForm({form:"profileAddMyPostsForm"})(AddMyPostsForm)

export default MyPosts;
