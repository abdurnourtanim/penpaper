import React from "react";
import FormButton from "./FormButton";
import Input from "./Input";

const SignupForm = ({ signupState }) => {
  const {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    handleSubmit,
    error,
  } = signupState;

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={username}
        setValue={setUsername}
        name="name"
        placeholder="Enter your name"
      />
      <Input
        type="email"
        value={email}
        setValue={setEmail}
        name="email"
        placeholder="Enter your email"
      />
      <Input
        type="password"
        value={password}
        setValue={setPassword}
        name="password"
        placeholder="Enter your password"
      />
      <Input
        type="password"
        value={confirmPassword}
        setValue={setConfirmPassword}
        name="confirmPassword"
        placeholder="Confirm password"
      />

      <FormButton type="submit">Sign up</FormButton>
      {error && (
        <div className=" mt-5 bg-purple-100 p-2 rounded">
          <span className="text-red-600"> {error} </span>
        </div>
      )}
      <div className="text-sm text-gray-500 text-center mt-3">
        By creating an account, you agree to the
        <a className="underline" href="#0">
          terms & conditions
        </a>
        , and our
        <a className="underline" href="#0">
          privacy policy
        </a>
        .
      </div>
    </form>
  );
};

export default SignupForm;
