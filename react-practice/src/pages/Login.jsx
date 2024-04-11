import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Loading from "../components/Loading";
import "../css/register_login.css";

function Login({ setIsLoggedIn }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();

  const onSubmit = async (data, e) => {
    setLoading(true);
    e.preventDefault();
    const url = `https://api-sandbox.thekono.com/KPI2/users/login`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          platform: "kono",
          account: data.email,
          validator: data.password,
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        console.log("Login successful");
        localStorage.setItem("kono-token", responseData.token);
        setIsLoggedIn(responseData.token);
        navigate("/");
      } else {
        console.error(responseData.error);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const email = watch("email");
  const password = watch("password");

  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className='register_login-wrap'>
      <div className='register_login-form-title'>
        <h2 className='register_login-title'>登入</h2>
        <p className='register_login-message'>
          還沒有 Kono 帳戶？
          <Link className='register_login-link' to='/register'>
            建立帳戶
          </Link>
        </p>
      </div>

      <hr className='register_login-line' />

      <form className='register_login-form' onSubmit={handleSubmit(onSubmit)}>
        <div className='register_login-input-info'>
          <label className='register_login-label' htmlFor='email'>
            帳號
          </label>
          <input
            type='email'
            placeholder='example@mail.com'
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div className='register_login-input-info'>
          <label className='register_login-label' htmlFor='password'>
            密碼
          </label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder='輸入密碼'
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          <button
            className='register_login-show-password-button'
            type='button'
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <img src='/eye-hide.svg' alt='hide password' />
            ) : (
              <img src='/eye-show.svg' alt='show password' />
            )}
          </button>
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <Link className='password-reset-link' to='/'>
          忘記密碼
        </Link>

        <button
          className={
            email && password
              ? "register_login-submit-success"
              : "register_login-submit-disable"
          }
          type='submit'
          disabled={loading}
        >
          確定
        </button>
      </form>
      {loading && <Loading />}
    </div>
  );
}

export default Login;
