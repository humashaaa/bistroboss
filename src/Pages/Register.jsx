import { useForm } from "react-hook-form";
import useAuth from "../useAuth/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import useAxiosSequreCommon from "../AxiosSequreCommon/useAxiosSequreCommon";

const Register = () => {
  const { createUser, updateUser, logOut, setUser, user } = useAuth();
  console.log(createUser);
  const axiosSequreCommon = useAxiosSequreCommon();
  const navigate = useNavigate();
  // const [user, setUser] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password, name, photo } = data;
    console.log(data);
    createUser(email, password).then((result) => {
      setUser({ ...user, photoURL : photo, displayName: name });
      console.log(user);

        updateUser(name, photo).then(() => {
      // user set on the database

          const userInfo = {
            name,
            email,
            photo
          };
          console.log(userInfo);
          axiosSequreCommon.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user added");
              toast.success("user info updated");
              reset(), navigate("/");
            }
          });
        });
    });
  };

  const validation = (value) => {
    if (!value) return "this field is required";
    if (value.length < 6) return "Password must be at least 6 characters long";
    if (!/[A-Z]/.test(value))
      return "Password must contain at least one uppercase letter";
    if (!/[a-z]/.test(value))
      return "Password must contain at least one lowercase letter";
    return true;
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-500">this field is required</span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-500">this field is required</span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
              {...register("photo")}
                type="text"
                placeholder="photo url"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", { validate: validation })}
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
              <label className="label">
                <p>
                  Already have an account?{" "}
                  <Link className="text-blue-500 underline" to="/login">
                    Sign in
                  </Link>
                </p>
              </label>
            </div>
            <input
              className="btn btn-primary bg-blue-400 hover:bg-blue-500 border-none text-white text-xl"
              type="submit"
              value="Register"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
