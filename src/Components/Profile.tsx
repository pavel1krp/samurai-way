import React from 'react';

const Profile = () => {
    return (
        <div className='content'>
            Main Content
            <div>
                <img className='profile-background' src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" alt=""/>
            </div>
            <div>
                <img className='profile-img' src="https://cdn.freelance.ru/images/att/1575043_900_600.png" alt="avatar"/>
            </div>
            <div>
                My posts
                <div>New Post</div>
            </div>
            <div>
                <div>Post 1</div>
                <div>Post 2</div>
            </div>
        </div>
    );
};

export default Profile;