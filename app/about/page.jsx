import Image from "next/image"
import Layout from "@/components/Layout/page"

const About = () => {
  return (
    <Layout>
    <section className="flex items-center justify-center pt-[100px] flex-col pb-[100px]"> 

        <div className="w-full flex justify-center items-center  box-shadow-borderr">
            <div className="flex items-center border-b w-[72%]">
                <div data-aos="fade-right" className="flex flex-col gap-7 w-full">
                    <h1 className="font-bold text-8xl">about</h1>
                    <h3 className="text-3xl w-[97%] text-gray-400">I'm a fullstack sofware engineer based in Baku,Azerbaijan.</h3>
                    <p className="w-[85%]">Since 15, I've enjoyed turning complex problems into simple, beautiful and intuitive code. When I'm not coding, you'll find me reading, sleeping or watching movies.</p>
                </div>
                <Image data-aos="fade-left" className="relative top-[0px] right-5" src={'/me.png'} width={1150} height={100}/>
            </div>
        </div>
        <div className="w-full flex justify-center items-center h-[600px] border box-shadow-borderr">
          <div className="flex justify-between items-center w-[72%]">
            <div className="w-[23%] flex items-center ">
              <div className="flex flex-col gap-3" data-aos="fade-up">
                <h1 className="text-3xl">Part Python Coder</h1>
                <span>Django</span>
                <span>Data Science</span>
                <span>AI</span>
                <span>Eating pizza</span>
                <span>TG bots</span>
              </div>
            </div>
            <div data-aos="fade-up" className="w-1/3 flex justify-center text-center items-center">
              <Image src={'/diagram.png'} width={400} height={100} className="mr-20"/>            
            </div>
            <div data-aos="fade-up" className="w-[23%] flex items-center">
              <div className="flex flex-col gap-3">
                <h1 className="text-3xl">Part Web-dev Coder</h1>
                <span >Full Stack development</span>
                <span>React.js</span>
                <span>Node.js</span>
                <span>Next.js</span>
                <span>"Making it pop"</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center border box-shadow-borderr">
          <div className="flex items-center w-[72%] pt-20 gap-[50px]">
            <Image data-aos='zoom-out-up' src={'/jeday.png'} width={570} height={200}/>
            <div data-aos='zoom-out-up' className="flex flex-col gap-3 relative -top-20">
              <h1 className="text-4xl">Random facts</h1>
              <p>I drink a lot of tea</p>
              <p>I'm into Web Development</p>
              <p>I love to cook (and eat)</p>
              <p>Watching movies is my zen time</p>
              <p>I'm a bit of a clean freak</p>
              <p>I want to live on Pandora</p>
              <p>I'm slightly addicted to Cinema</p>
              <p>Box is my mentor</p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center border box-shadow-borderr">
          <div className="flex flex-col items-center w-[72%] pt-20 gap-[50px]">
            <h1 data-aos="fade-left" className="relative top-10 left-[407px] text-3xl">My skills</h1>
            <Image data-aos="flip-down" src={'/2.png'} width={1020} height={100}/>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="flex  items-center w-[72%] pt-40 pb-10 gap-[50px]">
            <div data-aos="fade-right" className="w-[40%] gap-5 flex flex-col">
              <h1 className="text-4xl">My story</h1>
              <p className="text-gray-600">Learn a little bit more about me, how I got into coding, and how I'm bulding my career. I’ve included key things I've learned, book recommendations, and even some sneak peeks of the first websites I created.</p>
              <span>Read my story</span>
            </div>
            <Image data-aos="fade-left" src={'/view.png'} width={500} height={100}/>
          </div>
        </div>

    </section>
    </Layout>
  )
}

export default About