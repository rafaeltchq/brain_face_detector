import React, { useState } from 'react';

const Register = ({ onChangeRoute, setLoadUser }) => {
  const [ signupEmail, setSignupEmail ] = useState('')
  const [ signupPassword, setSignupPassword ] = useState('')
  const [ signupName, setSignupName ] = useState('')
  const emailChange = (event) => {
    setSignupEmail(event.target.value)
  }
  const passwordChange = (event) => {
    setSignupPassword(event.target.value)
  }
  const nameChange = (event) => {
    setSignupName(event.target.value)
  }
  const onSubmitRegister = () => {
    fetch('https://glacial-coast-14015.herokuapp.com/register', {
      method: 'post',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        name: signupName,
        email: signupEmail,
        password: signupPassword
      })
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.email === signupEmail) {
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
              <legend className="f4 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                <input className="pa2 input-reset ba bg-white w-100"
                type="text"
                name="user-name"
                id="user-name"
                  onChange={nameChange}
                />
              </div>
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
              {/* <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label> */}
            </fieldset>
            <div>
              <input className="b ph3 pv2 input-reset ba b--white white bg-transparent grow pointer f6 dib"
              type="submit"
              value="Register"
              onClick={onSubmitRegister} />
            </div>
          </div>
        </main>
    );
};

export default Register;