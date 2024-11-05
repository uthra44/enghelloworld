"use client"; // Marking this component as a Client Component

import { useState } from "react";

// Google Form link for the exam
const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdY31urgsarb3K111iT9NmEct2ruR0SRqA_BPvXpiM4ZO8Gkg/viewform?embedded=true";

export default function ExamPage() {
  const [showForm, setShowForm] = useState(false); // State to control the visibility of the Google Form

  const handleExamClick = () => {
    setShowForm(true); // Show the Google Form when the button is clicked
  };

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Instruction Header */}
          <div className="pb-12 text-center">
            <h1 className="text-3xl font-semibold">Instructions for Taking the Exam - PYTHON</h1>
            <p className="mt-4 text-lg text-gray-600">
              Please click the button below to start the exam. Make sure you have a stable internet connection and set aside enough time to complete all questions.
            </p>
          </div>

          {/* Button to Take Exam */}
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={handleExamClick} // Show Google Form on button click
              className="btn w-full bg-gradient-to-t from-indigo-600 to-indigo-500 text-white shadow-md hover:bg-indigo-700"
            >
              Take the Exam
            </button>
          </div>

          {/* Google Form Embed */}
          {showForm && (
            <div className="mt-8">
              <h2 className="text-xl text-center font-semibold">Take the Exam</h2>
              <iframe
                src={googleFormUrl}
                width="100%"
                height="600"
                frameBorder="0"
                
                className="border rounded-lg shadow-lg"
                title="Google Form Exam"
              >
                Loading…
              </iframe>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
