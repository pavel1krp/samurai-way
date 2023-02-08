import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import { postDatapropsType} from "../../../Types/types";
import {AddPostForm} from "./AddPostForm";

type MyPostType ={
    post: Array<postDatapropsType>
    postText:string
    updateNewPostText: (newText:string)=>void
    addPost:()=>void
    likeAdd:(id:string)=>void
}

export const MyPosts = (props:MyPostType) => {
    const posts = props.post.map(el=>{
        return(
            <Post postId={el.id} likeAdd={props.likeAdd} key = {el.id} title={el.name} src={el.src} text={el.message} likesCount={el.likesCount}/>
        )
    })
    const onChangeHandler =(e:ChangeEvent<HTMLTextAreaElement>)=>{
        props.updateNewPostText(e.currentTarget.value)
    }
    const  addPostHandler = (post:string)=>{
        props.updateNewPostText(post)
        props.addPost()
    }
    return (
        <div className={s.postsBlock}>
            <div className={`${s.item}`}>
                My Posts
            </div>
            <div className={s.item}>
                <AddPostForm callback={addPostHandler}/>
            </div>
            {posts}
        </div>
    );
};

export default MyPosts;