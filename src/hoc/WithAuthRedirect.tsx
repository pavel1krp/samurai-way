import {Redirect} from "react-router-dom";
import React, {Component, ComponentType} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/redux-store";

type MapStatePropsType = {
    isAuth:boolean;
}
const mapStateToProps =(state:AppStateType):MapStatePropsType=> {
    return {
        isAuth: state.auth.isAuth
    }
}
export function WithAuthRedirect <T>(Component: ComponentType<T>){

    const RedirectComponent = (props:MapStatePropsType)=>{
        let {isAuth, ...restProps} = props
        if(!props.isAuth)
            setTimeout(()=>{
                return <Redirect to={'login'}/>
            },1)

        return <Component {...restProps as T}/>
    }

    let  ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent
}