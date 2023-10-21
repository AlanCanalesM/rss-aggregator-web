import LoginPageStyles from './LoginPage.module.css'
import { useForm } from "react-hook-form"
import useUsers from '../../hooks/useUsers';



function LoginPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const { signin } = useUsers()

  const onSubmit = (data) => {

    signin(data.username, data.password)


  }
  return (
    <div className={LoginPageStyles.loginpage}>
      <div className={LoginPageStyles.lefthalf}></div>
      <div className={LoginPageStyles.righthalf}>
        <form className={LoginPageStyles.loginform} onSubmit={handleSubmit(onSubmit)}>
          <h2>Login</h2>
          <div className={LoginPageStyles.formgroup}>
            <label htmlFor="username">Username</label>
            <input type="text" {...register("username", { required: true })} />
            {errors.username && <span>This field is required</span>}
          </div>
          <div className={LoginPageStyles.formgroup}>
            <label htmlFor="password">Password</label>
            <input type="password" {...register("password", { required: true })} />
            {errors.password && <span>This field is required</span>}
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;