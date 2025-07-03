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
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareTwitter,
} from "react-icons/fa6";

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
  <header className="absolute w-full max-w-[308px] h-[86px] top-4 sm:top-8 lg:top-11 left-4 sm:left-8 lg:left-[68px] z-10">
    <img
      className="absolute w-[80px] sm:w-[100px] lg:w-[115px] h-4 sm:h-5 lg:h-6 top-[50px] sm:top-[55px] lg:top-[62px] left-0"
      alt="Group"
      src="/img/group.png"
    />
    <div className="absolute w-full max-w-[220px] sm:max-w-[260px] lg:max-w-[308px] h-[40px] sm:h-[48px] lg:h-[57px] top-0 left-0">
      <img
        className="absolute w-[200px] sm:w-[240px] lg:w-[292px] h-[35px] sm:h-[42px] lg:h-[52px] top-0 left-0"
        alt="Group"
        src="/img/group-1.png"
      />
      <img
        className="absolute w-[18px] sm:w-[22px] lg:w-[26px] h-[40px] sm:h-[48px] lg:h-[57px] top-0 right-0"
        alt="Vector"
        src="/img/vector-4.svg"
      />
    </div>
  </header>
);

const HeroSection = () => (
  <section className="relative w-full min-h-[600px] sm:min-h-[700px] lg:h-[921px] mt-[100px] sm:mt-[120px] lg:mt-[156px] overflow-hidden">
    <div className="absolute w-full h-full bg-[#7bcdec]" />
    <div className="relative z-10 px-4 sm:px-6 lg:px-0">
      <blockquote className="absolute w-full max-w-[280px] sm:max-w-[600px] lg:max-w-[1307px] top-[60px] sm:top-[80px] lg:top-[111px] left-1/2 transform -translate-x-1/2 lg:left-[43px] lg:transform-none [font-family:'Georgia-Regular',Helvetica] font-normal text-black text-[24px] sm:text-[60px] lg:text-[145px] text-center tracking-[-1.2px] sm:tracking-[-3px] lg:tracking-[-7.25px] leading-[28px] sm:leading-[66px] lg:leading-[159.5px]">
        &#34;It took me four years to paint like Raphael, but a lifetime to
        paint like a child.&#34;
      </blockquote>
      <cite className="absolute top-[400px] sm:top-[500px] lg:top-[727px] right-4 sm:right-8 lg:right-[307px] [font-family:'Georgia-Regular',Helvetica] font-normal text-black text-[16px] sm:text-[24px] lg:text-[32px] text-center tracking-[-0.8px] sm:tracking-[-1.2px] lg:tracking-[-1.60px] leading-[18px] sm:leading-[26px] lg:leading-[35.2px]">
        -Pablo Picasso
      </cite>
    </div>

    {/* Decorative elements - hidden on mobile for cleaner look */}
    <img
      className="hidden lg:block absolute w-[181px] h-[124px] top-[203px] left-[46px]"
      alt="Objects"
      src="/img/objects-1.svg"
    />
    <img
      className="hidden lg:block absolute w-[358px] h-[243px] top-[678px] left-[801px]"
      alt="Objects"
      src="/img/objects.svg"
    />
    <img
      className="hidden lg:block absolute w-[91px] h-[145px] top-0 left-[1349px]"
      alt="Group"
      src="/img/group-3.png"
    />

    {/* Small decorative elements - scaled for mobile */}
    <img
      className="absolute w-[30px] sm:w-[40px] lg:w-[51px] h-[32px] sm:h-[42px] lg:h-[53px] top-[500px] sm:top-[550px] lg:top-[607px] left-[20px] sm:left-[40px] lg:left-[261px]"
      alt="Vector"
      src="/img/vector-37.svg"
    />
    <img
      className="absolute w-[50px] sm:w-[70px] lg:w-28 h-[60px] sm:h-[80px] lg:h-[106px] top-[300px] sm:top-[350px] lg:top-[414px] right-[20px] sm:right-[40px] lg:right-[168px]"
      alt="Vector"
      src="/img/vector-36.svg"
    />
  </section>
);

