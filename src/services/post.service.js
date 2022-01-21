import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const postService = {
    getAll:()=>axiosService.get(urls.users).then(value =>value.data),
    getById:()=> axiosService.get(`${urls.users}/${userId}/posts`).then(value => value.data)
}