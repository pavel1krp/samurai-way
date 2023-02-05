import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType, postDatapropsType, UserProfileType} from "../../Types/types";
import {MyPostContainer} from "./MyPosts/MyPostContainer";
import {Redirect} from "react-router-dom";
// export type ProfileProps ={
//     post: PropsType[]
// }
type PropsType = {
    profile: UserProfileType
    status: string
    updateStatusTC: (status: string) => any
}
const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo
                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnMBNcEe_EGXuh-UuvXVFkcXaDoqFS2TAbwQ&usqp=CAU'}
                profile={props.profile} status={props.status} updateStatusTC={props.updateStatusTC}
            />
            < MyPostContainer/>
        </div>
    );
};

export default Profile;