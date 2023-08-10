import axios from "axios";
const handelLogin = async (username, password) => {
    console.log("axios")
    return await axios.post('http://localhost:8080/api/v1/login', { username, password })
}
const getAllUsers = async (userId) => {
    return await axios.get(`http://localhost:8080/api/v1/getAllUsers?userId=${userId}`)
}
export default { handelLogin, getAllUsers }