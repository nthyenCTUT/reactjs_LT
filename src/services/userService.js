import axios from "axios";
const handelLogin = async (username, password) => {
    console.log("axios")
    return await axios.post('http://localhost:8080/api/v1/login', { username, password })
}
export default handelLogin 