import useAuth from "../Auth/useAuth"

const userCredentials = {};

export default function LoginPage() {

    const {login} = useAuth();

    return (
        <div>
            <h1>Login</h1>
            <button className="btn btn-primary btn-block" onClick={() => login(userCredentials)}>Entrar</button>
        </div>
    )
}
