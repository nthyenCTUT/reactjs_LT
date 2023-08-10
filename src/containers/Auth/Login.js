import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import handelLogin from './../../services/userService'
import './Login.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fas)

class Login extends React.Component {
    //có thể tạo state ngoài contructor
    //hàm tạo
    constructor(props) {
        super(props)
        this.state = {
            username: 'abc',
            password: '123',
            isShowPassword: false
        }

    }
    handleOnChangeUsername = (event) => {
        console.log("User change", this.state.username)

        this.setState({
            username: event.target.value
        })

    }
    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handelLogin = async (event) => {
        // console.log(this.state.username)
        this.setState({
            errMessage: ''
        })
        try {

            let dataUser = await handelLogin(this.state.username, this.state.password)
            //console.log(data)
            if (dataUser.data.errCode != 2) {
                this.setState({
                    errMessage: dataUser.data.message
                })
            }
            else {
                //Login thành công
                let userInfo = {
                    username: dataUser.data.user,
                    role: dataUser.data.role
                }
                console.log(userInfo)
                this.props.userLoginSuccess(userInfo)
            }
        } catch (err) {
            //Lỗi xảy ra khi chưa nhập user,pass
            //lỗi trả về từ axios
            // console.log(err.response)
            // if (err.response.data) {
            //     this.setState({
            //         errMessage: err.response.data.message
            //     })
            // }

            console.log(err)

        }



    }

    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }
    render() {
        if (this.props.isLoggedIn)
            return <Navigate replace to="/" />;
        console.log("Login:", this.props.isLoggedIn)
        return (
            <>

                <div className="background p-3 m-0 border-0 bd-example m-0 border-0">

                    <form className="row g-3 needs-validation position">
                        <div className="center">Login</div>
                        <div className="col-12">
                            <label htmlFor="validationCustom01" className="form-label">Username</label>
                            <input type="text" className="form-control" value={this.state.username} id="validationCustom01" required onChange={(event) => this.handleOnChangeUsername(event)} />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-12 ">
                            <label htmlFor="validationCustom02" className="form-label">Password</label>
                            <div className="input-group">
                                <input type={this.state.isShowPassword ? 'text' : 'password'} aria-describedby="addon-wrapping" className="form-control" value={this.state.password} id="validationCustom02" required onChange={(event) => this.handleOnChangePassword(event)} />
                                <span className="input-group-text" id="addon-wrapping" onClick={() => this.handleShowHidePassword()}> <FontAwesomeIcon icon="fa-solid fa-eye fa-eye-slash" />

                                </span>
                            </div>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-12">
                            {this.state.errMessage}
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary" type="button" onClick={(event) => this.handelLogin(event)}>Đăng nhập</button>
                        </div>
                    </form >


                </div >
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        userLoginSuccess: (userInfo) => dispatch({ type: 'USER_LOGIN_SUCCESS', payload: userInfo })

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)