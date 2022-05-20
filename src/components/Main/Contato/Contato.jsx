import React from "react";
import { useState, useRef } from "react";
import "./style.css";
import emailjs from "emailjs-com";

const Contato = () => {
  const [formName, SetFormName] = useState("");
  const [formEmail, SetFormEmail] = useState("");
  const [formText, SetFormText] = useState("");
  const [emailError, SetEmailError] = useState(false);
  const [nameError, SetNameError] = useState(false);
  const [textError, SetTextError] = useState(false);

  const handleName = (e) => {
    const auxName = e.target.value;
    if (auxName.length < 35) SetFormName(auxName);
  };

  const handleNameError = () => {
    return !formName.length > 0;
  };

  const handleEmail = (e) => {
    const auxEmail = e.target.value;
    if (auxEmail.length < 35) SetFormEmail(auxEmail);
  };

  const handleEmailError = () => {
    const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    return !regex.test(formEmail);
  };

  const handleText = (e) => {
    SetFormText(e.target.value);
  };

  const handleTextError = () => {
    return !formText.length > 0;
  };

  const validateForm = () => {
    handleEmailError() ? SetEmailError(true) : SetEmailError(false);
    handleNameError() ? SetNameError(true) : SetNameError(false);
    handleTextError() ? SetTextError(true) : SetTextError(false);
  };

  const sendEmail = (e) => {
    if (emailError || nameError || textError) return null
    e.preventDefault();

    emailjs
      .sendForm(
        "service_km0ybuo",
        "template_enp1d1b",
        e.target,
        "QsOQtOhbVLiUyN3BN"
      )
      .then(
        (result) => {
          alert("Email enviado com sucesso!")
          SetFormName("")
          SetFormEmail("")
          SetFormText("")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="Contato" id="Contato" onSubmit={sendEmail}>
      <form>
        <h3>Contato</h3>
        <input
          placeholder="Nome"
          type="name"
          name="name"
          required
          style={
            nameError
              ? { borderBottom: "1px solid red" }
              : { borderBottom: "1px solid var(--secundary-color)" }
          }
          value={formName}
          onChange={(e) => {
            handleName(e);
          }}
        />
        <input
          placeholder="E-mail"
          title=""
          required
          style={
            emailError
              ? { borderBottom: "1px solid red" }
              : { borderBottom: "1px solid var(--secundary-color)" }
          }
          value={formEmail}
          onChange={(e) => {
            handleEmail(e);
          }}
          type="email"
          name="email"
        />
        <textarea
          id="message"
          name="message"
          required
          style={
            textError
              ? { borderBottom: "1px solid red" }
              : { borderBottom: "1px solid var(--secundary-color)" }
          }
          value={formText}
          onChange={(e) => {
            handleText(e);
          }}
          rows="10"
        ></textarea>
        <button type="submit" onClick={validateForm}>
          Enviar
        </button>
      </form>
    </section>
  );
};
export default Contato;
