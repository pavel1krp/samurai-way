import React from "react"
import {SubmitHandler, useForm} from "react-hook-form"
import styles from './MyPosts.module.css'

export const AddPostForm: React.FC<AddPostFormPropsType> = ({callback}) => {
    const {register, handleSubmit, reset} = useForm<FormInputs>()
    const onSubmit: SubmitHandler<FormInputs> = data => {
        callback(data.newMessage)
        reset()
    }
    console.log('render')
    return (
        <form className={styles.addMessageForm} onSubmit={handleSubmit(onSubmit)}>
    <input
        className={styles.formInput}
    type="text"
    {...register("newMessage", {required: true})}
    placeholder="Write new post"
    />
    <button className={styles.submitButton}>Post</button>
    </form>
)
}

type AddPostFormPropsType = {
    callback: (message: string) => void
}
type FormInputs = {
    newMessage: string
}