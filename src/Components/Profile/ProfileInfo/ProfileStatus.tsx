import React, {ChangeEvent, useState} from 'react';

// type ProfileStatusPropsType = {
//     status:string
// } (props:ProfileStatusPropsType)

type PropsType = {
    status: string
    updateStatusTC: (status: string) => any
}

class ProfileStatus extends React.Component<PropsType> {
    state = {
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

    render() {
        return (
            <div>
                {
                    this.state.editMode ?
                        <input onChange={this.onStatusChange.bind(this)} autoFocus onBlur={this.toggleEditMode.bind(this)}
                               value={this.state.status} type="text"/> :
                        <div onDoubleClick={this.toggleEditMode.bind(this)}>{this.props.status? this.props.status: '---'}</div>
                }
            </div>
        )
    }
}

export default ProfileStatus
