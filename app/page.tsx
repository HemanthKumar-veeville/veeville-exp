import type { Metadata } from "next";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Zap,
  Shield,
} from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const metadata: Metadata = {
  title: "Veeville Experiences - Welcome to Excellence",
  description:
    "Discover excellence with our innovative solutions. We provide top-tier services and products designed to elevate your business to new heights.",
  openGraph: {
    title: "Veeville Experiences - Welcome to Excellence",
    description:
      "Discover excellence with our innovative solutions. We provide top-tier services and products designed to elevate your business to new heights.",
    url: "https://www.veevillexp.com",
  },
  alternates: {
    canonical: "https://www.veevillexp.com",
  },
};

const experienceCards = [
  {
    gradient:
      "bg-[linear-gradient(180deg,rgba(75,125,214,1)_0%,rgba(39,207,246,1)_100%)]",
    title:
      "Collaborative filmmaking for leadership, project management, and communication",
    image: "/img/chatgpt-image-jul-2-2025-at-08-56-17-am-1.png",
    icons: true,
  },
  {
    gradient:
      "bg-[linear-gradient(180deg,rgba(180,25,152,1)_0%,rgba(255,164,238,1)_100%)]",
    title:
      "Storytelling adventures that unlock growth opportunities and creative problem-solving",
    image: "/img/chatgpt-image-jul-2-2025-at-10-03-38-am-1.png",
    whatNext: true,
  },
  {
    gradient:
      "bg-[linear-gradient(180deg,rgba(23,35,255,1)_0%,rgba(180,184,255,1)_100%)]",
    title:
      '"Olympics in the Aisles" - high-energy workplace wellness and team bonding',
    image: "/img/chatgpt-image-jul-2-2025-at-10-52-37-am-1.png",
    olympicsIcons: true,
  },
  {
    gradient:
      "bg-[linear-gradient(180deg,rgba(25,149,143,1)_0%,rgba(43,225,181,1)_100%)]",
    title:
      "Hands-on creativity with art materials to develop teamwork and innovation",
    image: "/img/chatgpt-image-jul-2-2025-at-10-32-09-am-1.png",
    artIcon: true,
  },
  {
    gradient:
      "bg-[linear-gradient(180deg,rgba(255,112,55,1)_0%,rgba(255,168,127,1)_100%)]",
    title:
      "Visual thinking through doodling to enhance team bonds and idea articulation",
    image: "/img/chatgpt-image-jul-2-2025-at-10-37-21-am-1.png",
    doodleIcon: true,
  },
  {
    gradient:
      "bg-[linear-gradient(180deg,rgba(250,0,0,1)_0%,rgba(238,169,169,1)_100%)]",
    title:
      "Strategic thinking and calculated risk-taking through engaging simulations",
    image: "/img/card-1.png",
    gameIcons: true,
  },
];

const promiseItems = [
  {
    number: "01",
    color: "text-[#fe36bd]",
    title: "Zero Powerpoints",
    description:
      "Seriously, haven't you seen them all already? We believe in experiences that stick, not slides that slip away.",
    icon: "/img/vector-34.svg",
  },
  {
    number: "02",
    color: "text-[#01b27b]",
    title: "Zero Jargon",
    description:
      "Seriously, haven't you seen them all already? We believe in experiences that stick, not slides that slip away.",
    icon: "/img/group-2.png",
  },
  {
    number: "03",
    color: "text-[#f39c12]",
    title: "100% Surprises",
    description:
      "When did you last leave a workshop talking about it for weeks? We design moments that delight and memories that matter.",
    icon: "/img/vector-35.svg",
  },
];

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Experience blazing-fast performance with our optimized solutions.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Your data is protected with enterprise-grade security measures.",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Get help from our team of experienced professionals 24/7.",
  },
];

const benefits = [
  "Increase productivity by up to 300%",
  "Reduce operational costs significantly",
  "Scale your business effortlessly",
  "Access premium features and tools",
];

