import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const commentsService = {
    getAll:()=>axiosService.get(urls.users).then(value =>value.data),
    getById:()=> axiosService.get(`${urls.posts}/comments`).then(value => value.data)
}