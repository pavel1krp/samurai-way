import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {postDatapropsType, } from "../../../Redux/State";

type MyPostType ={
    post: Array<postDatapropsType>
    postText:string
    dispatch:(action:any)=>void
}

const MyPosts = (props:MyPostType) => {
    const posts = props.post.map(el=>{
        return(
            <Post key = {el.id} title={el.name} src={el.src} text={el.message} likesCount={el.likesCount}/>
        )
    })
    const onChangeHandler =(e:ChangeEvent<HTMLTextAreaElement>)=>{
        props.dispatch({type:"UPDATE-NEW-POST-TEXT", newText: e.currentTarget.value})
    }
    const  addPostHandler = ()=>{
        props.dispatch({type:"ADD-POST"})
    }
    return (
        <div className={s.postsBlock}>
            <div className={`${s.item}`}>
                My Posts
            </div>
            <div className={s.item}>
                <div>
                    <textarea  value={props.postText} className={s.textArea} onChange={onChangeHandler} ></textarea>
                </div>
                <div>
                    <button onClick={addPostHandler}>Add post</button>
                </div>
                {/*<InputButton buttonName={'Send message'}/>*/}
            </div>
            {posts}
        </div>
    );
};

export default MyPosts;