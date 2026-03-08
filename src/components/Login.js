import { useRef } from "react";
import { useForm } from 'react-hook-form';

export default function Login() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    let passRef = useRef();

    const user = {
        login: '',
        password: ''
    }

    const emailChanged = (e) => {
        console.log(e.target.value);
        user.login = e.target.value;
    }

    const onSubmit = (user) => {
        // e.PreventDefault();
        // console.log('Login clicked');
        // user.password = passRef.current.value;
        console.log(`Login data : ${user}`);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>

                    <label>Email</label>
                    {/* <input onChange={emailChanged} type="text" name="email" /> */}
                    <input {...register("email")} type="text" name="email" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" ref={passRef} />

                </div>

                <div>
                    <label></label>
                    <button type="submit">Login</button>
                </div>
            </form >
        </div >
    )
}