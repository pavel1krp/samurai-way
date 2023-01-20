import React from 'react';
import {UsersType} from "../../Types/types";
import style from './Users.module.css'
import axios from 'axios';
import smallUserAvatar from '../../assets/images/smallUsersAva.png'
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api";
import {toggleFollowingInProgressAC} from "../../Redux/usersReduser";

export type UserPropsType = {
    users: UsersType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    toggle: (userId: string) => void
    setUsers: (user: UsersType[]) => void
    onPageChanged: (x: number) => void
    toggleFollowingInProgressAC:(inProgress:boolean, userId:string)=>void
    followingInProgress:any[]
}

export const Users = (props: UserPropsType) => {
    const {users, toggle, setUsers,toggleFollowingInProgressAC,followingInProgress, ...restProps} = props
    if (users.length === 0) {
        usersAPI.getUsersWithOutCredentials().then(response => {
            setUsers(response.data.items)
        })
    }
    const mappedUsers = users.map(el => {

        const follow = () => {
            console.log(followingInProgress)
            toggleFollowingInProgressAC(true,el.id)
            usersAPI.followUser(el.id).then(response=>{
                    if(response.data.resultCode===0){
                        toggle(el.id)
                    }
                toggleFollowingInProgressAC(false,el.id)
                })
        }
        const unFollow = ()=>{
            debugger
            console.log(followingInProgress)
            toggleFollowingInProgressAC(true,el.id)
            usersAPI.unFollowUser(el.id).then(response=>{
                    if(response.data.resultCode===1){
                        toggle(el.id)
                    }
                toggleFollowingInProgressAC(false,el.id)
                })
        }

        return (
            <div key={el.id} className={style.usersElement}>
                <div className={style.singleUserElement}>
                    <div>
                        <NavLink to={'/profile/' + el.id}>
                            <img src={el.photos.small != null ? el.photos.small : smallUserAvatar}
                                 className={style.userImg} alt=""/>
                        </NavLink>
                    </div>
                    {el.followed ?
                        <button disabled={followingInProgress.some(id=>id === el.id)} onClick={
                            unFollow}>
                            Unfollow</button>:
                        <button disabled={followingInProgress.some(id=>id === el.id)} onClick={
                            follow}>
                            Follow</button>}

                </div>
                <div className={style.userInfo}>
                    <div className={style.userAbout}>
                        <p>{el.name}</p>
                        <p>{el.status}</p>
                    </div>
                    <div className={style.userAbout}>
                        <p>{'el.location.county'}</p>
                        <p>{'el.location.city'}</p>
                    </div>
                </div>
            </div>
        )
    })
    const pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const mappedButton = pages.map((el, id) => {
            return <button key={id} onClick={() => props.onPageChanged(el)}
                           className={props.currentPage == el ? style.selected : ''}>{el}</button>
        }
    )
    return <div>
        <div>
            {mappedButton}
        </div>
        {mappedUsers}
        <div className={style.bigButtonDiv}>
            <button className={style.bitButton}>Show more</button>
        </div>
    </div>
};
