import axios from "axios"

const axiosWithAuth = () => {
    const token = window.localStorage.getItem("token");

    return axios.create({
        baseURL: "https://water-my-plants2-be.herokuapp.com/",
        headers: {
            Authorization: token
        }
    })
}

export default axiosWithAuth;