const Header = () => (
  <header className="absolute w-[308px] h-[86px] top-11 left-[68px]">
    <img
      className="absolute w-[115px] h-6 top-[62px] left-0"
      alt="Group"
      src="/img/group.png"
    />
    <div className="absolute w-[308px] h-[57px] top-0 left-0">
      <img
        className="absolute w-[292px] h-[52px] top-0 left-0"
        alt="Group"
        src="/img/group-1.png"
      />
      <img
        className="absolute w-[26px] h-[57px] top-0 left-[282px]"
        alt="Vector"
        src="/img/vector-4.svg"
      />
    </div>
  </header>
);

const HeroSection = () => (
  <section className="relative w-full h-[921px] mt-[156px]">
    <div className="absolute w-full h-[862px] top-1.5 left-0 bg-[#7bcdec]" />
    <blockquote className="absolute w-[1307px] top-[111px] left-[43px] [font-family:'Georgia-Regular',Helvetica] font-normal text-black text-[145px] text-center tracking-[-7.25px] leading-[159.5px]">
      &#34;It took me four years to paint like Raphael, but a lifetime to paint
      like a child.&#34;
    </blockquote>
    <cite className="absolute top-[727px] left-[1133px] [font-family:'Georgia-Regular',Helvetica] font-normal text-black text-[32px] text-center tracking-[-1.60px] leading-[35.2px]">
      -Pablo Picasso
    </cite>
    <img
      className="absolute w-[181px] h-[124px] top-[203px] left-[46px]"
      alt="Objects"
      src="/img/objects-1.svg"
    />
    <img
      className="absolute w-[358px] h-[243px] top-[678px] left-[801px]"
      alt="Objects"
      src="/img/objects.svg"
    />
    <img
      className="absolute w-[91px] h-[145px] top-0 left-[1349px]"
      alt="Group"
      src="/img/group-3.png"
    />
    <img
      className="absolute w-[51px] h-[53px] top-[607px] left-[261px]"
      alt="Vector"
      src="/img/vector-37.svg"
    />
    <img
      className="absolute w-28 h-[106px] top-[414px] left-[1272px]"
      alt="Vector"
      src="/img/vector-36.svg"
    />
    <img
      className="absolute w-px h-px top-[785px] left-[219px]"
      alt="Vector"
      src="/img/vector.svg"
    />
    <img
      className="absolute w-px h-px top-[796px] left-[203px]"
      alt="Vector"
      src="/img/image.svg"
    />
    <img
      className="absolute w-px h-px top-[778px] left-[225px]"
      alt="Vector"
      src="/img/vector-2.svg"
    />
    <img
      className="absolute w-px h-px top-[785px] left-[219px]"
      alt="Vector"
      src="/img/vector-3.svg"
    />
    <img
      className="absolute w-0.5 h-[15px] top-[581px] left-72"
      alt="Vector"
      src="/img/vector-38.svg"
    />
    <img
      className="absolute w-2.5 h-[13px] top-[589px] left-[257px]"
      alt="Vector"
      src="/img/vector-39.svg"
    />
    <img
      className="absolute w-[15px] h-[7px] top-[613px] left-[237px]"
      alt="Vector"
      src="/img/vector-40.svg"
    />
    <img
      className="absolute w-[15px] h-1.5 top-[641px] left-[234px]"
      alt="Vector"
      src="/img/vector-41.svg"
    />
    <img
      className="absolute w-2.5 h-[13px] top-[661px] left-[251px]"
      alt="Vector"
      src="/img/vector-42.svg"
    />
    <img
      className="absolute w-[3px] h-[15px] top-[671px] left-[280px]"
      alt="Vector"
      src="/img/vector-43.svg"
    />
    <img
      className="absolute w-2.5 h-[13px] top-[667px] left-[303px]"
      alt="Vector"
      src="/img/vector-44.svg"
    />
    <img
      className="absolute w-[15px] h-[7px] top-[650px] left-80"
      alt="Vector"
      src="/img/vector-45.svg"
    />
    <img
      className="absolute w-[15px] h-[5px] top-[623px] left-[323px]"
      alt="Vector"
      src="/img/vector-46.svg"
    />
    <img
      className="absolute w-[11px] h-3 top-[595px] left-[313px]"
      alt="Vector"
      src="/img/vector-47.svg"
    />
  </section>
);

