import React from 'react';
 import Note from './Note.js';
import axios from "axios";
import { Redirect } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';

class Login extends React.Component {
    constructor(){
    super();
    this.state = {
        email: "",
        password: ""
    }
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
}
    // onChange(e) {
    //     this.setState({[e.target.name]: e.target.value})
    // }
    onChangeUserEmail(e) {
        this.setState({ email: e.target.value })
    }
  
    onChangeUserPassword(e) {
        this.setState({ password: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        };
    //     login(user).then(res => {
    //     if(res){
    // this.props.history.push(`/home`)
    //         }
    //     })
    //******************************* */
        axios.post('http://localhost:5000/login', user)
            .then((res) => {
                console.log(res.data)
                this.setState({ redirect: true })
                console.log(this.state.redirect)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ email: '', password: ''})
      
        // let res = axios.post('http://localhost:5000/login', user);

        // console.log(res.data);
//*********************** */
    //     Axios({
    //         method: "GET",
    //         url: "http://localhost:5000/login",
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     }).then(res => {
    //         console.log(res.data.message);
    //     });

    // }
  //********************** */ 
    // componentDidMount() {
    //     // fetch('/login')
    //     //     .then(response => response.json())
    //     //     .then(data => console.log(data));   
    //     fetch('login', {
    //         method: "POST",
    //         body: JSON.stringify({
    //             username: username,
    //             password: password,
    //         })
    //     }).then(res => console.log(res))
    // }
    }
    render() {
        const { redirect } = this.state;

        if (redirect===true) {

            return <Redirect to='/Note' exact component={Note} />;
        }


        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <div id="login">
                        <input type="email" id="email" placeholder="Email" value={this.state.email} onChange={this.onChangeUserEmail} />
                        <input type="password" id="password" placeholder="Password" value={this.state.password} onChange={this.onChangeUserPassword} />
                        <button  id="send">Send</button>
                </div>
                </form>
            
            </div>
        )
    }
}
export default Login;