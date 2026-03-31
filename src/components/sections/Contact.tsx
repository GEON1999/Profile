"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import SectionTitle from "@/components/ui/SectionTitle";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const { register, handleSubmit, reset } = useForm<ContactFormData>();

  const onSubmit = () => {
    if (!formRef.current) return;
    setLoading(true);
    setStatus("idle");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_PROJECT_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setStatus("success");
        setLoading(false);
        reset();
      })
      .catch(() => {
        setStatus("error");
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#F9FAFB] border-t border-gray-200 scroll-mt-20"
    >
      <SectionTitle
        title="CONTACT"
        subtitle="Contact me in a convenient way"
      />

      <div className="section-container max-w-2xl">
        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <input
            {...register("name", { required: true })}
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full h-11 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900 bg-white transition-all"
          />
          <input
            {...register("email", { required: true })}
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full h-11 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900 bg-white transition-all"
          />
          <textarea
            {...register("message", { required: true })}
            name="message"
            placeholder="Your Message"
            required
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900 bg-white transition-all resize-none"
          />

          <div className="flex flex-col lg:flex-row-reverse justify-between items-start lg:items-center gap-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-gray-900 text-white py-2.5 px-8 rounded-lg hover:bg-gray-800 transition-colors disabled:bg-gray-400 text-sm font-medium"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            <div className="flex gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <span>phgst12@gmail.com</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <span>+82 10-7700-5140</span>
              </div>
            </div>
          </div>

          {status === "success" && (
            <p className="text-green-600 text-center text-sm mt-2">
              메시지가 성공적으로 전송되었습니다!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-center text-sm mt-2">
              전송에 실패했습니다. 다시 시도해 주세요.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
