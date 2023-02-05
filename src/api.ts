import axios from "axios";

const UrlWithCredentials = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": '1d84894c-5c25-4929-957d-5a81bfbf3d58'
    }
})
const UrlWithOutCredentials = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 100) {
        return UrlWithCredentials.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followUser(id: string) {
        return UrlWithCredentials.post(`follow/${id}`, {})
    },
    unFollowUser(id: string) {
        return UrlWithCredentials.delete(`follow/${id}`, {})
    },
    getUsersWithOutCredentials() {
        return UrlWithOutCredentials.get('')
    },
    authMe() {
        return UrlWithCredentials.get('auth/me')
    }
}
export const profileAPI = {
    getProfile(userid: string) {
        return UrlWithOutCredentials.get(`profile/${userid ? userid : 2}`)
    },
    getStatus(userid: string) {
        return UrlWithOutCredentials.get(`profile/status/${userid}`, )
    },
    changeStatus(status: string) {
        return UrlWithCredentials.put(`profile/status`,{status})
    },
}


// export const usersAPIDelete = {
//     getUsers(currentPage: number = 1, pageSize: number = 100) {
//         return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=
//         ${pageSize}`, {
//             withCredentials: true
//         })
//             .then(response => response.data)
//     }
// }
//
//
