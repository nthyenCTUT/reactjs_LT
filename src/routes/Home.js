import React from "react";
import { connect } from "react-redux";

class Home extends React.Component {

    render() {

        console.log("Login home", this.props.isLoggedIn)
        console.log("user info Home", this.props.userInfo)
        return (

            <div> Home</div >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
        userInfo: state.userInfo
    }
}
export default connect(mapStateToProps)(Home)