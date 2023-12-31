import  { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const handleSignUp = async e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const signUp = { email, password };
        console.log(signUp);

        try {
            const result = await createUser(email, password);
            console.log(result.user);
            const user = {email}
            fetch('http://localhost:5000/user', {
                method: 'POST',
                headers: {
                    "content-type" : ' application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
            })


        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
