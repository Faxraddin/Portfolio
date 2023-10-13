'use client'
import Layout from "@/components/Layout/page"
import Image from "next/image";
import Link from "next/link";
import { useState,React } from "react";

const initialValues = {
    email:"",
    message:""
};

const initialState = {values:initialValues};

const Contact = () => {
  const [state,setState] = useState(initialState);
  const {values} = state;
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value
      }
    }));
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      console.log(await response.json())

      if (response.status === 200) {
        alert('Thanks!')
        
      } else {
        console.log('error')
      }
    } catch (error) {
      console.log(error)
    }
  };


  return (
    <Layout>
        <section className="flex items-center justify-center pt-[100px] flex-col ">

            <div className="w-full flex justify-center items-center box-shadow-borderr">
                <div className="flex gap-3 justify-between w-[72%] lg:flex-col">
                    <div data-aos="fade-right" className="w-2/5 sm-3/5 pm:w-4/5 flex flex-col gap-7 relative top-10 lg:top-0">
                        <h1 className="text-8xl font-extrabold pm:text-5xl sm:text-6xl">contact.</h1>
                        <h3 className="text-2xl sm:text-xl text-gray-500">Get in touch with me via social media or email.</h3>
                        <div className="flex justify-between items-center">
                            <Link href={'https://www.instagram.com/faxraddinyzb/'}><Image className="hover:brightness-50 duration-500" width={160} height={50} src={'/instagram.png'}/></Link>
                            <Link href={'https://www.linkedin.com/in/faxraddin-yuzbashew-ab5849255/'}><Image className="hover:brightness-50 duration-500" width={150} height={50} src={'/linkedin.png'}/></Link>
                        </div>
                    </div>
                    <Image data-aos="fade-left" src={'/me.png'} width={600} height={100}/>
                </div> 
            </div>
            <div className="w-full flex justify-center items-center bg-gray-50">
                <form onSubmit={onSubmit} className="flex items-center justify-between w-[72%] pt-40 pb-40 flex-col">
                    <div className="w-full flex items-center justify-between lg:flex-col">
                        <div data-aos="fade-right" className="flex flex-col w-1/2 gap-10 lg:gap-5 lg:w-full">
                            <h1 className="text-4xl font-thin sm:text-3xl">Send me an email</h1>
                            <input type="text" name="name" placeholder="name" className="rounded-lg border w-[90%] lg:w-full pl-3 h-10"/>
                            <input type="email" name="email" onChange={handleChange} value={values.email} placeholder="email" className="border rounded-lg w-[90%] lg:w-full h-10 pl-3"/>
                        </div>
                        <input data-aos="fade-left" name="message" onChange={handleChange} value={values.message} type="text" placeholder="text" className="border w-[45%] rounded-lg pl-3 lg:w-full h-32 lg:top-6 relative top-10"/>
                    </div>
                    <button className="relative top-20 p-5 w-1/2 border text-2xl sm:text-xl rounded-3xl text-green-700 bg-transparent">Send</button>
                </form>
            </div>

        </section>
    </Layout>
  )
}

export default Contact;