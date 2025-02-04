"use client";
import { data } from "framer-motion/client";
import { useState } from "react";

const ApiActions = () => {
  const [status, setStatus] = useState("");

  const handleConceirgeEmail = async (request: {
    email: string;
    name: string;
    subject: string;
    phone: string;
  }) => {
    try {
      const response = await fetch("/api/sendConceirgeEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: request.email,
          subject: request.subject,
          name: request.name,
          phone: request.phone,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus("Email sent successfully!");
      } else {
        setStatus("Failed to send email.");
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred.");
    }
    return data;
  };

  const handleReportEmail = async (request: {
    email: string;
    phone: string;
    fname: string;
    lname: string;
    location: string;
    investment: string;
    startRange: number;
    endRange: number;
    code: string;
  }) => {
    try {
      const response = await fetch("/api/sendReportEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: request.email,
          phone: request.phone,
          fname: request.fname,
          lname: request.lname,
          location: request.location,
          investment: request.investment,
          startRange: request.startRange,
          endRange: request.endRange,
          code: request.code,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus("Email sent successfully!");
      } else {
        setStatus("Failed to send email.");
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred.");
    }
    return data;
  };
  return {
    handleConceirgeEmail,
    handleReportEmail,
    status,
  };
};

export default ApiActions;
