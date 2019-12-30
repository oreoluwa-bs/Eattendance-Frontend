import React from 'react';

const SignupPage = () => {
    return (
        <div className='login-body'>
            <div class='container'>
                <div class='row'>
                    <div class='col-sm-9 col-md-7 col-lg-5 mx-auto'>
                        <div class='card card-signin my-5'>
                            <div class='card-body'>
                                <h5 class='card-title text-center'>Sign Up</h5>
                                <form class='form-signin'>
                                    <div class='form-label-group'>
                                        <input type='email' id='inputEmail' class='form-control' placeholder='Email address' required autofocus />
                                        <label for='inputEmail'>Email address</label>
                                    </div>

                                    <div class='form-label-group'>
                                        <input type='password' id='inputPassword' class='form-control' placeholder='Password' required />
                                        <label for='inputPassword'>Password</label>
                                    </div>

                                    <div class='custom-control mb-3'>
                                        <label>Already a member?</label>
                                    </div>
                                    <button class='btn btn-lg btn-primary btn-block text-uppercase' type='submit'>Sign up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;