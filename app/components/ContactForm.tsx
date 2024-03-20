"use client";

import { Button } from "@/components/ui/button";
import { SendHorizonal, Trash2, X } from "lucide-react";
import React, { SetStateAction, useState, useEffect } from "react";

import { inter } from "@/lib/fonts";
import { cn, sendEmail } from "@/lib/utils";

interface ContactFormProps {
  setShowContact: React.Dispatch<SetStateAction<boolean>>;
  setMoveForm: React.Dispatch<SetStateAction<boolean>>;
  setFormOpacity: React.Dispatch<SetStateAction<number>>;
  moveForm: boolean;
}

const ContactForm = React.forwardRef<HTMLDivElement, ContactFormProps>(
  (props, ref) => {
    const { setShowContact, setMoveForm, setFormOpacity, moveForm } = props;

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
      localStorage.setItem(`contactForm${name}`, value);
    };

    useEffect(() => {
      const fields = ["name", "email", "subject", "message"];
      const storedFormData = fields.reduce(
        (acc: { [key: string]: string }, field) => {
          const storedValue = localStorage.getItem(`contactForm${field}`);
          if (storedValue) acc[field] = storedValue;
          return acc;
        },
        {}
      );

      setFormData((prevState) => ({ ...prevState, ...storedFormData }));
    }, []);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const data = Object.fromEntries(formData.entries());

      sendEmail(data);

      setFormData({ name: "", email: "", subject: "", message: "" });

      const fields = ["name", "email", "subject", "message"];
      fields.map((field) => localStorage.removeItem(`contactForm${field}`));
      setShowContact(false);
    };

    const handleClear = () => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      const fields = ["name", "email", "subject", "message"];
      fields.map((field) => localStorage.removeItem(`contactForm${field}`));
      setShowContact(false);
    };

    const handleClose = () => {
      setMoveForm(true);
      setFormOpacity(0);
      setTimeout(() => {
        setMoveForm(false);
        setShowContact(false);
      }, 500);
    };

    return (
      <div ref={ref} className={cn("w-full  h-auto", inter.className)}>
        <div className="flex flex-col rounded">
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="grid gap-2 text-white text-sm w-[480px] lg:w-[700px] relative bg-black/85 p-6 rounded-se-[150px] rounded-es-[100px] "
          >
            <X
              className="cursor-pointer absolute top-[50px] right-[50px] text-white"
              size="28"
              onClick={handleClose}
            />
            <div className="grid gap-2 items-end">
              <input
                id="name"
                name="name"
                className={cn(
                  "border md:border-2 border-black rounded rounded-se-full p-2 pl-3 bg-white w-[60%] md:w-[33%] focus:outline-purple-500 focus:border-none",
                  formData.name && "bg-purple-500/20"
                )}
                type="text"
                onChange={handleChange}
                value={formData.name}
                placeholder="name"
                style={{ transition: "backgroundColor 1s ease-in-out" }}
              />

              <input
                name="email"
                className={cn(
                  "border md:border-2 border-black rounded rounded-se-full  p-2 pl-3 w-[80%] md:w-[66%] focus:outline-purple-500 focus:border-none",
                  formData.email && "bg-purple-500/40"
                )}
                type="text"
                onChange={handleChange}
                value={formData.email}
                placeholder="email"
              />
            </div>
            <div className="grid gap-2- items-end">
              <input
                name="subject"
                className={cn(
                  "border md:border-2 border-black rounded rounded-se-full p-2 pl-3  focus:outline-purple-500 focus:border-none",
                  formData.subject && "bg-purple-500/60"
                )}
                type="text"
                onChange={handleChange}
                value={formData.subject}
                placeholder="subject"
              />
            </div>
            <div className="flex justify-end">
              <textarea
                name="message"
                // className="border md:border-2 border-black rounded-3xl p-2 pb-24 pl-3  resize-none"

                className={cn(
                  " border md:border-2 border-black  rounded-b-3xl w-full p-2 pb-24 pl-3  resize-none focus:outline-purple-500 focus:border-none",
                  formData.message && "bg-purple-500/80"
                )}
                onChange={handleChange}
                value={formData.message}
                placeholder="Your words"
              ></textarea>
            </div>
            <div className="flex items-center justify-center gap-x-2 w-[80%] relative left-[12%]">
              <Button
                type="reset"
                onClick={handleClear}
                className="w-[35%] border md:border-2 border-black bg-white rounded-es-xl -mt-auto hover:bg-purple-500"
              >
                <Trash2 className="w-4 h-4 flex justify-right text-black" />
              </Button>

              <Button
                className="w-full border md:border-2 border-black bg-white rounded-ee-[100px] -mt-auto hover:bg-purple-500"
                type="submit"
              >
                <SendHorizonal className="w-4 h-4 flex justify-right text-black" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
);

ContactForm.displayName = "ContactForm";

export default ContactForm;
