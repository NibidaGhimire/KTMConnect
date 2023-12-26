import { useRef, useState } from "react";
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { slideIn } from "../utils/motion";





const Contact = () => {

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "KTMConnect",
        from_email: form.email,
        to_email: "nibidaghimire39@gmail.com",
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setLoading(false);
        alert("Thank you for sending a message. I will get back to you soon. :)")

        setForm({
          name: "",
          email: "",
          message: ""
        })
      }, (error) => {
        setLoading(false)
        console.log(error);
        alert("Something went wrong.")
      })

  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 items-center justify-center overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[1] bg-black-100 p-8 rounded-2xl"
      >
        <h3 className={styles.sectionHeadText}>Contact Us</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-sec text-white rounded-lg outline-none border-none"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-sec text-white rounded-lg outline-none border-none"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"

              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-sec text-white rounded-lg outline-none border-none"
            />
          </label>

          <div className="flex justify-between items-center ">
            <button
              type="submit"
              className="bg-black py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </motion.div>



    </div>
  )
}

export default SectionWrapper(Contact, "contact");