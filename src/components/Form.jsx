import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const getIsFormValid = () => {
    return (
      firstName.trim() &&
      lastName.trim() &&
      email.includes("@") &&
      message.trim()
    );
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Tu mensaje fue enviado con éxito!");
    clearForm();
  };

  return (
    <div className="Form">
      <form
        className="border border-amber-300 p-4 rounded max-w-2xl mx-auto"
        onSubmit={handleSubmit}
      >
        <fieldset>
         

          <div className="Field mb-4">
            <label className="block text-white mb-1">
              Nombres <sup>*</sup>
            </label>
            <input
              className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-600"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Nombres"
            />
          </div>

          <div className="Field mb-4">
            <label className="block text-white mb-1">
              Apellidos <sup>*</sup>
            </label>
            <input
              className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-600"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Apellidos"
            />
          </div>

          <div className="Field mb-4">
            <label className="block text-white mb-1">
              Correo Email <sup>*</sup>
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Correo Email"
            />
          </div>

          <div className="Field mb-6">
            <label className="block text-white mb-1">
              Detalle de tu proyecto <sup>*</sup>
            </label>
            <textarea
              className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-600"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Cuéntame un poco sobre tu proyecto"
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="inline-block w-full mt-4 px-6 py-3 bg-amber-300 text-black rounded-full text-xl font-bold hover:bg-amber-400 transition"
          >
            ¡Escribime ahora!
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Form;