const MainTagline = () => (
  <section className="mt-[212px] mx-[68px]">
    <h1 className="w-[800px] [font-family:'Georgia-Regular',Helvetica] font-normal text-[#465666] text-6xl tracking-[-1.80px] leading-[66.0px]">
      Where Grown-ups Remember How to Play
    </h1>
    <p className="w-[1282px] mt-[30px] [font-family:'Helvetica-Light',Helvetica] font-light text-[#7f8c8d] text-[25px] tracking-[-0.75px] leading-[27.5px]">
      What if your next team breakthrough happened not in a boardroom, but with
      clay in your hands? What if the solution to your biggest challenge emerged
      while you were laughing, creating, and completely forgetting you were
      &#39;learning&#39;?&#34;
    </p>
  </section>
);

const YellowCardSection = () => (
  <section className="mx-[68px] mt-[40px]">
    <Card className="w-[1307px] h-[439px] bg-[#ffea2f] rounded-[27px] border-none relative overflow-visible">
      <CardContent className="p-0">
        <div className="absolute w-[274px] top-80 left-[58px] [font-family:'Helvetica-Light',Helvetica] font-light text-[#e03258] text-[27px] tracking-[-0.81px] leading-[29.7px]">
          Where you re-learn how to learn like a 5-year-old
        </div>
        <div className="absolute w-[799px] top-[148px] left-[407px] [font-family:'Helvetica-Light',Helvetica] font-light text-black text-[32px] tracking-[-0.96px] leading-[35.2px]">
          You never learn better than when you don&#39;t know that you are
          learning. Through play, touch, wonder, and experimentation, we help
          teams unlearn biases, collaborate organically, and see challenges with
          fresh eyes.
        </div>
        <img
          className="absolute w-[285px] h-[263px] top-[55px] left-[42px]"
          alt="Layer"
          src="/img/layer-1-2.svg"
        />
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={`decoration-${index}`}
            className="absolute right-0"
            style={{ top: `${203 + index * 62}px` }}
          >
            <img
              className="absolute w-11 h-[75px] right-[46px]"
              alt="Clip path group"
              src={`/img/clip-path-group-${index === 0 ? "23" : "29"}.png`}
            />
            <img
              className="absolute w-[81px] h-[18px] right-[83px]"
              alt="Clip path group"
              src={`/img/clip-path-group-${index === 0 ? "24" : "30"}.png`}
            />
            <img
              className="absolute w-[67px] h-[62px] right-[82px] top-[13px]"
              alt="Vector"
              src={`/img/vector-${index === 0 ? "65" : "68"}.svg`}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  </section>
);

