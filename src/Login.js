import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css";
import {auth, provider} from "./firebase";
import {actionTypes} from "./reducer";
import {useStateValue} from "./StateProvider";

function Login() {
const [state,dispatch]=useStateValue();

const SignIn = () => {
    //Signin
    auth.signInWithPopup(provider)
    .then(result => {
        dispatch({
            type:actionTypes.SET_USER,
            user:result.user,
        });
           

        

        console.log(result)
    }).catch(error => alert(error.message));
}

    return (
        <div className="login">
            <div className="login__logo">
                <img 
                src="data:image/png;base64,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"
                />
                 <img 
                src="https://xploringindia.in/wp-content/uploads/2020/02/Earn-Money-For-Recoding-Audio-Yes-Facebook-Will-Pay-You-For-Your-Voice.jpg"
                />
            </div>
            <Button type="submit" onClick={SignIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
