import React from "react";
import { useState } from "react";
import Container from "./container";
import { useFormspark } from "@formspark/use-formspark"
import validate from 'email-validator'

const FORMSPARK_FORM_ID = "agLuLWXq";

const Waitlist = () => {

  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID
  });

  const [email, setEmail] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(email)
    if (validate.validate(email)) {
      await submit({ email });
      alert("Form submitted");
    } else {
      alert("Please enter a valid email adress")
    }
  };

  return (
    <Container>
      <div 
      id="waitlist"
      className="flex text-center flex-col flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Ready to level up your writing?
          </h2>
          <p className="mt-2 font-medium text-center text-white text-opacity-90 lg:text-xl">
            Start today with Deepenlight
          </p>
        </div>
        <div className="flex flex-col lg:flex-row w-full justify-center gap-5 lg:gap-10 items-center">
          <input
          placeholder="example@deepenlight.com" 
          className="focus:placeholder-transparent lg:text-lg text-center bg-white border-gray-200 border text-gray-800 p-3 lg:p-4 w-full md:w-3/4 lg:w-1/2 rounded-md" type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>

          <div className="flex-shrink-0 text-center lg:w-auto">
            <button
              disabled={submitting}
              onClick={onSubmit}
              className="inline-block py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5 ">
              Join the waitlist
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Waitlist;