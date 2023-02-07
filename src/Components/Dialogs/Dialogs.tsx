import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {MessagesDataType} from "../../App";
import {DialogDataType} from "../../Types/types";
import {Redirect} from "react-router-dom";
import {AddMessageForm} from "./Message/AddMessageForm";


export type allDialogTypes ={
    dialogsData: DialogDataType[]
    messagesData:MessagesDataType[]
}

type DialogPropsType ={
    dialogState: allDialogTypes
    addMessage:()=>void
    updateMessage:(newMessage:string)=>void
    newMessageText:string
    isAuth:boolean
}

const Dialogs = (props:DialogPropsType) => {
    const mapMessages = props.dialogState.messagesData.map(el=> <Message key={el.id} message={el.message}/>)
    const mapDialogs = props.dialogState.dialogsData.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>)
    const onMessageChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        props.updateMessage(e.currentTarget.value)
    }
    const addMessageHandler = ()=>{
        props.addMessage()
    }
    if(props.isAuth===false) return <Redirect to={"/login"}/>
    return (
        <>
        <div className ={s.content}>
            <div className={s.dialogs}>
                {mapDialogs}
            </div>
            <div className={s.messages}>
                {mapMessages}
            </div>
        </div>
            <div className={s.formDiv}>
                <AddMessageForm callback={addMessageHandler}/>
                <input onChange={onMessageChangeHandler}  value={props.newMessageText} type="text"/>
                <button onClick={addMessageHandler}>Send message</button>
            </div>

        </>
    );
};

export default Dialogs;