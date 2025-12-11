import React, { useState } from "react";

const userForm = () => {
     const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8080/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("User saved successfully!");
    } else {
      alert("Error saving user");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "300px" }}>
      <h3>Create User</h3>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
      /><br /><br />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
      /><br /><br />

      <input
        type="number"
        name="age"
        placeholder="Enter Age"
        value={formData.age}
        onChange={handleChange}
      /><br /><br />

      <button type="submit">Save User</button>
    </form>
  );
};

export default UserForm;

