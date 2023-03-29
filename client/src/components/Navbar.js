import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={
          (props.transparent
            ? "top-0 absolute z-50 w-full"
            : "relative shadow-lg bg-white") +
          " flex flex-wrap items-center justify-between px-2 py-3 "
        }
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between">
            <Link
              className={
                (props.transparent ? "text-white" : "text-gray-800") +
                " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              }
              to="/"
            >
              Home
            </Link>

            <Button type="button" onClick={props.logout}>
              Logout
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}
