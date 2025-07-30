// src/components/BrochureForm.tsx
"use client";

import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface BrochureFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const BrochureForm: React.FC<BrochureFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://pibitech-backend.onrender.com/log-download",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        const link = document.createElement("a");
        link.href = "/AI Product Developer Certification Program.pdf";
        link.download = "AI Product Developer Certification Program.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        onClose();
      } else {
        alert("Error submitting form");
      }
    } catch (error) {
      alert("Submission failed");
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-50 inset-0">
      <div className="flex items-center justify-center min-h-screen bg-black/50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md relative space-y-4">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-black"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <h2 className="text-xl font-semibold">Download Brochure</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />

            <Button type="submit" className="w-full">
              Submit & Download
            </Button>
          </form>
        </div>
      </div>
    </Dialog>
  );
};

export default BrochureForm;
