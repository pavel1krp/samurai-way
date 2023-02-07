// import React from "react";
// import {useForm} from "react-hook-form";
// import styles from "../../Login/login.module.css";
//
// type AddMessageFormPropsType = {
//     addMessage: (text:string)=>void
// }
//
// export function AddMessageForm(props:AddMessageFormPropsType) {
//     const {
//         register,
//         watch,
//         reset,
//         formState: {errors},
//     } = useForm({
//         defaultValues: {
//             Send_Message: "",
//         }
//     });
//
//     console.log(watch("Send_Message")); // you can watch individual input by pass the name of the input
//     const sendMessageHandler = ()=>{
//         debugger
//         alert('12312')
//         props.addMessage("Send_Message")
//     }
//     console.log('render')
//     return (
//         <form className={styles.form} onSubmit={sendMessageHandler}
//         >
//             <label className={styles.labelForInput}>Send_Message</label>
//             <input className={styles.input}
//                    {...register("Send_Message", {required: true, maxLength: 12})} defaultValue="test"
//             />
//             {errors.Send_Message && <p>This field is required</p>}
//             <input className={styles.submitButton} type="submit"/>
//         </form>
//     );
// }
import React from "react"
import {SubmitHandler, useForm} from "react-hook-form"
import styles from "../../Login/login.module.css";

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
            <button className={styles.submitButton}></button>
        </form>
    )
}

// TYPES
type AddMessageFormPropsType = {
    callback: (message: string) => void
}
type FormInputs = {
    newMessage: string
}