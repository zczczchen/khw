import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../css/register_login.css";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    const url = `https://api-sandbox.thekono.com/KPI2//users/login`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      if (response.ok) {
        console.log("Login successful");
      } else {
        console.error(responseData.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const email = watch("email");
  const password = React.useRef({});
  password.current = watch("password", "");

  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const buttonStyle = {
    background: email && password ? "#00a270" : "#c7c7c7",
  };

  return (
    <div className='register_login-wrap'>
      <div className='register_login-form-title'>
        <h2 className='register_login-title'>註冊</h2>
        <p className='register_login-message'>
          已經有Kono帳戶？
          <Link className='register_login-link' to='/login'>
            登入帳戶
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

        <div className='register_login-input-info'>
          <label className='register_login-label' htmlFor='confirmPassword'>
            確認密碼
          </label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder='再次輸入密碼'
            {...register("confirmPassword", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
              validate: (value) => value === password.current || "密碼不一致",
            })}
          />
          <button
            className='register_login-show-password-button'
            onClick={toggleConfirmPasswordVisibility}
          >
            {showConfirmPassword ? (
              <img src='/eye-hide.svg' alt='hide password' />
            ) : (
              <img src='/eye-show.svg' alt='show password' />
            )}
          </button>
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <p className='register_remind'>
          註冊即表示已閱讀並同意 Kono 電子雜誌<span>會員服務條款</span>
        </p>

        <button
          className='register_login-submit'
          type='submit'
          style={buttonStyle}
          // disabled={!email || !password}
        >
          確定
        </button>
      </form>
    </div>
  );
}

export default Register;