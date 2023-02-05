import React, {ChangeEvent, useState} from 'react';
import {ProfilePageType} from "../../../Types/types";

// type ProfileStatusPropsType = {
//     status:string
// } (props:ProfileStatusPropsType)

type PropsType = {
    status: string
    updateStatusTC: (status: string) => any
}
type LocalProfileStateType = {
    editMode:boolean
    status:string
}
class ProfileStatus extends React.Component<PropsType> {
    state:LocalProfileStateType = {
        editMode: false,
        status: this.props.status
    }
    toggleEditMode() {
        this.setState({
            editMode: !this.state.editMode
        })
        this.props.updateStatusTC(this.state.status)
    }

    onStatusChange (e: ChangeEvent<HTMLInputElement>) {
        this.setState(
            {
                status: e.currentTarget.value
            })
    }
    componentDidUpdate(prevProps:PropsType,prevState:LocalProfileStateType) {
        if(prevProps.status!== this.props.status){
            this.setState({status:this.props.status})
        }
    }

    render() {
        return (
        2>1?
        <div>
            {
                this.state.editMode ?
                    <input onChange={this.onStatusChange.bind(this)} autoFocus onBlur={this.toggleEditMode.bind(this)}
                           value={this.state.status} type="text"/> :
                    <div
                        onDoubleClick={this.toggleEditMode.bind(this)}>{this.props.status ? this.props.status : '---'}</div>
            }
        </div>:null
    )
    }
}

export default ProfileStatus
