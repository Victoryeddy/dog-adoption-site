import axios from "axios";

const apiClient = axios.create({
    baseURL: `https://dummyapi.io/data/v1/`,
    // timeout: 5000,
    headers: {
        "app-id": process.env.VUE_APP_USERS_ID
    }

})

export default apiClient;