<script context="module">
    import axios from "axios";

    const axiosAPI = axios.create({
        baseURL: BACKEND_URL,
    });

    const apiRequest = (method, url, request) => {
        const headers = {
            authorization: "",
        };

        return axiosAPI({
            method,
            url,
            data: request,
            headers,
        })
            .then((res) => {
                return Promise.resolve(res.data);
            })
            .catch((err) => {
                return Promise.reject(err);
            });
    };

    const get = (url, request) => apiRequest("get", url, request);

    const post = (url, request) => apiRequest("post", url, request);

   export const API = {
        get,
        post,

    };

</script>
