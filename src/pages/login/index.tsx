import { FaUser,FaLock } from "react-icons/fa6";
import "./login.css"
import { useNavigate } from "react-router-dom";

const LoginForm =()=>{
    const go = useNavigate();
    return(
        <>
        <div className="login-body">
            <div className="wrapper">
                <form action="">
                    <h1>登入帳號</h1>
                    <div className="input-box">
                        <input type="text" placeholder="帳號" required/>
                        <FaUser className="icon"/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="密碼" required/>
                        <FaLock className="icon"/>
                    </div>

                    <div className="remember-forgot">
                        <label><input type="checkbox" />記住我</label>
                        <a href="#">忘記密碼?</a>
                    </div>

                    <button type="submit" onClick={()=>{go("/")}}>登入</button>

                    <div className="register-link">
                        <p>沒有帳號密碼? <a href="#">立刻註冊</a></p>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default function LoginPage (){
    return(
        <>
            <LoginForm />
        </>
    )
}