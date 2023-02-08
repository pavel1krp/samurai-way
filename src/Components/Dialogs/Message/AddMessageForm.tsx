import React from "react"
import {SubmitHandler, useForm} from "react-hook-form"
import styles from "../Dialogs.module.css"

export const AddMessageForm: React.FC<AddMessageFormPropsType> = ({callback}) => {
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
                placeholder="Write a message..."
            />
            <button className={styles.submitButton}>Send message</button>
        </form>
    )
}

type AddMessageFormPropsType = {
    callback: (message: string) => void
}
type FormInputs = {
    newMessage: string
}