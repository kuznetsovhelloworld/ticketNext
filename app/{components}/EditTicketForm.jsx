"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EditTicketForm = () => {
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("submitted");
  };

  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem",
  };

  const [formData, setFormData] = useState(startingTicketData);

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>Create Your Ticket</h3>
        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />

        <label>Description</label>
        <textarea
          id="Description"
          name="Description"
          onChange={handleChange}
          required={true}
          value={formData.title}
          rows="5"
        />

        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Project Problem">Project Problem</option>
          <option value="Software Problem">Software Problem</option>
        </select>

        <label>Priority</label>
        <div>
          <inpit
            id="priority-1"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
        </div>
      </form>
    </div>
  );
};

export default EditTicketForm;
