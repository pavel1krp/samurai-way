import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import styles  from './DialogItem.module.css'

type DialogItemPropsType ={
    name: string,
    id: string
}

const DialogItem = (props: DialogItemPropsType) =>{
    return (
        <div className={s.dialogsItem} >
            <NavLink className={styles.name}  key={props.id} to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;