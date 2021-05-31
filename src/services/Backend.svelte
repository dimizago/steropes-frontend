<script>
    import axios from "axios";
    const dotenv = require('dotenv');
	dotenv.config();

    const axiosBackend = axios.create({
        baseUrl: process.env.API_URL
    })

    const backendRequest = (method, url, request) => {
        const headers = {
            authorization: ""
        };

        return axiosAPI({
            method,
            url,
            data: request,
            headers
        }).then(res=> {
            return Promise.resolve(res.data)
        })
        .catch(err=> {
            return Promise.reject(err)
        })
    }

    // function to execute the http get request
    const get = (url, request) => backendRequest("get",url,request);

    // function to execute the http delete request
    const deleteRequest = (url, request) =>  backendRequest("delete", url, request);

    // function to execute the http post request
    const post = (url, request) => backendRequest("post", url, request);

    // function to execute the http put request
    const put = (url, request) => backendRequest("put", url, request);

    // function to execute the http path request
    const patch = (url, request) =>  backendRequest("patch", url, request);

    // expose your method to other services or actions
    export const API = {
        get,
        delete: deleteRequest,
        post,
        put,
        patch
    };
    
</script>

<div>
</div>

<style>
</style>