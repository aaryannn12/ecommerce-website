function Login() {
  return (
    <div className="auth">

      <form>

        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button>
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;