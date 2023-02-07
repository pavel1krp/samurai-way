import React from 'react';

export const LoginForm = () => {
    return   <form action="">
        <div>
            <input type="text" placeholder={'Login'}/>
        </div>
        <div>
            <input type="text" placeholder={'Password'}/>
        </div>
        <div>
            <input type="checkbox"/> remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>;
};
