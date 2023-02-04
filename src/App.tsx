import React from 'react';
import './App.css';
import Nav from "./Components/Nav/Nav";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import News from "./Components/News/News";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {Login} from "./Components/Login/Login";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";



export type MessagesDataType = {
    id: string
    message: string
}


type AppPropsType = {
}


const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route render={() => <ProfileContainer />}
                           path="/profile/:userId?"/>
                    <Route render={() => <DialogsContainer />}
                           path={'/dialogs'}/>
                    <Route render={() => <News/>}
                           path={'/news'}/>
                    <Route render={() => <Music/>}
                           path={'/music'}/>
                    <Route render={() => <Settings/>}
                           path={'/setting'}/>
                    <Route path={'/users'}  render={()=> <UsersContainer />}/>
                    <Route path={'/login'} render={()=><Login />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
