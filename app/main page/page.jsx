import Image from "next/image"
import LatestWork from "@/components/main page/latest-work";
import Layout from "@/components/Layout/page";

const MainPage = () => {
    return (
      <Layout>
      <section>

        <div className="flex justify-center items-center w-full bg-gray-50" style={{boxShadow:'0px 2px 4px rgba(0, 0, 0, 0.2)'}}>
          <div className="w-full flex justify-center pt-5">
              
              <div data-aos="fade-right" className="flex w-[16%] items-center justify-center flex-col text-left gap-3">
                  <h1 className="text-5xl w-full font-black lg:text-[3vw]">PYTHON</h1>
                  <p className="text-xs w-full text-stone-400 sm:text-[1.3vw]">Python developer who writes simple AI and TG bots.</p>
              </div>
              <div className="relative w-[50%] flex items-center justify-center">
                <Image className="object-cover" src={'/me.png'} width={700} height={600} />
              </div>
              <div data-aos="fade-left" className="w-[16%] flex items-center justify-center flex-col text-left gap-3">
                  <h1 className="text-5xl w-full font-black lg:text-[3vw]">CODER</h1>
                  <p className="text-xs w-full text-stone-400 sm:text-[1.3vw]"> Full-Stack developer who writes clean,elegant and efficient code.</p>
              </div>
              
          </div>
        </div>

        <div className="flex justify-center items-center p-20 h-auto w-full">
          <div className="p-3 w-full flex justify-center items-center flex-col">

            <div className="flex justify-center md:w-[70%] lg:w-[700px] text-center items-center w-[85%]">
              <div className="w-1/3 sm:w-[0%] border border-thin border-solid"></div>
              <h1 className="w-1/3 lg:text-1xl sm:text-[18px] sm text-xl text-stone-500">some of my latest work</h1>
              <div className="w-1/3 sm:w-[0%] border border-thin border-solid"></div>
            </div>
            
            <div data-aos='zoom-out-up' className="pt-5 md:flex-col items-center flex lg:w-[700px] justify-between w-[85%] gap-5">
              <LatestWork img={'/novation.png'} name={'Novation website'}/>
              <LatestWork img={'/hotel.png'} name={'Hotel website'}/>
              <LatestWork img={'/bendis.png'} name={'E-commerce website'}/>
            </div>

          </div>
        </div>

      </section>
      </Layout>
    );
  };
  
  export default MainPage;