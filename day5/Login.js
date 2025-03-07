import { login } from "../redux/auth";

const Login = () => {
  const handleLogin = () => {
    login("fakeToken");
    window.location.href = "/dashboard";
  };

  return <button onClick={handleLogin}>Login</button>;
};

export default Login;
