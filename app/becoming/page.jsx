import Layout from "../../components/Layout/page";
import Image from "next/image";

const Story = () => {
  return (
    <Layout>
    <section className="flex items-center justify-center pt-[100px] flex-col pb-[100px]">

      <div className="w-full flex justify-center items-center">
        <div className="flex items-center w-[640px] border-b pb-20 md:w-[90%]">

          <div className="flex flex-col gap-8 font-light">
            <h1 className="text-5xl pm:text-4xl">How I became a software engineer</h1>
            <h3 className="text-gray-500 text-xl">My coding career journey, key learnings and a bit more about me.</h3>
            <div className="flex gap-5 items-center">
              <Image style={{borderRadius:'50%'}} className=" border border-thin" src={'/me.png'} width={90} height={90}/>
              <h4>Faxraddin (Arthur)</h4>
            </div>
            <Image src={'/mine.png'} width={800} height={300}/>
            <p className="text-[20px] text-gray-600">Over the years, i wanted to make a portfolio website about me, about how I got into coding and built my career as a coder. I thought it was about time I wrote it down and shared my story. Don’t worry, I promise I won’t write about myself in the third person. 😉</p>
            <div>
              <h2 className="text-[20px]">Here’s what I’ll cover:</h2>
              <ul style={{ listStyleType: 'disc' }} className="text-[19px] relative top-5 gap-3 flex flex-col left-20">
                <li>Me in a nutshell</li>
                <li>Quick facts</li>
                <li>How I got into coding</li>
                <li>Key things I’ve learned</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="flex items-center w-[640px] border-b pb-14 md:w-[90%]">
          <div className="flex font-light flex-col gap-10 pt-14">
            <h1 className="text-4xl text-gray-700">Me in a nutshell</h1>
            <p className="text-[19px]">I’m a Azerbaijan-based software engineer that specialises in web-development. Since 14, I’ve worked at a range of startups, and corporations. I enjoy the challenge of solving complex customer problems and planning the user experience from the ground up, from research and discovery all the way through to the visual designs. </p>
            <p className="text-[19px]">I think it’s important to get regular screen downtime, so when I’m not pushing pixels, you’ll find me working on my pull-ups, drinking tea and watching movies, cooking up one of my favourite dishes, or hanging out with friends and family.</p>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="flex items-center w-[640px] border-b pb-14 md:w-[90%]">
          <div className="flex font-light flex-col gap-6 pt-14">

            <h1 className="text-4xl text-gray-700">Quick facts</h1>
            <div className="flex flex-col gap-2 mb-5">
              <h2 className="text-xl font-bold">Home</h2>
              <p className="text-xl">Azerbaijan 🇦🇿🦘</p>
            </div>
            <div className="flex flex-col gap-2 mb-5">
              <h2 className="text-xl font-bold">When I started as a designer</h2>
              <p className="text-xl">2018 (in my pyjamas from my bedroom in my parent’s house).</p>
            </div>
            <div className="flex flex-col gap-2 mb-5">
              <h2 className="text-xl font-bold">Specialties/Skills</h2>
              <p className="text-xl">Web development,Problem Solving,TypeScript,Clean Coding,SASS,Boostrap (Framework),Redux.js,React.js,Node.js,MongoDB,Express.js,Next.js,Python,AI</p>
            </div>
            <div className="flex flex-col gap-2 mb-5">
              <h2 className="text-xl font-bold">Hobbies</h2>
              <p className="text-xl">Gym, cooking, travelling, coding , reading. Does Netflixing on the couch with count? 😅</p>
            </div>
            <div className="flex flex-col gap-2 mb-5">
              <h2 className="text-xl font-bold">Favourite pastime</h2>
              <p className="text-xl">BBQ by the water family.Relaxing by sitting allone.</p>
            </div>
            <div className="flex flex-col gap-2 mb-5">
              <h2 className="text-xl font-bold">If I wasn’t a programmer</h2>
              <p className="text-xl">I’d be a astronout or an chef, or maybe both?</p>
            </div>
            <div className="flex flex-col gap-2 mb-5">
              <h2 className="text-xl font-bold">Favourite quote</h2>
              <p className="text-xl">“Become better every day,stay consistent.Because 0.1% * 365 == 36.5 but 0% * 365 == 0”.</p>
            </div>

          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="flex items-center w-[640px] border-b pb-14 md:w-[90%]">
          <div className="flex font-light flex-col gap-7 pt-14">

            <h1 className="text-4xl text-gray-700">How I got into coding</h1>
            <p className="text-[18px]">Ever since I was a child, I've had a deep love for art, craft, and the act of creating. Although I found these creative pursuits enjoyable, my self-image always leaned towards a non-regular job, perhaps within a large company, as I'm naturally inclined to introversion. However, by the time I was 15, I had already gained remarkable clarity about my future. I had been working as a waiter, and that experience made it abundantly clear that working under someone else wasn't the path for me.<br></br> <br></br>With unwavering determination and a well-defined plan, I set my sights on a career that resonated with my aspirations. This decision led me to pursue a path that felt absolutely right for me.</p>

          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="flex items-center w-[640px] border-b pb-14 md:w-[90%]">
          <div className="flex font-light flex-col gap-10 pt-14">
            <h1 className="text-4xl text-gray-700">Key things I’ve learned</h1>
            <p className="text-[18px]">Here are a few key takeaways I’ve learned over my years as a designer. They’ve come in handy for me, hopefully they’ll come in handy for you too.</p>

            <div className="flex flex-col gap-5">
              <h2 className="text-xl font-bold">Less is more</h2>
              <p className="text-[18px]">When it comes to coding a website, simplicity and efficiency are key. By minimizing complexity and focusing on essential elements, developers can create robust and user-friendly websites.</p>
              <p className="text-[18px]">For instance, consider a full-stack web developer building an e-commerce site. Instead of incorporating numerous intricate features that might overwhelm users, they might opt for a streamlined design with intuitive navigation. A simplified checkout process, clear product descriptions, and a responsive layout could be prioritized. This approach not only enhances the user experience but also streamlines the development process.</p>
              <p className="text-[18px]">Furthermore, keeping the codebase concise and well-structured is equally important. Implementing efficient algorithms, using modular and reusable components, and minimizing unnecessary code bloat are all part of the "less is more" philosophy in coding. This approach not only makes the website faster and more maintainable but also helps the developer to articulate and understand their design decisions. In full-stack web development, embracing simplicity can lead to a more effective and elegant end product.</p>
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="text-xl font-bold">Keep learning and challenging yourself</h2>
              <p className="text-[18px]">In any profession, it’s easy to stagnate and get comfortable. It’s important for me to read and absorb as much as I can to stay passionate about my craft and to continue to challenge myself and those around me. I try to set aside some time each morning to read and learn something new. </p>
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="text-xl font-bold">Done is better than perfect</h2>
              <p className="text-[18px]">If you’re like me, you’re probably a stickler for detail. This can however eat up valuable time and money, so I’ve learned that it’s usually better to get a product out there as soon as you can, learn from it and improve it over time. This isn’t an excuse to create crap, but more of a reminder that perfectionism can actually get in the way of designing a great product.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="flex items-center w-[640px] pb-14 md:w-[90%]">
          <div className="flex font-light flex-col gap-10 pt-14">
            <h1 className="text-2xl text-gray-800">If you’ve made it this far, I hope you’ve learned a little bit more about me and my journey as a coder. If you’ve got any questions or want to stay in touch.</h1>
          </div>
        </div>
      </div>

    </section>
    </Layout>
  )
}

export default Story;