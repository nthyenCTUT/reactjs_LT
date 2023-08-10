import React from 'react'
import './UserManager.scss'
import userService from '../../services/userService'
class UserManager extends React.Component {
    constructor(props) {
        super(props)
        this.setState({
            arrUsers: []
        })
    }
    async componentDidMount() {
        let response = await userService.getAllUsers('ALL')
        console.log("Res:", response.data.users)
        if (response && response.data.errCode == 1) {
            //viết trong didmout mục đích ép react render lần 2 để nạp lại state
            this.setState({
                arrUsers: response.data.users
            }, () => {
                //then-cơ chế bất đồng bộ
                console.log("State array users:", this.state.arrUsers)
            })
        }

    }

    render() {
        let arrUsers = []
        if (this.state) {
            arrUsers = this.state.arrUsers
        }

        // console.log("array Users", Users)
        return (
            <div>
                <table id="customers">
                    <tr>
                        <th>STT</th>
                        <th>User</th>
                        <th>Role</th>
                        <th>Setting</th>
                    </tr>
                    {arrUsers && arrUsers.map((item, index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item.username}</td>
                                <td>{item.role}</td>
                                <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>)
                    })}
                </table>
            </div>)
    }
}
export default UserManager