"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

import { ArrowRight } from "lucide-react";
import { bungeeHairline, ubuntu } from "../../lib/fonts";
import ContactForm from "./ContactForm";

interface ContactBlockProps {
  className: string;
}
const ContactBlock = ({ className }: ContactBlockProps) => {
  const [showContact, setShowContact] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const [formHeight, setFormHeight] = useState(0);
  const [transOpacity, setTransOpacity] = useState(0);
  const [moveForm, setMoveForm] = useState(false);
  const [formOpacity, setFormOpacity] = useState(1);

  const formRef = useRef<HTMLDivElement>(null); // Reference to the contact form
  const phoneRef = useRef<HTMLDivElement>(null); // Reference to the contact form

  useEffect(() => {
    if (showContact && formRef.current) {
      setFormHeight(formRef.current.clientHeight);
      setTimeout(() => {
        formRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 700);
    }
  }, [showContact]);

  useEffect(() => {
    phoneRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [showPhone]);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#Contact") {
        setShowContact(true);
      } else {
        setShowContact(false);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div
      id="Contact"
      className={cn(
        "w-full flex flex-col gap-y-4  md:grid grid-cols-10 items-center justify-center border  p-4 bg-white",
        ubuntu.className,
        className
      )}
    >
      <div
        className={cn(
          "col-span-2 text-sm md:text-base text-center font-bold uppercase tracking-widest h-full border md:border-0 md:border-b-0 md:border-r border-gray-400 border-dashed  w-[50%] md:w-auto  p-2 flex items-center justify-center"
        )}
      >
        Contact
      </div>
      <div
        className={cn(
          "col-span-8 tracking-widest flex md:justify-start justify-center w-full relative flex-wrap px-4 gap-x-4 md:ml-2 font-light",
          bungeeHairline.className
        )}
        style={{
          wordSpacing: "8px",
        }}
      >
        {!showContact && (
          <p
            onClick={() => {
              setShowContact(true);
              setFormOpacity(1);
            }}
            className="flex items-center cursor-pointer py-3  text-sm"
            style={{ WebkitTextStroke: "1px black" }}
          >
            ø Quick contact <ArrowRight size="15" className="opacity-80" />
          </p>
        )}

        <div
          style={{
            position: "relative",
            maxHeight: showContact ? `${formHeight}px` : "0px",
            overflow: "hidden",
            transition:
              "max-height 0.5s ease-in-out,  opacity 0.2s ease-in-out",
            opacity: formOpacity,
            width: "100%",
          }}
        >
          <ContactForm
            moveForm={moveForm}
            setMoveForm={setMoveForm}
            setFormOpacity={setFormOpacity}
            ref={formRef}
            setShowContact={setShowContact}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactBlock;
