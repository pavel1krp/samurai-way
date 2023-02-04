import {connect} from "react-redux";
import {StatePropsType, UsersType} from "../../Types/types";
import {
    followTC,
    getUsersTC,
    setCurrentPage,
    setTotalUserCount,
    setUsers,
    toggle, toggleFollowingInProgressAC, toggleIsFetching, unFollowTC
} from "../../Redux/usersReduser";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

export class UsersApiComponent extends React.Component<usersAllStateType> {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsersTC(pageNumber, this.props.pageSize)
        // this.props.toggleIsFetching(true)
        // this.props.setCurrentPage(pageNumber)
        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //     this.props.setUsers(data.items)
        //     this.props.toggleIsFetching(false)
        // });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   toggle={this.props.toggle}
                   setUsers={this.props.setUsers}
                   totalUserCount={this.props.totalUserCount}
                   currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   followingInProgress={this.props.followingInProgress}
                   toggleFollowingInProgressAC={this.props.toggleFollowingInProgressAC}
                   unFollowTC={this.props.unFollowTC}
                   followTC={this.props.followTC}
            />
        </>
    }
}

export type  usersAllStateType = mapStateToPropsType & mapDispatchToPropsType

export type mapStateToPropsType = {
    users: UsersType[];
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: any[]
}
export type mapDispatchToPropsType = {
    toggle: (userId: string) => void
    setUsers: (user: UsersType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUserCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingInProgressAC: (inProgress: boolean, userId: string) => void
    getUsersTC: (currentPage: number, pageSize: number) => any
    unFollowTC:(userId:string)=>any
    followTC:(userId:string)=>any

}
const mapStateToProps = (state: StatePropsType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        toggle, setUsers, setCurrentPage,
        setTotalUserCount, toggleIsFetching, toggleFollowingInProgressAC,
        getUsersTC,unFollowTC,followTC
    }),
    WithAuthRedirect
)(UsersApiComponent)


