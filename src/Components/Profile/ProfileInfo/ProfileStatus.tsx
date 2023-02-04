import React, {useState} from 'react';

// type ProfileStatusPropsType = {
//     status:string
// } (props:ProfileStatusPropsType)

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }
    toggleEditMode (){
        this.setState({
            editMode:!this.state.editMode
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.editMode ?
                        <input autoFocus  onBlur={this.toggleEditMode.bind(this)} type="text"/> :
                        <div onDoubleClick={this.toggleEditMode.bind(this)}>Hello</div>
                }
            </div>
        )
    }
}

export default ProfileStatus
