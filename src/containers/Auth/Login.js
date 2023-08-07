import React from "react";
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
    handelLogin = (event) => {
        console.log(this.state.username)
        event.preventDefault()

    }
    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }
    render() {
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
                            <button className="btn btn-primary" type="submit" onClick={(event) => this.handelLogin(event)}>Đăng nhập</button>
                        </div>
                    </form>


                </div>
            </>
        )
    }
}
export default Login