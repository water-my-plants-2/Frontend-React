import React, { useState } from "react"
import axiosWithAuth from "../util/axiosWithAuth"

function Login(props) {
    const [cred, setCred] = useState({
        credentials: {
        username: "",
        password: ""
        }
    })

    const handleChange = (e) => {
        setCred({
            credentials:  {...cred.credentials,
            [e.target.name]: e.target.value}
        })
    }

    const login = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post("/api/auth/login", cred.credentials)
            .then((res) => {
                localStorage.setItem("token", res.data.payload);
                props.history.push("/plantslist");
            })
            .catch((err) => {
                console.log("ERR", err);
            });
    }

    return (

        <div>

            <h1>Login</h1>
            <form onSubmit={(e) => login(e)}>
                <p>
                    <input
                        type="text"
                        name="username"
                        placeholder="UserName"
                        value={cred.credentials.username}
                        onChange={handleChange}
                    />
                </p>
                <p>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={cred.credentials.password}
                        onChange={(e) => handleChange(e)}
                    />
                </p>

                <p>
                    <input type="submit" value="Log in" />
                </p>
            </form>

        </div>
    );

}

export default Login;