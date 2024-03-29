import Image from "next/image";

export default function Home() {
  return (
    <main className="relative w-[1440px] h-[3217px] bg-gray-100">
      <div className="absolute w-[1440px] h-[784px] left-0 top-0">
        <div className="absolute w-[1392px] h-[771px] left-[24px] top-[24px]">
          <h1 className="absolute w-[15px] h-[48px] left-[1280px] top-[690px]  text-[12px] leading-[14px] uppercase text-black transform -rotate-90">scroll</h1>
          <div className="absolute w-0 h-[90px] left-[1242px] top-[690px] border-[1px] border-solid border-black transform rotate-10"></div>
          <h1 className="absolute w-[736px] h-[140px] left-[160px] top-[191px] font-bold  text-[56px] leading-[76px] text-black">
            Hi, <span className="w-[291px] h-[10px] left-[245px] top-[233px] bg-[#A8B4FF]">I’m Saqlain</span> ,<br /> Web & App Designer
          </h1>
          
          <div className="absolute w-[209px] h-[67px] left-[163px] top-[562px]">
            <div className=" w-[201px] h-[59px] left-[163px] top-[562px] bg-black">
              <p className="text-white text-center py-4">see my work</p>
              <div className="  w-[201px] h-[59px] left-[171px] ml-[10px] -mt-[50px] border-2 border-black"></div>
            </div>
          </div>

          <h1 className="absolute w-[84px] h-[25px] left-[163px] top-[56px] font-semibold  text-[20px] leading-[23px] "><span className="text-[#A8B4FF]">i</span>Saqlain</h1>
          <div className="absolute w-[77px] h-[24px] left-[1047px] top-[56px]">
            <p className=" w-[75px] h-[23px] left-[1047px] top-[56px] font-semibold text-[18px] leading-[21px] lowercase text-black">my work</p>
            <div className=" w-[75px] h-[12px]  left-[1049px] -mt-3 top-[56px] bg-[#A8B4FF]">
            <svg width="75" height="12" viewBox="0 0 75 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="75" height="12" fill="#A8B4FF"/>
            </svg>
            </div>
          </div>
          <div className="absolute w-[103px] h-[24px] left-[1171px] top-[56px]">
            <p className=" w-[112px] h-[23px] left-[1171px] top-[56px] font-semibold  text-[18px] leading-[21px] lowercase text-black">get In Touch</p>
            <div className=" w-[107px] h-[12px] left-[1173px] -mt-3 top-[68px] bg-[#A8B4FF]">
            <svg width="101" height="12" viewBox="0 0 101 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="101" height="12" fill="#A8B4FF"/>
            </svg>
            </div>
          </div>
          <p className="absolute w-[496px] h-[128px] left-[160px] top-[370px]  font-normal text-[18px] leading-[180%] text-black">I design and build beautiful websites and apps for <br /> businesses around the globe. If you need a modern and <br /> powerful website, send me an email. If we are a good fit, I <br /> will give you a time and cost estimate.</p>
          <div className="absolute w-[285px] h-[28px] left-[163px] top-[306px] bg-[#A8B4FF]">
            
          </div>
          <div className="box-border  w-[1392px] h-[744px] left-[24px] top-[24px] bg-[#EAECF9]">
          <svg width="1392" height="744" viewBox="0 0 1392 744" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="1392" height="744" fill="#EAECF9"/>
          </svg>
          </div>
        </div>
      </div>
      {/* About Section */}
      <div className="box-border absolute w-[1392px] h-[744px] left-[24px] -top-[10px] ">
        <div className="absolute w-[523px] h-[446px] left-[757px] top-[946px]">
          <img src="/chat app.jpg" alt="" />
        </div>
        <div className="absolute w-[101px] h-[187.97px] left-[736px] top-[1225px]">
          <img src="/dot pattern.svg" alt="" />
        </div>
        <div className="absolute w-[229px] h-[15px] left-[162px] top-[964px] font-['mulish'] font-bold text-[14px] leading-[109.3%] tracking-[0.2em] uppercase text-gray-400">latest work</div>
        <h1 className="absolute w-[415px] h-[76px] left-[160px] top-[987px] font-['abril-fatface'] font-normal text-[56px] leading-[76px] text-black mt-2">Domain website </h1>
        <div className="absolute w-[118px] h-[28px] left-[160px] top-[1083px]">
          <div className="bg-[#A8B4FF] w-[118px] h-[28px]">
          <p className=" left-[170px]   w-[110px] h-[16px]  top-[1089px] pt-2 pl-2 font-bold  text-xs leading-tight capitalize text-black">website design</p>
          </div>
        </div>
        <div className="absolute w-[106px] h-[28px] left-[294px] top-[1083px]">
        <div className="bg-[#A8B4FF] w-[118px] h-[28px]">
          <p className=" left-[170px]   w-[99px] h-[16px]  top-[1089px] pt-2 pl-7 font-bold  text-xs leading-tight capitalize text-black">business</p>
          </div>
        </div>
        <div className="absolute w-[71px] ml-2 h-[28px] left-[416px] top-[1083px]">
        <div className="bg-[#A8B4FF] w-[118px] h-[28px]">
          <p className=" left-[170px]   w-[99px] h-[16px]  top-[1089px] pt-2 pl-7 font-bold  text-xs leading-tight capitalize text-black">concept</p>
          </div>
        </div>
        <p className="absolute w-[445px] h-[96px] left-[160px] top-[1143px] text-base leading-loose text-black">This is a homepage design for a concept project – a <br /> Domain Ragistrar Comapny. I have designed the <br /> page first.</p>
        <div className="absolute w-[209px] h-[67px] left-[160px] top-[1303px]">
        <div className=" w-[201px] h-[59px] left-[163px] top-[562px] bg-black">
              <p className="text-white text-center py-4">see this project</p>
              <div className="  w-[201px] h-[59px] left-[171px] ml-[10px] -mt-[50px] border-2 border-black"></div>
            </div>
        </div>
      </div>
      {/* About Section */}
      <div className="box-border absolute w-[1392px] h-[744px] left-[24px] top-[700px] ">
        <div className="absolute w-[523px] h-[446px] left-[757px] top-[946px]">
          <img src="/Team Mockup.jpg" alt="" />
        </div>
        <div className="absolute w-[101px] h-[187.97px] left-[736px] top-[1225px]">
          <img src="/dot pattern.svg" alt="" />
        </div>
        <div className="absolute w-[229px] h-[15px] left-[162px] top-[964px] font-['mulish'] font-bold text-[14px] leading-[109.3%] tracking-[0.2em] uppercase text-gray-400">latest work</div>
        <h1 className="absolute w-[522px] h-[126px] left-[160px] top-[987px] font-['abril-fatface'] font-normal text-[56px] leading-[76px] text-black mt-2">Luxery Clothing Brand </h1>
        <div className="absolute w-[118px] h-[28px] left-[160px] top-[1150px]">
          <div className="bg-[#A8B4FF] w-[118px] h-[28px]">
          <p className=" left-[170px]   w-[110px] h-[16px]  top-[1089px] pt-2 pl-2 font-bold  text-xs leading-tight capitalize text-black">website design</p>
          </div>
        </div>
        <div className="absolute w-[106px] h-[28px] left-[294px] top-[1150px]">
        <div className="bg-[#A8B4FF] w-[118px] h-[28px]">
          <p className=" left-[170px]   w-[99px] h-[16px]  top-[1089px] pt-2 pl-7 font-bold  text-xs leading-tight capitalize text-black">business</p>
          </div>
        </div>
        <div className="absolute w-[71px] ml-2 h-[28px] left-[416px] top-[1150px]">
        <div className="bg-[#A8B4FF] w-[118px] h-[28px]">
          <p className=" left-[170px]   w-[99px] h-[16px]  top-[1089px] pt-2 pl-7 font-bold  text-xs leading-tight capitalize text-black">concept</p>
          </div>
        </div>
        <p className="absolute w-[445px] h-[96px] left-[160px] top-[1200px] text-base leading-loose text-black">A full website design and build for a concept team <br /> collaboration platform. This website also includes a <br /> beautiful blog. I have built the website and the blog in <br /> Webflow which has one of the best CMS for blog hosting.</p>
        <div className="absolute w-[209px] h-[67px] left-[160px] top-[1390px]">
        <div className=" w-[201px] h-[59px] left-[163px] top-[562px] bg-black">
              <p className="text-white text-center py-4">see this project</p>
              <div className="  w-[201px] h-[59px] left-[171px] ml-[10px] -mt-[50px] border-2 border-black"></div>
            </div>
        </div>
      </div>
    </main>
  );
}
