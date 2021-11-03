import React from "react";
import usersPhoto from "./../../../../images/usersPhoto.jpg";

const Post = (props) => {
    return(
        <div>
                <img src={usersPhoto} />
                {props.message}
                <div>❤️ {props.likesCount}</div>
        </div>
    )
}

export default Post;