import Layout from "@/components/Layout/page"
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <Layout>
        <section className="flex items-center justify-center pt-[100px] flex-col ">

            <div className="w-full flex justify-center items-center box-shadow-borderr">
                <div className="flex gap-3 justify-between w-[72%] lg:flex-col">
                    <div data-aos="fade-right" className="w-2/5 sm-3/5 pm:w-4/5 flex flex-col gap-7">
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
            <div className="w-full flex justify-center items-center bg-gray-50 ">
                <div className="flex items-center justify-between w-[72%] pt-40 pb-40 lg:flex-col">
                    <div data-aos="fade-right" className="flex flex-col w-1/2 gap-10 lg:w-full">
                        <h1 className="text-4xl font-thin sm:text-3xl">Send me an email</h1>
                        <input type="text" placeholder="name" className="border w-[90%] lg:w-full pl-3 h-10"/>
                        <input type="email" placeholder="email" className="border w-[90%] lg:w-full h-10 pl-3"/>
                    </div>
                    <input data-aos="fade-left" type="text" placeholder="text" className="border w-[45%] pl-3 lg:w-full h-32 relative top-10"/>
                </div>
            </div>

        </section>
    </Layout>
  )
}

export default Contact