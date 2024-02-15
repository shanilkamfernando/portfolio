import React from "react";

function AboutSection() {
  return (
    <div className="w-full">
      <div className="text-[#A9A9A9] font-extralight text-[18px] pb-[3rem]">
        About Me
      </div>
      <div className="text-[#DEDEDE]">
      <div className="lg:text-[28px] sm:text-[20px] font-regular w-[90%]">
        I'm Shanilka Fernando, a passionate Frontend Developer with 2 years of
        hands-on experience in crafting engaging web experiences. Armed with a
        BSc (Hons) in Software Engineering, I bring a blend of creativity and
        technical expertise to every project I undertake.
      </div>
      <div className="flex items-center gap-20">
        <div className="lg:text-[28px] sm:text-[20px] font-regular w-[70%] ">
          With a keen eye for design and a commitment to delivering clean,
          efficient code, I strive to exceed expectations and create impactful
          digital solutions that resonate with users. Let's collaborate and
          bring your ideas to life!
        </div>
        <div className="lg:text-[28px] sm:text-[20px] font-regular w-[30%]">
          <img src="/assets/Images/propic.png" alt="profilepic" />
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default AboutSection;
