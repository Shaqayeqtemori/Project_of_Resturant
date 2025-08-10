import { useState } from "react";

function Contact(){
    const[formData,setFormData]=useState({
        name:"",
        email:"",
        massage:""
    });
    const takeChange =(e)=>{
        setFormData(prev=>({
            ...prev,
            [e.target.name]:e.target.value
        }));
    };
    const takeSubmit = async (e)=>{
        e.preventDefault();
        setFormData({ name: '', email: '', message: '' });
    };
  return (
    <div className="max-w-xl mx-auto mt-5 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl ml-[220px] font-bold mb-4 text-orange-700">Contact Us</h2>
      <form onSubmit={takeSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={takeChange}
          className="w-full border border-orange-300 rounded p-2"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={takeChange}
          className="w-full border border-orange-300 rounded p-2"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={takeChange}
          className="w-full border border-orange-300 rounded p-2"
          rows="2"
          required
        />
        <button
          type="submit"
          className="bg-orange-800 text-white px-4 py-2 rounded hover:bg-orange-700"
        >
          Send
        </button>
      </form>
    </div>
  );
}
export default Contact;