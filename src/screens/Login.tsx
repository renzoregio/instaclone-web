import { isLoggedInVar } from "../apollo";
const Login = () => {
    return (
        <>
            <h1>Login Page</h1>
            <button onClick={() => isLoggedInVar(true)}>LOGIN</button>
        </>
    )
}

export default Login;