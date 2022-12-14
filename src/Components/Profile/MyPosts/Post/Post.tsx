import React from 'react';
import s from "./Post.module.css";

type PostType ={
    title: string,
    src: string,
    text:string,
    likesCount:number
    likeAdd:(id:string)=>void
    postId:string
}
const Post = (props:PostType) => {
    return (
        <div className={s.divan}>
        <div className={s.comentAndAva}>
        <img className={s.img} src={props.src} alt={'Comentator avatar'}/>
        <p>{props.title}</p>
        </div>
            <div className={s.likesAndComent}>
                <p>{props.text}</p>
                <p className={s.likes}>{props.likesCount} likes</p>
        <button className={s.buttonLike} onClick={()=>props.likeAdd(props.postId)}>&#10084;</button>
            </div>
        </div>
   )
};

export default Post;