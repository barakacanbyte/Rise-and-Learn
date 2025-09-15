import React, { useEffect, useState } from "react";

const TO_EMAIL = "riseandlearn01@gmail.com"; // ⟵ change to your inbox

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [showThanks, setShowThanks] = useState(false);
  const [composeHref, setComposeHref] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isValidEmail = (val) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(val.trim());

  const isValid = name.trim().length >= 2 && isValidEmail(email) && message.trim().length >= 10;

  const buildMailto = () => {
    const subject = `New contact from ${name}`;
    const body = `${message}

--

From: ${name} <${email}>
Source: Website contact form`;
    return `mailto:${encodeURIComponent(TO_EMAIL)}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;

    const href = buildMailto();
    setComposeHref(href);

    // Trigger the user's default email client
    window.location.href = href;

    // Show a friendly overlay and reset fields
    setShowThanks(true);
    setTimeout(() => {
      setShowThanks(false);
      setEmail("");
      setName("");
      setMessage("");
    }, 3000);
  };

  return (
    <section className="text-gray-600 body-font relative">
      {showThanks && (
        <div className="bg-white border-8 border-red-600 w-[300px] h-[500px] z-50 inset-0 absolute m-auto flex flex-col p-4 overflow-y-auto">
          <h1 className="text-2xl mb-4 text-red-500 font-bold text-center">
            Thanks for contacting us
          </h1>
          <p className="text-center">We’ll reply to you soon!</p>
          <span className="text-red-500 text-2xl mt-5">Email: </span>
          <span className="break-all">{email}</span>

          <p className="mt-4 mb-5 w-full">
            <span className="text-red-500 text-2xl mt-5">Message: </span>
            <br />
            {message}
          </p>

          {/* Fallback link if mail client didn’t open */}
          {composeHref && (
            <a
              href={composeHref}
              className="mt-auto text-center text-red-600 underline"
            >
              Didn’t see a compose window? Tap here to open your email app.
            </a>
          )}
        </div>
      )}

      <div className="absolute inset-0 bg-gray-300">
        <iframe
          title="map"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Dar%20es%20Salaam%20Tanzania+(Rise%20and%20Learn%20Foundation)&ie=UTF8&t=&z=12&iwloc=B&output=embed"
        ></iframe>
      </div>

      <div className="container px-5 py-24 mx-auto flex">
        <form
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
          noValidate
        >
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Contact Us
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Send your query through email.
          </p>

          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {name && name.trim().length < 2 && (
              <p className="mt-1 text-sm text-red-600">Please enter your full name.</p>
            )}
          </div>

          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {email && !isValidEmail(email) && (
              <p className="mt-1 text-sm text-red-600">Enter a valid email address.</p>
            )}
          </div>

          <div className="relative mb-6">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {message && message.trim().length < 10 && (
              <p className="mt-1 text-sm text-red-600">
                Please enter at least 10 characters.
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className="text-white bg-red-500 disabled:bg-red-300 disabled:cursor-not-allowed border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
          >
            Send
          </button>

          {/* Prebuilt mailto href for users who prefer to click explicitly */}
          <a
            href={isValid ? buildMailto() : undefined}
            onClick={(e) => {
              if (!isValid) e.preventDefault();
            }}
            className="mt-3 text-sm text-red-600 underline"
          >
            Or open your email app manually
          </a>
        </form>
      </div>
    </section>
  );
};

export default Contact;