const MainTagline = () => (
  <section className="mt-[50px] sm:mt-[100px] lg:mt-[212px] mx-4 sm:mx-8 lg:mx-[68px]">
    <h1 className="w-full max-w-[800px] [font-family:'Georgia-Regular',Helvetica] font-normal text-[#465666] text-[32px] sm:text-[48px] lg:text-6xl tracking-[-1px] sm:tracking-[-1.4px] lg:tracking-[-1.80px] leading-[36px] sm:leading-[52px] lg:leading-[66.0px]">
      Where Grown-ups Remember How to Play
    </h1>
    <p className="w-full max-w-[1282px] mt-[20px] sm:mt-[25px] lg:mt-[30px] [font-family:'Helvetica-Light',Helvetica] font-light text-[#7f8c8d] text-[16px] sm:text-[20px] lg:text-[25px] tracking-[-0.5px] sm:tracking-[-0.6px] lg:tracking-[-0.75px] leading-[20px] sm:leading-[24px] lg:leading-[27.5px]">
      What if your next team breakthrough happened not in a boardroom, but with
      clay in your hands? What if the solution to your biggest challenge emerged
      while you were laughing, creating, and completely forgetting you were
      &#39;learning&#39;?&#34;
    </p>
  </section>
);

const YellowCardSection = () => (
  <section className="mx-4 sm:mx-8 lg:mx-[68px] mt-[30px] sm:mt-[35px] lg:mt-[40px]">
    <Card className="w-full max-w-[1307px] min-h-[300px] sm:min-h-[350px] lg:h-[439px] bg-[#ffea2f] rounded-[20px] sm:rounded-[24px] lg:rounded-[27px] border-none relative overflow-visible">
      <CardContent className="p-4 sm:p-6 lg:p-0 h-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-center h-full">
          {/* Image - responsive positioning */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-start mb-4 lg:mb-0">
            <img
              className="w-[200px] sm:w-[240px] lg:w-[285px] h-[180px] sm:h-[220px] lg:h-[263px] lg:absolute lg:top-[55px] lg:left-[42px]"
              alt="Layer"
              src="/img/layer-1-2.svg"
            />
          </div>

          {/* Content */}
          <div className="flex-1 lg:ml-[350px] lg:mt-[80px]">
            <div className="mb-4 lg:mb-8 [font-family:'Helvetica-Light',Helvetica] font-light text-[#e03258] text-[18px] sm:text-[22px] lg:text-[27px] tracking-[-0.5px] sm:tracking-[-0.65px] lg:tracking-[-0.81px] leading-[22px] sm:leading-[26px] lg:leading-[29.7px] text-center lg:text-left">
              Where you re-learn how to learn like a 5-year-old
            </div>
            <div className="[font-family:'Helvetica-Light',Helvetica] font-light text-black text-[20px] sm:text-[26px] lg:text-[32px] tracking-[-0.6px] sm:tracking-[-0.8px] lg:tracking-[-0.96px] leading-[24px] sm:leading-[30px] lg:leading-[35.2px] text-center lg:text-left">
              You never learn better than when you don&#39;t know that you are
              learning. Through play, touch, wonder, and experimentation, we
              help teams unlearn biases, collaborate organically, and see
              challenges with fresh eyes.
            </div>
          </div>
        </div>

        {/* Decorative elements - hidden on mobile */}
        <div className="hidden lg:block">
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
        </div>
      </CardContent>
    </Card>
  </section>
);

const PromiseSection = () => (
  <section className="mx-4 sm:mx-8 lg:mx-[68px] mt-[60px] sm:mt-[80px] lg:mt-[100px]">
    <h2 className="w-full max-w-[800px] [font-family:'Georgia-Regular',Helvetica] font-normal text-[#465666] text-[32px] sm:text-[48px] lg:text-6xl tracking-[-1px] sm:tracking-[-1.4px] lg:tracking-[-1.80px] leading-[36px] sm:leading-[52px] lg:leading-[66.0px] mb-[30px] sm:mb-[40px] lg:mb-[50px]">
      Our Promise
    </h2>
    <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-4">
      {promiseItems.map((item, index) => (
        <div
          key={`promise-${index}`}
          className="flex flex-col max-w-full lg:max-w-[395px]"
        >
          <div className="flex items-center mb-4">
            <img
              className="w-[28px] sm:w-[33px] lg:w-[38px] h-[28px] sm:h-[33px] lg:h-[38px]"
              alt={`Icon ${index + 1}`}
              src={item.icon}
            />
            <h3
              className={`ml-2 [font-family:'Georgia-Regular',Helvetica] font-normal text-[#465666] text-[28px] sm:text-[35px] lg:text-[43px] tracking-[-1.1px] sm:tracking-[-1.4px] lg:tracking-[-1.72px] leading-[32px] sm:leading-[38px] lg:leading-[43px]`}
            >
              {item.title}
            </h3>
          </div>
          <div
            className={`${item.color} [font-family:'Georgia-Regular',Helvetica] font-normal text-[60px] sm:text-[75px] lg:text-[95px] tracking-[-2.4px] sm:tracking-[-3px] lg:tracking-[-3.80px] leading-[60px] sm:leading-[75px] lg:leading-[95px] mb-4`}
          >
            {item.number}
          </div>
          <p className="[font-family:'Helvetica_Neue-Light',Helvetica] font-light text-[#465666] text-[18px] sm:text-[21px] lg:text-[25px] tracking-[0] leading-[normal] mb-4">
            {item.description}
          </p>

          {/* Decorative illustrations - simplified for mobile */}
          {index === 0 && (
            <div className="relative w-[80px] sm:w-[100px] lg:w-[120px] h-[90px] sm:h-[110px] lg:h-[131px] ml-auto">
              <img
                className="absolute w-[50px] sm:w-[65px] lg:w-20 h-[70px] sm:h-[85px] lg:h-[100px] top-0 left-[10px] sm:left-[12px] lg:left-[15px]"
                alt="Vector"
                src="/img/vector-14.svg"
              />
              {/* Additional decorative elements - hidden on mobile for simplicity */}
              <div className="hidden sm:block">
                <img
                  className="absolute w-[24px] sm:w-[29px] lg:w-[34px] h-[16px] sm:h-[19px] lg:h-[22px] top-[18px] sm:top-[21px] lg:top-[25px] right-0"
                  alt="Clip path group"
                  src="/img/clip-path-group-4.png"
                />
                <img
                  className="absolute w-[14px] sm:w-[17px] lg:w-5 h-[17px] sm:h-[20px] lg:h-6 top-[22px] sm:top-[26px] lg:top-[30px] left-0"
                  alt="Vector"
                  src="/img/vector-15.svg"
                />
              </div>
            </div>
          )}

          {index === 1 && (
            <div className="relative w-[60px] sm:w-[70px] lg:w-[82px] h-[90px] sm:h-[110px] lg:h-[133px] ml-auto">
              <img
                className="absolute w-[35px] sm:w-[40px] lg:w-[47px] h-[80px] sm:h-[95px] lg:h-[114px] top-0 left-[10px] sm:left-[12px] lg:left-4"
                alt="Clip path group"
                src="/img/clip-path-group-11.png"
              />
              {/* Additional decorative elements - simplified for mobile */}
              <div className="hidden sm:block">
                <img
                  className="absolute w-[16px] sm:w-[19px] lg:w-[23px] h-[24px] sm:h-[29px] lg:h-[34px] top-[35px] sm:top-[42px] lg:top-16 left-0"
                  alt="Clip path group"
                  src="/img/clip-path-group-12.png"
                />
                <img
                  className="absolute w-[16px] sm:w-[19px] lg:w-[22px] h-[25px] sm:h-[30px] lg:h-9 top-[45px] sm:top-[53px] lg:top-[62px] right-0"
                  alt="Clip path group"
                  src="/img/clip-path-group-13.png"
                />
              </div>
            </div>
          )}

          {index === 2 && (
            <div className="relative w-[120px] sm:w-[140px] lg:w-[167px] h-[95px] sm:h-[115px] lg:h-[137px] ml-auto">
              <img
                className="absolute w-[70px] sm:w-[85px] lg:w-[102px] h-[75px] sm:h-[90px] lg:h-[109px] top-0 left-[15px] sm:left-[18px] lg:left-6"
                alt="Clip path group"
                src="/img/clip-path-group-7.png"
              />
              {/* Additional decorative elements - simplified for mobile */}
              <div className="hidden sm:block">
                <img
                  className="absolute w-[55px] sm:w-[65px] lg:w-[78px] h-[10px] sm:h-[12px] lg:h-3.5 top-[5px] sm:top-[6px] lg:top-2 right-[10px] sm:right-[12px] lg:right-[42px]"
                  alt="Vector"
                  src="/img/vector-20.svg"
                />
                <img
                  className="absolute w-[42px] sm:w-[50px] lg:w-[60px] h-[46px] sm:h-[55px] lg:h-[66px] top-[25px] sm:top-[30px] lg:top-12 right-0"
                  alt="Clip path group"
                  src="/img/clip-path-group-8.png"
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  </section>
);

const ExperienceMenuSection = () => (
  <section className="mx-4 sm:mx-8 lg:mx-[68px] mt-[40px] sm:mt-[50px] lg:mt-[30px]">
    <h2 className="w-full max-w-[1282px] [font-family:'Georgia-Regular',Helvetica] font-normal text-[#465666] text-[28px] sm:text-[36px] lg:text-[46px] tracking-[-0.8px] sm:tracking-[-1.1px] lg:tracking-[-1.38px] leading-[32px] sm:leading-[40px] lg:leading-[50.6px] mb-[30px] sm:mb-[40px] lg:mb-[50px]">
      Our Experience Menu
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
      {experienceCards.map((card, index) => (
        <Card
          key={`experience-${index}`}
          className={`w-full max-w-[420px] mx-auto h-[400px] sm:h-[480px] lg:h-[556px] ${card.gradient} rounded-[20px] sm:rounded-[24px] lg:rounded-[27px] border-none relative overflow-hidden`}
        >
          <CardContent className="p-4 sm:p-5 lg:p-0 h-full flex flex-col items-center justify-between">
            {/* Icons section - responsive sizing */}
            <div className="flex-shrink-0 mt-4 sm:mt-6 lg:mt-8">
              {card.whatNext && (
                <img
                  className="w-[120px] sm:w-[140px] lg:w-[164px] h-[100px] sm:h-[115px] lg:h-[135px]"
                  alt="What next"
                  src="/img/what-next-1.png"
                />
              )}
              {card.artIcon && (
                <img
                  className="w-[70px] sm:w-[85px] lg:w-[101px] h-[90px] sm:h-[110px] lg:h-32"
                  alt="Layer"
                  src="/img/layer-1.svg"
                />
              )}
              {card.doodleIcon && (
                <div className="flex flex-col items-center">
                  <img
                    className="w-[220px] sm:w-[260px] lg:w-[305px] h-[50px] sm:h-[58px] lg:h-[68px]"
                    alt="Vector"
                    src="/img/vector-79.svg"
                  />
                  <img
                    className="w-[220px] sm:w-[260px] lg:w-[305px] h-[50px] sm:h-[58px] lg:h-[68px] mt-[-50px] sm:mt-[-58px] lg:mt-[-68px]"
                    alt="Group"
                    src="/img/group-8.png"
                  />
                </div>
              )}
              {card.olympicsIcons && (
                <div className="flex flex-col items-center">
                  <img
                    className="w-[85px] sm:w-[100px] lg:w-[117px] h-[70px] sm:h-[83px] lg:h-[97px]"
                    alt="Layer"
                    src="/img/layer-1-1.svg"
                  />
                  <img
                    className="w-[120px] sm:w-[145px] lg:w-[169px] h-[16px] sm:h-[19px] lg:h-[22px] mt-[20px] sm:mt-[25px] lg:mt-[30px]"
                    alt="Vector"
                    src="/img/vector-74.svg"
                  />
                  <img
                    className="w-[90px] sm:w-[108px] lg:w-[125px] h-[4px] lg:h-[5px] mt-[3px] sm:mt-[4px] lg:mt-[5px]"
                    alt="Vector"
                    src="/img/vector-75.svg"
                  />
                </div>
              )}
              {card.gameIcons && (
                <div className="flex flex-col items-center">
                  <img
                    className="w-[85px] sm:w-[100px] lg:w-[119px] h-[100px] sm:h-[120px] lg:h-[141px]"
                    alt="Image"
                    src="/img/image-6.png"
                  />
                  <div className="flex flex-col items-center mt-[-15px] sm:mt-[-18px] lg:mt-[-20px] space-y-1">
                    <img
                      className="w-[10px] sm:w-[12px] lg:w-[15px] h-[10px] sm:h-[12px] lg:h-[15px]"
                      alt="Vector"
                      src="/img/vector-72.svg"
                    />
                    <img
                      className="w-[11px] sm:w-[13px] lg:w-4 h-[15px] sm:h-[18px] lg:h-[21px]"
                      alt="Vector"
                      src="/img/vector-73.svg"
                    />
                    <img
                      className="w-[11px] sm:w-[13px] lg:w-4 h-[10px] sm:h-[12px] lg:h-[15px]"
                      alt="Vector"
                      src="/img/vector-71.svg"
                    />
                    <img
                      className="w-[10px] sm:w-[12px] lg:w-3.5 h-[11px] sm:h-[13px] lg:h-4"
                      alt="Vector"
                      src="/img/vector-70.svg"
                    />
                  </div>
                </div>
              )}
              {card.icons && (
                <div className="flex flex-col items-center">
                  <div className="flex space-x-1 sm:space-x-1.5 lg:space-x-2 mb-2">
                    <img
                      className="w-[18px] sm:w-[22px] lg:w-[27px] h-[35px] sm:h-[43px] lg:h-[51px]"
                      alt="Vector"
                      src="/img/vector-56.svg"
                    />
                    <img
                      className="w-[20px] sm:w-[26px] lg:w-8 h-[30px] sm:h-[36px] lg:h-[43px] mt-[6px] sm:mt-[7px] lg:mt-[9px]"
                      alt="Vector"
                      src="/img/vector-58.svg"
                    />
                    <img
                      className="w-[30px] sm:w-[38px] lg:w-12 h-[40px] sm:h-[48px] lg:h-[57px] mt-[-1px]"
                      alt="Vector"
                      src="/img/vector-60.svg"
                    />
                    <img
                      className="w-[9px] sm:w-[11px] lg:w-[13px] h-[30px] sm:h-[38px] lg:h-12 mt-[8px] sm:mt-[9px] lg:mt-[11px]"
                      alt="Group"
                      src="/img/group-6.png"
                    />
                    <img
                      className="w-[24px] sm:w-[29px] lg:w-[34px] h-[24px] sm:h-[29px] lg:h-[34px] mt-[11px] sm:mt-[13px] lg:mt-[16px]"
                      alt="Vector"
                      src="/img/vector-59.svg"
                    />
                    <img
                      className="w-[20px] sm:w-[26px] lg:w-8 h-[33px] sm:h-[40px] lg:h-[47px] mt-[3px] lg:mt-[4px]"
                      alt="Vector"
                      src="/img/vector-57.svg"
                    />
                  </div>
                  {/* Complex icon arrangement - simplified for mobile */}
                  <div className="hidden lg:block w-72 h-[54px]">
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
            </div>

            {/* Title text - responsive positioning */}
            <div className="w-full max-w-[320px] sm:max-w-[350px] lg:max-w-[362px] px-2 text-white text-[16px] sm:text-[20px] lg:text-[25px] text-center tracking-[-0.5px] sm:tracking-[-0.6px] lg:tracking-[-0.75px] leading-[20px] sm:leading-[24px] lg:leading-[27.5px] [font-family:'Helvetica-Light',Helvetica] font-light mb-4 lg:mb-0">
              {card.title}
            </div>

            {/* Bottom image - responsive sizing and positioning */}
            <div className="flex-shrink-0 w-full flex justify-center">
              <img
                className="w-auto h-[120px] sm:h-[200px] lg:h-auto max-h-[300px] sm:max-h-[350px] lg:max-h-[400px] object-contain"
                alt="Experience illustration"
                src={card.image}
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

const ContactFormSection = () => (
  <section className="w-full mt-[60px] sm:mt-[80px] lg:mt-[100px] bg-[#3498db] pt-[30px] sm:pt-[40px] lg:pt-[52px] pb-[30px] sm:pb-[40px] lg:pb-[52px] relative">
    <div className="mx-4 sm:mx-8 lg:mx-[68px] mb-10">
      <h2 className="w-full max-w-[800px] [font-family:'Georgia-Regular',Helvetica] font-normal text-white text-[32px] sm:text-[48px] lg:text-6xl tracking-[-1px] sm:tracking-[-1.4px] lg:tracking-[-1.80px] leading-[36px] sm:leading-[52px] lg:leading-[66.0px] mb-4 lg:mb-0">
        Ready to Rediscover Wonder?
      </h2>
      <p className="w-full max-w-[1282px] mt-[12px] sm:mt-[15px] lg:mt-[17px] [font-family:'Helvetica-Light',Helvetica] font-light text-white text-[16px] sm:text-[20px] lg:text-[25px] tracking-[-0.5px] sm:tracking-[-0.6px] lg:tracking-[-0.75px] leading-[20px] sm:leading-[24px] lg:leading-[27.5px] mb-[30px] sm:mb-[40px] lg:mb-0">
        Let&#39;s explore how your team can achieve extraordinary results
        through extraordinary experiences.
      </p>
      <div className="flex flex-col lg:flex-row mt-[30px] sm:mt-[40px] lg:mt-[50px] gap-6 lg:gap-8">
        <div className="flex-1">
          <form className="space-y-6 lg:space-y-8">
            <div>
              <label className="[font-family:'Helvetica-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-5 block mb-2">
                First Name
              </label>
              <Input className="bg-transparent border-b border-t-0 border-l-0 border-r-0 rounded-none focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0 text-white placeholder:text-white/70" />
            </div>
            <div>
              <label className="[font-family:'Helvetica-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-5 block mb-2">
                Email
              </label>
              <Input className="bg-transparent border-b border-t-0 border-l-0 border-r-0 rounded-none focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0 text-white placeholder:text-white/70" />
            </div>
            <div>
              <label className="[font-family:'Helvetica-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-5 block mb-2">
                Approximate Team Size
              </label>
              <Input className="bg-transparent border-b border-t-0 border-l-0 border-r-0 rounded-none focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0 text-white placeholder:text-white/70" />
            </div>
            <div>
              <label className="[font-family:'Helvetica-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-5 block mb-2">
                What challenge or opportunity brings you here?
              </label>
              <Textarea
                className="bg-transparent border-b border-t-0 border-l-0 border-r-0 rounded-none focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0 text-white min-h-[80px] lg:min-h-[100px] placeholder:text-white/70"
                placeholder="Write your message.."
              />
            </div>
            <Button className="bg-[#e74c3c] hover:bg-[#c0392b] text-white rounded-[11px] h-[46px] px-6 [font-family:'Helvetica-Bold',Helvetica] font-bold w-full sm:w-auto">
              Send Message
            </Button>
          </form>
        </div>
        <div className="flex-1 relative min-h-[300px] lg:min-h-[505px]">
          <img
            className="absolute w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[413px] h-auto max-h-[400px] sm:max-h-[450px] lg:max-h-[505px] top-0 left-1/2 transform -translate-x-1/2 lg:left-[50px] lg:transform-none object-contain"
            alt="Mask group"
            src="/img/mask-group.png"
          />

          {/* Decorative elements - simplified for mobile */}
          <div className="absolute w-[150px] sm:w-[175px] lg:w-[201px] h-[140px] sm:h-[160px] lg:h-[187px] bottom-0 right-0">
            <img
              className="absolute w-[80px] sm:w-[95px] lg:w-[109px] h-[90px] sm:h-[105px] lg:h-[124px] top-0 left-[25px] sm:left-[30px] lg:left-[37px]"
              alt="Clip path group"
              src="/img/clip-path-group.png"
            />
            {/* Additional decorative elements - hidden on mobile for cleaner look */}
            <div className="hidden sm:block">
              <img
                className="absolute w-[45px] sm:w-[55px] lg:w-[63px] h-[18px] sm:h-[22px] lg:h-[26px] top-[35px] sm:top-[42px] lg:top-14 right-[20px] sm:right-[25px] lg:right-32"
                alt="Vector"
                src="/img/vector-1.svg"
              />
              <img
                className="absolute w-[13px] sm:w-[15px] lg:w-[18px] h-[11px] sm:h-[13px] lg:h-4 top-[35px] sm:top-[42px] lg:top-[52px] right-[10px] sm:right-[12px] lg:right-[183px]"
                alt="Clip path group"
                src="/img/clip-path-group-1.png"
              />
              <img
                className="absolute w-[40px] sm:w-[47px] lg:w-[55px] h-[35px] sm:h-[42px] lg:h-[50px] top-[18px] sm:top-[22px] lg:top-[27px] left-0"
                alt="Clip path group"
                src="/img/clip-path-group-2.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Footer */}
    <footer className="absolute bottom-0 left-0 w-full">
      <div className="w-full h-auto lg:h-[52px] bg-white flex flex-col lg:flex-row items-center py-3 lg:py-0">
        <div className="mx-4 sm:mx-8 lg:mx-[67px] flex flex-col lg:flex-row justify-between items-center w-full gap-4 lg:gap-0">
          <div className="[font-family:'Helvetica-Regular',Helvetica] font-normal text-[#465666] text-[14px] sm:text-[16px] lg:text-[19px] tracking-[-0.4px] sm:tracking-[-0.5px] lg:tracking-[-0.57px] leading-[16px] sm:leading-[18px] lg:leading-[20.9px] text-center lg:text-left">
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
            <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
              <Link
                href="https://www.facebook.com/veevillexp"
                className="text-[#465666] hover:text-[#3498db] transition-colors duration-200"
              >
                <FaSquareFacebook className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </Link>
              <Link
                href="https://www.instagram.com/veevillexp"
                className="text-[#465666] hover:text-[#3498db] transition-colors duration-200"
              >
                <FaSquareInstagram className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </Link>
              <Link
                href="https://www.twitter.com/veevillexp"
                className="text-[#465666] hover:text-[#3498db] transition-colors duration-200"
              >
                <FaSquareTwitter className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </Link>
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
      className="bg-white flex flex-row justify-center w-full min-h-screen"
      data-model-id="254:2257"
    >
      <div className="bg-white overflow-hidden w-full max-w-[1440px] relative">
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
