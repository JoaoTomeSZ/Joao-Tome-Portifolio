import { useRef } from "react";
import emailjs, { send } from "@emailjs/browser";

const MailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_665zbku",
        "template_funomnj",
        form.current,
        "Af_6J_WEqPMPyM129"
      )
      .then(
        (result) => {
          console.log("Mensagem enviada!", result.text);
          alert("Message send succesfully!");
          form.current.reset();
        },
        (error) => {
          console.log("Erro ao enviar!", error.text);
          alert("There was an error sending the message!");
        }
      );
  };

  return (
    <div className=" p-5 lg:p-10 max-w-full w-full lg:border-2 rounded-2xl">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col text-center gap-5 max-w-full lg:p-5 font-extralight"
      >
        <label className="lg:text-5xl md:text-4xl text-2xl"> Name</label>
        <input type="text" name="from_name" required placeholder="Name:" className="shadow-2xl rounded-xl border-black/20 border-1 text-sm p-2 w-full"/>
        <label className="lg:text-5xl md:text-4xl text-2xl"> E-mail</label>
        <input type="email" name="reply_to" required placeholder="E-mail:" className="shadow-2xl rounded-xl border-black/20 border-1 text-sm p-2 w-full"/>
        <label className="lg:text-5xl md:text-4xl text-2xl">Message</label>
        <textarea name="message" required placeholder="Write me a message!:" className="shadow-2xl rounded-xl py-4 border-black/20 border-1 text-sm w-full text-start px-1"/>
        <button type="submit" className="w-full bg-[#4682B4] lg:py-2 rounded-2xl text-white cursor-pointer">Send!</button>
      </form>
    </div>
  );
};

export default MailForm;
