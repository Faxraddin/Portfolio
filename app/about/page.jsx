import Image from "next/image"

const About = () => {
  return (
    <section className="flex items-center justify-center pt-[100px] pb-[100px]"> 

        <div className="w-[70%]">
            <div className="flex items-center border-b">
                <div className="flex flex-col gap-7 w-full">
                    <h1 className="font-bold text-8xl">about</h1>
                    <h3 className="text-3xl w-[97%] text-gray-400">I'm a fullstack sofware engineer based in Baku,Azerbaijan.</h3>
                    <p className="w-[85%]">Since 15, I've enjoyed turning complex problems into simple, beautiful and intuitive code. When I'm not coding, you'll find me reading, sleeping or watching movies.</p>
                </div>
                <Image className="relative top-[0px] right-5" src={'/me.png'} width={1150} height={100}/>
            </div>
        </div>

    </section>
  )
}

export default About