const PromiseSection = () => (
  <section className="mx-[68px] mt-[100px]">
    <h2 className="w-[800px] [font-family:'Georgia-Regular',Helvetica] font-normal text-[#465666] text-6xl tracking-[-1.80px] leading-[66.0px]">
      Our Promise
    </h2>
    <div className="flex flex-row justify-between mt-[50px]">
      {promiseItems.map((item, index) => (
        <div key={`promise-${index}`} className="flex flex-col max-w-[395px]">
          <div className="flex items-center">
            <img
              className="w-[38px] h-[38px]"
              alt={`Icon ${index + 1}`}
              src={item.icon}
            />
            <h3
              className={`ml-2 [font-family:'Georgia-Regular',Helvetica] font-normal text-[#465666] text-[43px] tracking-[-1.72px] leading-[43px]`}
            >
              {item.title}
            </h3>
          </div>
          <div
            className={`${item.color} [font-family:'Georgia-Regular',Helvetica] font-normal text-[95px] tracking-[-3.80px] leading-[95px] mt-[15px]`}
          >
            {item.number}
          </div>
          <p className="[font-family:'Helvetica_Neue-Light',Helvetica] font-light text-[#465666] text-[25px] tracking-[0] leading-[normal] mt-[15px]">
            {item.description}
          </p>
          {index === 0 && (
            <div className="relative w-[120px] h-[131px] mt-[20px] ml-auto">
              <img
                className="absolute w-20 h-[100px] top-0 left-[15px]"
                alt="Vector"
                src="/img/vector-14.svg"
              />
              <img
                className="absolute w-[34px] h-[22px] top-[25px] left-[86px]"
                alt="Clip path group"
                src="/img/clip-path-group-4.png"
              />
              <img
                className="absolute w-5 h-6 top-[30px] left-0"
                alt="Vector"
                src="/img/vector-15.svg"
              />
              <img
                className="absolute w-[21px] h-[35px] top-24 left-[29px]"
                alt="Clip path group"
                src="/img/clip-path-group-5.png"
              />
              <img
                className="absolute w-[17px] h-9 top-[95px] left-[60px]"
                alt="Clip path group"
                src="/img/clip-path-group-6.png"
              />
              <img
                className="absolute w-4 h-4 top-9 left-8"
                alt="Vector"
                src="/img/vector-16.svg"
              />
              <img
                className="absolute w-[18px] h-[17px] top-9 left-[50px]"
                alt="Vector"
                src="/img/vector-17.svg"
              />
              <img
                className="absolute w-[5px] h-[9px] top-[41px] left-[34px]"
                alt="Vector"
                src="/img/vector-18.svg"
              />
              <img
                className="absolute w-1 h-[7px] top-[41px] left-[52px]"
                alt="Vector"
                src="/img/vector-19.svg"
              />
              <div className="absolute w-[34px] h-4 top-[61px] left-[33px] bg-black rounded-[17px/8px] border-2 border-solid rotate-[-13.80deg]" />
              <div className="absolute w-[29px] h-[19px] top-[67px] left-[39px] rounded-[14.5px/9.5px] border-[55px] border-solid border-black" />
            </div>
          )}
          {index === 1 && (
            <div className="relative w-[82px] h-[133px] mt-[20px] ml-auto">
              <img
                className="absolute w-[47px] h-[114px] top-0 left-4"
                alt="Clip path group"
                src="/img/clip-path-group-11.png"
              />
              <img
                className="absolute w-[23px] h-[34px] top-16 left-0"
                alt="Clip path group"
                src="/img/clip-path-group-12.png"
              />
              <img
                className="absolute w-[22px] h-9 top-[62px] left-[60px]"
                alt="Clip path group"
                src="/img/clip-path-group-13.png"
              />
              <img
                className="absolute w-4 h-[34px] top-[99px] left-4"
                alt="Vector"
                src="/img/vector-27.svg"
              />
              <img
                className="absolute w-3.5 h-8 top-[101px] left-[43px]"
                alt="Clip path group"
                src="/img/clip-path-group-14.png"
              />
              <img
                className="absolute w-3.5 h-[17px] top-10 left-[26px]"
                alt="Vector"
                src="/img/vector-28.svg"
              />
              <img
                className="absolute w-4 h-[17px] top-10 left-[39px]"
                alt="Vector"
                src="/img/vector-29.svg"
              />
              <img
                className="absolute w-[25px] h-3 top-[71px] left-7"
                alt="Vector"
                src="/img/vector-30.svg"
              />
              <img
                className="absolute w-1.5 h-2 top-[43px] left-7"
                alt="Vector"
                src="/img/vector-31.svg"
              />
              <img
                className="absolute w-[7px] h-2 top-11 left-[42px]"
                alt="Vector"
                src="/img/vector-32.svg"
              />
              <img
                className="absolute w-[15px] h-[7px] top-[72px] left-9"
                alt="Vector"
                src="/img/vector-33.svg"
              />
            </div>
          )}
          {index === 2 && (
            <div className="relative w-[167px] h-[137px] mt-[20px] ml-auto">
              <img
                className="absolute w-[102px] h-[109px] top-0 left-6"
                alt="Clip path group"
                src="/img/clip-path-group-7.png"
              />
              <img
                className="absolute w-[78px] h-3.5 top-2 left-[42px]"
                alt="Vector"
                src="/img/vector-20.svg"
              />
              <img
                className="absolute w-[60px] h-[66px] top-12 left-[107px]"
                alt="Clip path group"
                src="/img/clip-path-group-8.png"
              />
              <img
                className="absolute w-12 h-[35px] top-5 left-0"
                alt="Clip path group"
                src="/img/clip-path-group-9.png"
              />
              <img
                className="absolute w-[42px] h-[42px] top-[95px] left-[26px]"
                alt="Clip path group"
                src="/img/clip-path-group-10.png"
              />
              <img
                className="absolute w-[38px] h-[38px] top-[95px] left-[82px]"
                alt="Vector"
                src="/img/vector-21.svg"
              />
              <img
                className="absolute w-8 h-[33px] top-[52px] left-16"
                alt="Vector"
                src="/img/vector-22.svg"
              />
              <img
                className="absolute w-[13px] h-[27px] top-[22px] left-[81px]"
                alt="Vector"
                src="/img/vector-23.svg"
              />
              <img
                className="absolute w-[15px] h-[27px] top-[22px] left-[65px]"
                alt="Vector"
                src="/img/vector-24.svg"
              />
              <img
                className="absolute w-2 h-[9px] top-[27px] left-[67px]"
                alt="Vector"
                src="/img/vector-25.svg"
              />
              <img
                className="absolute w-2 h-2 top-7 left-[83px]"
                alt="Vector"
                src="/img/vector-26.svg"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  </section>
);

const ExperienceMenuSection = () => (
  <section className="mx-[68px] mt-[30px]">
    <h2 className="w-[1282px] [font-family:'Georgia-Regular',Helvetica] font-normal text-[#465666] text-[46px] tracking-[-1.38px] leading-[50.6px]">
      Our Experience Menu
    </h2>
    <div className="grid grid-cols-3 gap-6 mt-[50px]">
      {experienceCards.map((card, index) => (
        <Card
          key={`experience-${index}`}
          className={`w-[420px] h-[556px] ${card.gradient} rounded-[27px] border-none relative overflow-hidden`}
        >
          <CardContent className="p-0 h-full flex flex-col items-center">
            {card.whatNext && (
              <img
                className="w-[164px] h-[135px] mt-[30px]"
                alt="What next"
                src="/img/what-next-1.png"
              />
            )}
            {card.artIcon && (
              <img
                className="w-[101px] h-32 mt-[33px]"
                alt="Layer"
                src="/img/layer-1.svg"
              />
            )}
            {card.doodleIcon && (
              <>
                <img
                  className="w-[305px] h-[68px] mt-14"
                  alt="Vector"
                  src="/img/vector-79.svg"
                />
                <img
                  className="w-[305px] h-[68px] mt-[-68px]"
                  alt="Group"
                  src="/img/group-8.png"
                />
              </>
            )}
            {card.olympicsIcons && (
              <>
                <img
                  className="w-[117px] h-[97px] mt-[47px]"
                  alt="Layer"
                  src="/img/layer-1-1.svg"
                />
                <img
                  className="w-[169px] h-[22px] mt-[30px]"
                  alt="Vector"
                  src="/img/vector-74.svg"
                />
                <img
                  className="w-[125px] h-[5px] mt-[5px]"
                  alt="Vector"
                  src="/img/vector-75.svg"
                />
              </>
            )}
            {card.gameIcons && (
              <>
                <img
                  className="w-[119px] h-[141px] mt-[26px]"
                  alt="Image"
                  src="/img/image-6.png"
                />
                <div className="flex flex-col items-center mt-[-20px]">
                  <img
                    className="w-[15px] h-[15px] mb-[5px]"
                    alt="Vector"
                    src="/img/vector-72.svg"
                  />
                  <img
                    className="w-4 h-[21px] mb-[5px]"
                    alt="Vector"
                    src="/img/vector-73.svg"
                  />
                  <img
                    className="w-4 h-[15px] mb-[5px]"
                    alt="Vector"
                    src="/img/vector-71.svg"
                  />
                  <img
                    className="w-3.5 h-4 mb-[5px]"
                    alt="Vector"
                    src="/img/vector-70.svg"
                  />
                </div>
              </>
            )}
            {card.icons && (
              <div className="mt-[42px] flex flex-col items-center">
                <div className="flex space-x-2">
                  <img
                    className="w-[27px] h-[51px]"
                    alt="Vector"
                    src="/img/vector-56.svg"
                  />
                  <img
                    className="w-8 h-[43px] mt-[9px]"
                    alt="Vector"
                    src="/img/vector-58.svg"
                  />
                  <img
                    className="w-12 h-[57px] mt-[-1px]"
                    alt="Vector"
                    src="/img/vector-60.svg"
                  />
                  <img
                    className="w-[13px] h-12 mt-[11px]"
                    alt="Group"
                    src="/img/group-6.png"
                  />
                  <img
                    className="w-[34px] h-[34px] mt-[16px]"
                    alt="Vector"
                    src="/img/vector-59.svg"
                  />
                  <img
                    className="w-8 h-[47px] mt-[4px]"
                    alt="Vector"
                    src="/img/vector-57.svg"
                  />
                </div>
                <div className="w-72 h-[54px] mt-[5px]">
                  <div className="relative">
                    <img
                      className="absolute w-[31px] h-[46px] top-0.5 left-0"
                      alt="Vector"
                      src="/img/vector-48.svg"
                    />
                    <img
                      className="absolute w-[30px] h-[46px] top-1 left-8"
                      alt="Group"
                      src="/img/group-5.png"
                    />
                    <div className="absolute w-[59px] h-[47px] top-1 left-[63px]">
                      <img
                        className="absolute w-[31px] h-[47px] top-0 left-0"
                        alt="Vector"
                        src="/img/vector-49.svg"
                      />
                      <img
                        className="absolute w-[31px] h-[46px] top-0 left-7"
                        alt="Vector"
                        src="/img/vector-55.svg"
                      />
                    </div>
                    <img
                      className="absolute w-7 h-[47px] top-px left-[124px]"
                      alt="Vector"
                      src="/img/vector-50.svg"
                    />
                    <div className="absolute w-11 h-12 top-0 left-[152px]">
                      <img
                        className="absolute w-[13px] h-12 top-0 left-0"
                        alt="Group"
                        src="/img/group-4.png"
                      />
                      <img
                        className="absolute w-[31px] h-[46px] top-0.5 left-[13px]"
                        alt="Vector"
                        src="/img/vector-51.svg"
                      />
                    </div>
                    <img
                      className="absolute w-[31px] h-[54px] top-px left-[197px]"
                      alt="Vector"
                      src="/img/vector-54.svg"
                    />
                    <img
                      className="absolute w-[29px] h-[46px] top-[7px] left-[228px]"
                      alt="Vector"
                      src="/img/vector-52.svg"
                    />
                    <img
                      className="absolute w-[31px] h-[46px] top-[7px] left-[257px]"
                      alt="Vector"
                      src="/img/vector-53.svg"
                    />
                  </div>
                </div>
              </div>
            )}
            <div className="w-[362px] mt-[180px] mx-auto text-white text-[25px] text-center tracking-[-0.75px] leading-[27.5px] [font-family:'Helvetica-Light',Helvetica] font-light">
              {card.title}
            </div>
            <img
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-auto h-auto max-h-[400px]"
              alt="Experience illustration"
              src={card.image}
            />
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

const ContactFormSection = () => (
  <section className="w-full mt-[100px] bg-[#3498db] pt-[52px] pb-[52px] relative">
    <div className="mx-[68px]">
      <h2 className="w-[800px] [font-family:'Georgia-Regular',Helvetica] font-normal text-white text-6xl tracking-[-1.80px] leading-[66.0px]">
        Ready to Rediscover Wonder?
      </h2>
      <p className="w-[1282px] mt-[17px] [font-family:'Helvetica-Light',Helvetica] font-light text-white text-[25px] tracking-[-0.75px] leading-[27.5px]">
        Let&#39;s explore how your team can achieve extraordinary results
        through extraordinary experiences.
      </p>
      <div className="flex mt-[50px] gap-8">
        <div className="flex-1">
          <form className="space-y-8">
            <div>
              <label className="[font-family:'Helvetica-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-5">
                First Name
              </label>
              <Input className="mt-2 bg-transparent border-b border-t-0 border-l-0 border-r-0 rounded-none focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0 text-white" />
            </div>
            <div>
              <label className="[font-family:'Helvetica-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-5">
                Email
              </label>
              <Input className="mt-2 bg-transparent border-b border-t-0 border-l-0 border-r-0 rounded-none focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0 text-white" />
            </div>
            <div>
              <label className="[font-family:'Helvetica-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-5">
                Approximate Team Size
              </label>
              <Input className="mt-2 bg-transparent border-b border-t-0 border-l-0 border-r-0 rounded-none focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0 text-white" />
            </div>
            <div>
              <label className="[font-family:'Helvetica-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-5">
                What challenge or opportunity brings you here?
              </label>
              <Textarea
                className="mt-2 bg-transparent border-b border-t-0 border-l-0 border-r-0 rounded-none focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0 text-white min-h-[100px]"
                placeholder="Write your message.."
              />
            </div>
            <Button className="bg-[#e74c3c] hover:bg-[#c0392b] text-white rounded-[11px] h-[46px] px-6 [font-family:'Helvetica-Bold',Helvetica] font-bold">
              Send Message
            </Button>
          </form>
        </div>
        <div className="flex-1 relative">
          <img
            className="absolute w-[413px] h-[505px] top-0 left-[50px]"
            alt="Mask group"
            src="/img/mask-group.png"
          />
          <div className="absolute w-[201px] h-[187px] bottom-0 right-0">
            <img
              className="absolute w-[109px] h-[124px] top-0 left-[37px]"
              alt="Clip path group"
              src="/img/clip-path-group.png"
            />
            <img
              className="absolute w-[63px] h-[26px] top-14 left-32"
              alt="Vector"
              src="/img/vector-1.svg"
            />
            <img
              className="absolute w-[18px] h-4 top-[52px] left-[183px]"
              alt="Clip path group"
              src="/img/clip-path-group-1.png"
            />
            <img
              className="absolute w-[55px] h-[50px] top-[27px] left-0"
              alt="Clip path group"
              src="/img/clip-path-group-2.png"
            />
            <img
              className="absolute w-3.5 h-[76px] top-[111px] left-[78px]"
              alt="Clip path group"
              src="/img/clip-path-group-3.png"
            />
            <img
              className="absolute w-12 h-[62px] top-[113px] left-[108px]"
              alt="Vector"
              src="/img/vector-2-2.svg"
            />
            <img
              className="absolute w-[18px] h-[23px] top-[58px] left-[98px]"
              alt="Vector"
              src="/img/vector-3-2.svg"
            />
            <img
              className="absolute w-5 h-[25px] top-[59px] left-[73px]"
              alt="Vector"
              src="/img/vector-10.svg"
            />
            <img
              className="absolute w-[39px] h-[19px] top-[88px] left-[83px]"
              alt="Vector"
              src="/img/vector-11.svg"
            />
            <img
              className="absolute w-3 h-[13px] top-[63px] left-[76px]"
              alt="Vector"
              src="/img/vector-12.svg"
            />
            <img
              className="absolute w-2.5 h-3 top-[63px] left-[100px]"
              alt="Vector"
              src="/img/vector-13.svg"
            />
          </div>
        </div>
      </div>
    </div>
    <footer className="absolute bottom-0 left-0 w-full">
      <div className="w-full h-[52px] bg-white flex items-center">
        <div className="mx-[67px] flex justify-between items-center w-full">
          <div className="[font-family:'Helvetica-Regular',Helvetica] font-normal text-[#465666] text-[19px] tracking-[-0.57px] leading-[20.9px]">
            <span className="tracking-[-0.11px]">
              Contact Information: experiences/veeville |{" "}
            </span>
            <a
              href="mailto:getpersonal@veeville.com"
              rel="noopener noreferrer"
              target="_blank"
              className="tracking-[-0.11px] underline"
            >
              getpersonal@veeville.com
            </a>
            <span className="tracking-[-0.11px]"> | </span>
            <a
              href="http://veevillexp.com"
              rel="noopener noreferrer"
              target="_blank"
              className="tracking-[-0.11px] underline"
            >
              veevillexp.com
            </a>
          </div>
          <div className="flex items-center">
            <img
              className="w-[30px] h-[31px]"
              alt="Group"
              src="/img/group-7.png"
            />
            <div className="ml-6 flex">
              <img
                className="w-[7px] h-[7px]"
                alt="Vector"
                src="/img/vector-76.svg"
              />
              <img
                className="w-[7px] h-[22px] mt-2"
                alt="Vector"
                src="/img/vector-77.svg"
              />
              <img
                className="w-[22px] h-[22px] mt-2"
                alt="Vector"
                src="/img/vector-78.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  </section>
);

export default function HomePage() {
  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="254:2257"
    >
      <div className="bg-white overflow-hidden w-[1440px] relative">
        <Header />
        <HeroSection />
        <MainTagline />
        <YellowCardSection />
        <PromiseSection />
        <ExperienceMenuSection />
        <ContactFormSection />
      </div>
    </div>
  );
}
