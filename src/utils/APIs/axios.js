import axios from "axios";

import {Storage} from "../classStorage";

const baseURL = process.env.REACT_APP_BASE_URL;

const getAccessToken = () => Storage.get("accessToken")

const privateApi = axios.create({
    baseURL,
});

privateApi.interceptors.request.use(
    config => {
        config.headers["Authorization"] = "bearer " + getAccessToken();
        return config;
    },
    error => {
        Promise.reject(error);
    });

const publicApi = axios.create({baseURL});

export  {
    publicApi,
    privateApi
};





