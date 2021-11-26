import * as axios from "axios";

const axiosInstance = axios.create({
	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
	withCredentials: true,
	headers: {
		"API-KEY": "1bddf053-cb69-4748-af05-0a5f2e4135c0"
	}
})

export const usersAPI = {
	getUsers(page, count) {
		return axiosInstance.get(`users?page=${page}&count=${count}`)
			.then(resolve => resolve.data)
	},
	toggleFollow(userId, follow) {
		if (follow) {
			return axiosInstance.post(`follow/${userId}`, {})
				.then(resolve => resolve.data)
		} else {
			return axiosInstance.delete(`follow/${userId}`)
				.then(resolve => resolve.data)
		}
	}
}

export const profileAPI = {
	getProfile(userId) {
		return axiosInstance.get(`profile/${userId}`)
			.then(resolve => resolve.data)
	},
	getStatus(userId) {
		return axiosInstance.get(`profile/status/${userId}`)
			.then(resolve => resolve.data)
	},
	updateStatus(status) {
		return axiosInstance.put(`profile/status`, { status })
			.then(resolve => resolve.data)
	}
}

export const authAPI = {
	getUserInfo() {
		return axiosInstance.get(`auth/me`)
			.then(resolve => resolve.data)
	}
}