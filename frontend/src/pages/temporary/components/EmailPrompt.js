import React, { useEffect, useRef, useState } from "react";

const defaultMessge = "⚡️Launching soon";
const errorString = "This email address doesn't seem valid";
const successMessage = "Awesome, thanks for tuning in!";
const emailExistedMessage = "This email address is already in our system";

let emailExisted = false;

const EmailPrompt = () => {
  const [message, setMessage] = useState(defaultMessge);
  const [submitFailed, setFailure] = useState(false);
  const [submitSuccess, setSuccess] = useState(null);
  const emailPrompt = useRef(null);
  const emailInput = useRef(null);
  const emailMessage = useRef(null);
  const submitBtn = useRef(null);

  const sendData = (email) => {
    const url =
      "https://gmail.us13.list-manage.com/subscribe/post?u=0d21a3ba7be6d4a85f6f25b07&amp;id=3958124cb6";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    };
    fetch(url, requestOptions)
      .then((response) => console.log("Submitted successfully"))
      .catch((error) => console.log("Form submit error", error));
  };

  const handleError = () => {
    setFailure(true);
    // setSuccess(false)
    setMessage(defaultMessge);
    emailPrompt.current.classList.add("error");
    emailInput.current.focus();
  };

  const handleSuccess = () => {
    setFailure(false);
    setSuccess(true);
    emailMessage.current.classList.add("fade-out");
    emailPrompt.current.classList.remove("error");
    emailInput.current.value = null;
    // submitBtn.current.disabled = true

    emailMessage.current.onanimationend = () => {
      setMessage(defaultMessge);
      setSuccess(false);

      setTimeout(() => {
        emailMessage.current.classList.remove("fade-out");
      }, 0);
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const emailAddress = emailInput.current.value;

    switch (true) {
      case !emailAddress.includes("@"):
        handleError();
        break;
      case emailAddress.length < 3:
        handleError();
        break;
      case emailExisted:
        setMessage(emailExistedMessage);
        handleSuccess();
        break;
      default:
        setMessage(successMessage);
        sendData(emailAddress);
        handleSuccess();
    }
  };

  const handleInputFocus = () => {
    // submitBtn.current.disabled = false
    // setSuccess(false)
  };

  return (
    <div ref={emailPrompt} className="email-prompt">
      <p ref={emailMessage} className="message">
        {message}
      </p>
      <form
        action="https://gmail.us13.list-manage.com/subscribe/post?u=0d21a3ba7be6d4a85f6f25b07&amp;id=3958124cb6"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        novalidate
      >
        <div id="mc_embed_signup_scroll">
          <div class="mc-field-group">
            <input
              disabled={submitSuccess ? true : false}
              ref={emailInput}
              onFocus={handleInputFocus}
              type="text"
              name="EMAIL"
              id="mce-EMAIL"
              placeholder="Enter your email"
            />
          </div>
          <div hidden="true">
            <input type="hidden" name="tags" value="6634229" />
          </div>
          <div id="mce-responses" class="clear foot">
            <div
              class="response"
              id="mce-error-response"
              style={{ display: "none" }}
            ></div>
            <div
              class="response"
              id="mce-success-response"
              style={{ display: "none" }}
            ></div>
          </div>
          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_0d21a3ba7be6d4a85f6f25b07_3958124cb6"
              tabindex="-1"
              value=""
            />
          </div>
          <input
            disabled={submitSuccess ? true : false}
            ref={submitBtn}
            className="submit-btn"
            type="submit"
            value={submitSuccess ? "Submitted" : "Keep me posted"}
          />
        </div>
      </form>
    </div>
  );
};

export default EmailPrompt;
