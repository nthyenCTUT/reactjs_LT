//state là trạng thái của Redux, action là từ React truyền qua Redux
const initState = {
    isLoggedIn: false,
    userInfo: {}


}
const userReducer = (state = initState, action) => {
    switch (action.type) {
        case "USER_LOGIN_SUCCESS":
            console.log("user reducer: usser info", action.payload)
            return {
                ...state,
                isLoggedIn: true,
                userInfo: action.payload

            }
        case "LOGOUT_USER":
            return {
                ...state,
                isLoggedIn: false,
                userInfo: {}
            }

    }
    console.log("root reduce", state)
    return state
}
export default userReducer