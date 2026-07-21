"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import SectionTitle from "@/components/ui/SectionTitle";

type SubmitStatus = "idle" | "sending" | "success" | "error";

const EMAILJS_PROJECT_ID = process.env.NEXT_PUBLIC_EMAILJS_PROJECT_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current || status === "sending") return;
    if (!EMAILJS_PROJECT_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    emailjs
      .sendForm(
        EMAILJS_PROJECT_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(() => setStatus("success"))
      .catch(() => setStatus("error"));
  };

  return (
    <section
      id="contact"
      className="pt-36 pb-80 px-10 bg-[#F9FAFB] border-t border-[#999999] scroll-mt-24"
    >
      <SectionTitle
        title="CONTACT"
        subtitle="Contact me in a convenient way"
        className="mb-10"
      />

      <div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="max-w-md mx-auto mt-8 flex flex-col items-center"
        >
          <div className="mb-4">
            <label htmlFor="contact_name" className="sr-only">Your Name</label>
            <input
              name="name"
              type="text"
              id="contact_name"
              placeholder="Your Name"
              required
              className="w-[340px] lg:w-[626px] h-[40px] px-3 py-2 border border-[#999999] focus:outline-none focus:ring-1 focus:ring-black bg-transparent"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="contact_email" className="sr-only">Your Email</label>
            <input
              name="email"
              type="email"
              id="contact_email"
              placeholder="Your Email"
              required
              className="w-[340px] lg:w-[626px] h-[40px] px-3 py-2 border border-[#999999] focus:outline-none focus:ring-1 focus:ring-black bg-transparent"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="contact_message" className="sr-only">Your Message</label>
            <textarea
              name="message"
              id="contact_message"
              placeholder="Your Message"
              required
              rows={5}
              className="w-[340px] lg:w-[626px] h-[200px] px-3 py-2 border border-[#999999] focus:outline-none focus:ring-1 focus:ring-black bg-transparent"
            />
          </div>

          <div className="flex flex-col lg:flex-row-reverse justify-between w-[340px] lg:w-[626px] text-[12px] lg:text-[15px] space-y-4 lg:space-y-0">
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-black text-white py-2 lg:w-[138px] hover:bg-gray-800 transition-colors disabled:bg-gray-400"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            <div className="flex space-x-5 justify-between lg:justify-center items-left">
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000000"
                  aria-hidden="true"
                >
                  <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                </svg>
                <p>phgst12@gmail.com</p>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000000"
                  aria-hidden="true"
                >
                  <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                </svg>
                <p>+82 10-7700-5140</p>
              </div>
            </div>
          </div>

          <div aria-live="polite" className="mt-3">
            {status === "success" && (
              <p className="text-green-600 text-center" role="status">
                Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="text-red-600 text-center" role="alert">
                Failed to send message. Please try again.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
