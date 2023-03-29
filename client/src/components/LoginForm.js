import React from "react";
import FormButton from "./FormButton";
import Input from "./Input";

const LoginForm = ({ loginState }) => {
  const { email, setEmail, password, setPassword, handleSubmit, error } =
    loginState;

  return (
    <form>
      <Input
        value={email}
        setValue={setEmail}
        name="email"
        type="email"
        placeholder="Enter your email address"
      />
      <Input
        value={password}
        setValue={setPassword}
        name="password"
        type="password"
        placeholder="Enter Your Password"
      />
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <div className="flex justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="text-gray-600 ml-2">Keep me signed in</span>
            </label>
          </div>
        </div>
      </div>
      <FormButton onClick={handleSubmit} type="button">
        Sign in
      </FormButton>
      {error && (
        <div className=" mt-5 bg-purple-100 p-2 rounded">
          <span className="text-red-600"> {error} </span>
        </div>
      )}
    </form>
  );
};

export default LoginForm;
