import { connect } from "react-redux";
import MyPosts from "./MyPosts";
import {addPost} from "./../../../redux/profile-reducer"

let mapStateToProps = (state) => {
    return {
        posts: state.profile.posts
    }
}
const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts)

export default MyPostsContainer