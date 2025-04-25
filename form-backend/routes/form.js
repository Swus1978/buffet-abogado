const express = require("express");
const router = express.Router();
const Form = require("../models/Form");

// POST route to handle form submissions
router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;

    // Basic validation
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ error: "Todos los campos son requeridos" });
    }

    // Save to MongoDB
    const newForm = new Form({ firstName, lastName, email, message });
    await newForm.save();

    res.status(201).json({ message: "Formulario enviado con éxito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al guardar el formulario" });
  }
});

module.exports = router;
