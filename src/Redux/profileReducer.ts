import {v1} from "uuid";
import {ActionType, postDatapropsType, UserProfileType} from "../Types/types";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api";

export const ADD_POST = "ADD-POST"
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

type initialStateType = {
    postData: postDatapropsType[]
    newPostText: string
    profile: UserProfileType
    status: ''
}

let initialState: initialStateType = {
    postData: [
        {
            id: v1(),
            message: 'Вкусно',
            name: 'Dasha',
            likesCount: 11111,
            src: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'
        },
        {
            id: v1(),
            message: 'My',
            name: 'Vova',
            likesCount: 12,
            src: 'https://klike.net/uploads/posts/2019-03/1551511804_3.jpg'
        },
        {
            id: v1(),
            message: 'Why ME????',
            name: 'Solyara',
            likesCount: 10,
            src: 'https://klike.net/uploads/posts/2019-03/1551511808_5.jpg'
        },
        {
            id: v1(),
            message: 'Why',
            name: 'Sova',
            likesCount: 15,
            src: 'https://klike.net/uploads/posts/2019-03/1551511808_5.jpg'
        },
    ],
    newPostText: '',
    profile: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: '',
        },
        lookingForAJob: true,
        lookingForAJobDescription: '',
        photos: {
            large: '',
            small: '',
        },
        userId: 0
    },
    status: '',
}

export const profileReducer = (state: initialStateType = initialState, action: ActionType): any => {
    switch (action.type) {
        case ADD_POST : {
            let newPost = {
                id: v1(),
                message: state.newPostText,
                name: 'LLIova',
                likesCount: 0,
                src: state.profile.photos.large ?
                    state.profile.photos.large :
                    'http://risovach.ru/thumb/upload/200s400/2014/07/generator/vau_55876037_orig_.jpeg?5u8zq'
            }
            return {...state, postData: [...state.postData, newPost], newPostText: ''}
        }
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText}
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case 'POST-LIKE':
            return {
                ...state, postData: state.postData
                    .map(el => el.id === action.postId ? {...el, likesCount: el.likesCount + 1} : el)
            }
        case 'SET-STATUS':
            return {...state, status: action.status}
        default:
            return state
    }
}
export type SetUserProfileType = ReturnType<typeof setUserProfileAC>
export type PostLikeAcType = ReturnType<typeof postLikeAC>
export type SetStatusType = ReturnType<typeof setStatus>

export const postLikeAC = (postId: string) => ({type: 'POST-LIKE', postId} as const)
export const setUserProfileAC = (profile: UserProfileType) => ({type: 'SET-USER-PROFILE', profile} as const)
export const addPostAC = (): ActionType => ({type: ADD_POST})
export const updateNewPostTextAC = (newText: string): ActionType => ({type: UPDATE_NEW_POST_TEXT, newText})
export const setStatus = (status: string) => ({type: 'SET-STATUS', status} as const)


export const getProfileTC = (Id: string) => {
    return (dispatch: Dispatch<ActionType>) => {
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userid? userid:2}`)
        profileAPI.getProfile(Id)
            .then(response =>
                dispatch(setUserProfileAC(response.data))
            )

    }
}

export const getStatusTC = (userId: string) => {
    return (dispatch: Dispatch<ActionType>) => {
        profileAPI.getStatus(userId)
            .then(response => {
                console.log(response)
                dispatch(setStatus(response.data))
            })
    }
}
export const updateStatusTC = (status: string) => {
    return (dispatch: Dispatch<ActionType>) => {
        profileAPI.changeStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    console.log(response)
                    dispatch(setStatus(status))
                }
            })
    }
}