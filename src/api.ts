import axios from "axios";

const UrlWithCredentials = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": '7f79c4fe-a8ab-4097-8123-03411285985e'
    }
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
        return UrlWithCredentials.get('')
    },
    authMe() {
        return UrlWithCredentials.get('auth/me')
    }
}
export const profileAPI = {
    getProfile(userid: string) {
        return UrlWithCredentials.get(`profile/${userid ? userid : 2}`)
    },
    getStatus(userid: string) {
        return UrlWithCredentials.get(`profile/status/${userid}`, )
    },
    changeStatus(status: string) {
        return UrlWithCredentials.put(`profile/status`,{status})
    },
}


