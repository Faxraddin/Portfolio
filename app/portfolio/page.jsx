import Image from "next/image"
import LatestWork from "@/components/main page/latest-work"
import Layout from "@/components/Layout/page"

const Portfolio = () => {
  return (
    <Layout>
    <section className="flex items-center justify-center flex-col">
        

            <div className="pt-20 pb-20 w-full flex justify-center items-center box-shadow-borderr">
                <div className="flex gap-7  w-[72%] xl:flex-col">

                    <div data-aos="fade-right" className="flex flex-col gap-7">
                        <h1 className="text-8xl pm:text-5xl sm:text-6xl font-extrabold">portfolio.</h1>
                        <p className="text-2xl w-[97%] text-gray-400">Check out some of my latest works.</p>
                        <p className="text-1xl text-gray-600">I've worked at start-ups, tech companies and corporates on a range of different projects, including design systems, websites and apps.</p>
                    </div>

                    <Image data-aos="fade-left" src={'/portfolio.png'} width={600} height={100}/>

                </div>
            </div>
            <div className="pt-20 pb-20 w-full flex justify-center items-center bg-gray-50 box-shadow-borderr">
                <div className="flex items-center w-[76%]">

                    <div className="w-full flex justify-between gap-5 md:justify-center md:items-center md:flex-col">
                        <LatestWork img={'/hotel.png'} name={'Hotel website'}/>
                        <LatestWork img={'/hotel.png'} name={'Hotel website'}/>
                        <LatestWork img={'/hotel.png'} name={'Hotel website'}/>   
                    </div>
                </div>
            </div>

    </section>
    </Layout>
  )
}

export default Portfolio