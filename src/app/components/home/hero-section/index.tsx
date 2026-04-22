import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const socialIcon = [
    {
      img: "/images/icon/github-icon.png",
      href: "https://github.com/NatamZaza",
      icon: "Github",
      label: "NatamZaza",
    },
    {
      img: "/images/icon/mail-icon.png",
      href: "mailto:nititornprompila@gmail.com",
      icon: "Email",
      label: "nititornprompila@gmail.com",
    },
    {
      img: "/images/icon/phone-call-icon.png",
      href: "tel:+660971249594",
      icon: "Phone",
      label: "097-124-9594",
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="">
          <div className="w-full h-72">
            <Image
              src={"/images/hero-sec/banner-bg-img-test.jpg"}
              alt="banner-img"
              width={1080}
              height={267}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="border-x border-primary/10">
            <div className="relative flex flex-col xs:flex-row items-center xs:items-start justify-center xs:justify-between max-w-3xl mx-auto gap-10 xs:gap-3 px-4 sm:px-7 pt-22 pb-8 sm:pb-12">
              {/* User Image */}
              <div className="absolute top-0 transform -translate-y-1/2">
                <Image
                  src={"/images/hero-sec/user-img-test.jpg"}
                  alt="user-img"
                  width={145}
                  height={145}
                  className="w-36 h-36 object-cover rounded-full border-4 border-white hover:scale-105 transition"
                />
                <span className="absolute bottom-2.5 right-5 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
              </div>
              {/* User Info */}
              <div className="flex flex-col gap-2 sm:gap-3 items-center text-center xs:items-start">
                <h1>Nititorn Prompila</h1>
                <p className="text-violet-700 font-normal">Fresh Graduate</p>
                <div className="flex items-center gap-2">
                  <Image
                    src={"/images/icon/map-icon.svg"}
                    alt="map-icon"
                    width={20}
                    height={20}
                  />
                  <p className="text-primary">Sisaket, Thailand</p>
                </div>
              </div>
              {/* Social Icon and Contact Button */}
              <div className="flex flex-col md:flex-row items-center gap-4 xs:-translate-x-8">
                <div className="flex flex-col items-stretch min-w-[180px]">
                  {socialIcon.map((value, index) => (
                    <div key={index}>
                      <a
                        href={value.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 px-6 py-3.5 hover:bg-primary/5 transition-colors rounded-xl"
                      >
                        <Image
                          src={value.img}
                          alt={value.icon}
                          width={26}
                          height={26}
                        />
                        <span className="text-base text-primary/70 font-medium">
                          {value.label}
                        </span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;