import React from 'react';
import s from "../ProfileInfo/ProfileInfo.module.css";
import {UserProfileType} from "../../../Types/types";
import vk from '../../../assets/icons/vk.png'
import instagram from '../../../assets/icons/instagram.png'
import facebook from '../../../assets/icons/facebook.png'
import twitter from '../../../assets/icons/twitter.png'
import youtube from '../../../assets/icons/youtube.png'
import github from '../../../assets/icons/github-mark.png'
import {Preloader} from "../../Common/Preloader/Preloader";
import smallUserAvatar from '../../../assets/images/smallUsersAva.png'
import ProfileStatus from "./ProfileStatus";

type ProfileInfoPropsType = {
    src: string,
    profile: UserProfileType
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader />
    }
    console.log(props.profile.photos)
    return (
        <div>
            <div>
                <img className={s.profile_ava} src={props.src} alt={'background'}/>
                <div className={s.description_block}>
                    <div className={s.photoAndSocial}>
                        <img className={s.myAva} src={props.profile.photos.small !==null? props.profile.photos.small: smallUserAvatar }
                             alt="eto ya"/>
                        <div className={s.social}>
                            {props.profile.contacts.facebook?<a href={props.profile.contacts.facebook}><img className={s.logo} aria-disabled={true} src={facebook}
                                                                                                            alt="facebook"/></a>:null}
                            {props.profile.contacts.instagram?<a href={props.profile.contacts.instagram}><img className={s.logo} aria-disabled={true} src={instagram}
                                                                                                            alt="instagram"/></a>:null}
                            {props.profile.contacts.github?<a href={props.profile.contacts.github}><img className={s.logo} aria-disabled={true} src={github}
                                                                                                              alt="github"/></a>:null}
                            {props.profile.contacts.vk?<a href={props.profile.contacts.vk}><img className={s.logo} aria-disabled={true} src={vk}
                                                                                                              alt="vk"/></a>:null}
                            {props.profile.contacts.twitter?<a href={props.profile.contacts.twitter}><img className={s.logo} aria-disabled={true} src={twitter}
                                                                                                              alt="twitter"/></a>:null}
                            {props.profile.contacts.youtube?<a href={props.profile.contacts.youtube}><img className={s.logo} aria-disabled={true} src={youtube}
                                                                                                          alt="youtube"/></a>:null}
                            {props.profile.contacts.facebook+props.profile.contacts.instagram+props.profile.contacts.github+
                                props.profile.contacts.vk+props.profile.contacts.twitter+props.profile.contacts.youtube? null:<p>Пользователь не оставил контактов.</p>}
                        </div>
                    </div>
                    {props.profile.lookingForAJob?<p>{props.profile.lookingForAJob}</p>: null}
                    {props.profile.lookingForAJobDescription?<p>{props.profile.lookingForAJobDescription}</p>: null}
                    {props.profile.aboutMe?<p>{props.profile.aboutMe}</p>: null}
                    <ProfileStatus />
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;