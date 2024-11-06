import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import emailjs from "emailjs-com"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    consent: false,
  })
  const [emailSent, setEmailSent] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    emailjs
      .send(
        "service_9eoswkl", // Substitua pelo seu Service ID
        "template_7wwqotr", // Substitua pelo seu Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "imsQyTXNu7ZhluMga" // Sua Public Key do EmailJS
      )
      .then((result) => {
        console.log("Email enviado:", result.text)
        setEmailSent(true)
        setFormData({ name: "", email: "", message: "", consent: false })
        setTimeout(() => setEmailSent(false), 3000)
      })
      .catch((error) => {
        console.error("Erro ao enviar o e-mail:", error)
      })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, duration: 0.5 },
      }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      id="contact"
    >
      <div className="md:w-full flex h-full justify-center items-center md:p-36 p-16 space-y-2 md:space-y-8">
        <Image width={300} height={0} src="/images/contact.png" alt="Contact" />
        <div className="w-full max-w-lg">
          <h1 className="text-4xl font-bold mb-8">Entrar em contato</h1>
          <form onSubmit={sendEmail} className="space-y-6">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-200 text-sm font-regular mb-2"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border-b-2 border-006FEE focus:outline-none bg-transparent focus:border-blue-600 transition duration-200"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-200 text-sm font-regular mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-b-2 border-006FEE focus:outline-none bg-transparent focus:border-blue-600 transition duration-200"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-200 text-sm font-regular mb-2"
              >
                Digite sua mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border-b-2 border-006FEE focus:outline-none bg-transparent focus:border-blue-600 transition duration-200"
              ></textarea>
            </div>
            <div className="mb-6 flex items-center">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
                className="mr-2"
              />
              <label htmlFor="consent" className="text-gray-700 text-sm">
                Aceito receber contato
              </label>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 text-white font-bold py-4 px-6 rounded hover:bg-blue-700 transition duration-200"
              >
                Enviar
              </button>
            </div>
          </form>
          {emailSent && (
            <div className="fixed top-0 left-0 w-full flex justify-center">
              <div className="bg-green-500 text-white text-center py-2 px-4 rounded">
                Email enviado com sucesso!
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
