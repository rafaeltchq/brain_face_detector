import React, { useState } from 'react';
// import './signin.css';

const SignIn = ({ onChangeRoute, setLoadUser }) => {
  const [ signinEmail, setSigninEmail ] = useState('')
  const [ signinPassword, setSigninPassword ] = useState('')
  const emailChange = (event) => {
    setSigninEmail(event.target.value)
  }
  const passwordChange = (event) => {
    setSigninPassword(event.target.value)
  }
  const onSubmit = () => {
    fetch('https://glacial-coast-14015.herokuapp.com/signin', {
      method: 'post',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        email: signinEmail,
        password: signinPassword
      })
    })
      .then(resp => resp.json())
      .then((data) => {
        if (data.email === signinEmail) {
          onChangeRoute('home')
          setLoadUser({
            id: data.id,
            name: data.name,
            email: data.email,
            entries: data.entries,
            joined: data.joined
          })
        }
      })
      .catch(err => console.log(err))
  }
    return (
        <main className="white pa4 black-80">
          <div className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input className="pa2 input-reset ba bg-white w-100"
                type="email"
                name="email-address"
                id="email-address"
                  onChange={emailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input className="b pa2 input-reset ba bg-white w-100"
                type="password"
                name="password"
                id="password"
                  onChange={passwordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input onClick={onSubmit} className="b ph3 pv2 input-reset ba b--white white bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
            </div>
            <div className="lh-copy mt3">
              <p className="f6 link dim white db pointer" onClick={() => onChangeRoute('register')}>Register</p>
            </div>
          </div>
        </main>
    );
};

export default SignIn;