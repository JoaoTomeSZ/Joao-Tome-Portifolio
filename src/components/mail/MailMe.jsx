import MailForm from "./MailForm"
import "./Mail.css"

export const MailMe = () => {
  return (
    <section className="min-h-screen max-w-full flex justify-center items-center bg-[#001F3F] p-5">
        <div className="max-w-[1024px] flex w-full max-h-full h-full text-4xl bg-white lg:p-10 rounded-4xl lg:flex-nowrap flex-wrap-reverse">
            <MailForm/>
            <div className="lg:text-8xl md:text-6xl text-4xl font-bold text-[#4682B4] w-full flex items-center text-center justify-center p-2"><h1 className="vertical-text ">Mail me!</h1></div>
        </div>
    </section>
  )
}

export default MailMe