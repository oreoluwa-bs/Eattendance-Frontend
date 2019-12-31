import React, { Component, createContext } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
    initAuth = localStorage.getItem('auth') || null;
    state = {
        auth: JSON.parse(this.initAuth),
    }

    handleLogout = () => {
        localStorage.removeItem('auth');
        this.setState({
            auth: null
        });
        axios.defaults.headers.common['Authorization'] = null;
    }

    handleGetUser = () => {
        axios.get(`${this.props.apiUrl}/auth/user`, {
            headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
        }).then((res) => {
            this.setState({
                auth: res.data.data
            });
            localStorage.setItem('auth', JSON.stringify(res.data.data));
        }).catch(() => {
        });
    }

    handleLogin = (credentials) => {
        axios.post(`${this.props.apiUrl}/auth/login`, {
            email: credentials.email,
            password: credentials.password
        }).then((res) => {
            this.setState({
                auth: res.data.auth
            });
            localStorage.setItem('auth', JSON.stringify(res.data.auth));
            localStorage.setItem('token', res.data.token);
        }).catch(() => {
            alert('Incorrect email or password! Try again later')
        });
    }

    handleCreateAccount = (credentials) => {
        axios.post(`${this.props.apiUrl}/auth/create-user`, {
            email: credentials.email,
            password: credentials.password,
        }).then(() => {
            alert('Account has been created!');
        }).catch(() => {
            alert('Unable to create account!');
        });
    }




    handleSaveAttendance = (id, values) => {
        axios.post(`${this.props.apiUrl}/meetup/${id}/new-attendance`, {
            date: values.date,
            attendances: values.attendance,
        }, {
            headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
        }).then(() => {
            alert('Attendance has been taken!');
            this.handleGetUser();
        }).catch(() => {
            alert('Unable to take attendance!');
        });
    }

    handleCreateMeetup = (values) => {
        axios.post(`${this.props.apiUrl}/meetup/create-meetup`, {
            name: values.title,
            attendeeNames: values.attendees,
        }, {
            headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
        }).then(() => {
            // alert('Meetup has been created!');
            this.handleGetUser();
        }).catch(() => {
            alert('Unable to create meetup!');
        });
    }

    handleDeleteMeetup = (id) => {
        axios.delete(`${this.props.apiUrl}/meetup/delete/${id}`, {
            headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
        }).then(() => {
            this.handleGetUser();
        }).catch(() => {
            alert('Unable to create meetup!');
        });
    }

    render() {
        return (
            <AuthContext.Provider value={{
                ...this.state,
                // Auth
                handleLogout: this.handleLogout,
                handleCreateAccount: this.handleCreateAccount,
                handleLogin: this.handleLogin,

                // Meetup
                handleSaveAttendance: this.handleSaveAttendance,
                handleCreateMeetup: this.handleCreateMeetup,
                handleDeleteMeetup: this.handleDeleteMeetup,
            }}>
                {this.props.children}
            </AuthContext.Provider >
        )
    }
}

export default AuthContextProvider;