import {MessagesDataType} from "../App";
import {
    setCurrentPageACType,
    setTotalUserCountACType,SetUsersType,
    ToggleFollowingInProgressAC,
    toggleIsFetchingType
} from "../Redux/usersReduser";
import {PostLikeAcType, SetStatusType, SetUserProfileType} from "../Redux/profileReducer";

export type authDataType = {
    userId:string
    email: string
    login: string
    isAuth: boolean
}

export type UserProfileType = {
    aboutMe: string,
    contacts:{
        facebook:string
        website:string
        vk:string
        twitter:string
        instagram:string
        youtube:string
        github:string
        mainLink:string
    }
    lookingForAJob: boolean
    lookingForAJobDescription:string
    photos:{
        large:string
        small:string
    }
    userId:number
}
export type postDatapropsType = {
    id: string
    message: string
    name: string
    likesCount: number
    src: string
}
export type DialogPageType = {
    dialogsData:DialogDataType[]
    messagesData:MessagesDataType[]
    newMessageText:string
}
export type ContextType ={
    store: StoreType
    dispatch: ({type}:{type:string})=>void
    getState:()=>StatePropsType
}
export type DialogDataType = {
    id: string
    name: string
}
export type ProfilePageType = {
    postData: postDatapropsType[],
    newPostText: string,
    profile:UserProfileType
    status:string
}
export type SideBarType = {}
export type StatePropsType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sideBar: SideBarType
    usersPage: UsersDataType
    auth: authDataType
}
export type StoreType = {
    _state: StatePropsType
    _callSubscriber:(state: StatePropsType)=>void
    getState:()=> StatePropsType
    subscribe:(observer:(state: StatePropsType)=>void)=>void
    dispatch:(action:ActionType)=>void
}
export type AddPostActionType = {
    type: "ADD-POST"
}
export type UPDATE_NEW_POST_TEXT ={
    type: "UPDATE-NEW-POST-TEXT",
    newText:string
}
export type UPDATE_MESSAGE_TEXT ={
    type: "UPDATE-MESSAGE-TEXT",
    messageText:string
}
export type ADD_MESSAGE ={
    type: "ADD-MESSAGE",
}
export type UsersType = {
    id: string
    photos:{
        small:string
        large:string
    }
    name:string
    status:string
    followed:boolean
    uniqueUrlName: string
}
export type UsersDataType = {
    users: UsersType[]
    pageSize: number
    totalUserCount: number
    currentPage:number
    isFetching:boolean
    followingInProgress:any[]
}

// export type unFollowAcType = ReturnType<typeof unFollowAC>
export type toggleAcType = {
    type:"TOGGLE",
    userId:string
}
export type SetUsersACType ={
    type: "SET-USERS"
    users:UsersType[]
}
export type ActionType = AddPostActionType|
    UPDATE_NEW_POST_TEXT|
    UPDATE_MESSAGE_TEXT|
    ADD_MESSAGE|toggleAcType|
    SetUsersACType|setCurrentPageACType|
    setTotalUserCountACType|toggleIsFetchingType|
    SetUserProfileType|PostLikeAcType|
    ToggleFollowingInProgressAC|SetUsersType|
    SetStatusType

