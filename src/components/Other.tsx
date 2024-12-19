import money from "../../public/images/why-us/money.svg";
import rocket from "../../public/images/why-us/rocket.svg";
import verified from "../../public/images/why-us/verified.svg";
import touch from "../../public/images/why-us/touch.svg";
import Image from "next/image";

export const Other = () => {
  return (
    <section
      className="flex flex-col mt-[250px] items-center justify-center"
      id="why-us"
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="uppercase w-[359px] text-[50px] tracking-[0.5em] leading-[60px] font-inria text-primary text-center whitespace-nowrap">
          Why us?
        </h1>

        <div className="w-[241px] h-[1px] bg-secondary mt-[10px]" />
      </div>

      <div className="flex bg-light items-center justify-center mt-[86px] w-full h-[250px]">
        <ul className="flex flex-row items-center justify-center gap-[130px]">
          <li className="flex flex-col items-center justify-center">
            <Image src={money} alt="money" width={128} height={122} />
            <p className="font-inria text-[20px] tracking-[0.5em] leading-[20px] text-black text-center mt-[10px]">
              payment upon <br /> receipt
            </p>
          </li>
          <li className="flex flex-col items-center justify-center">
            <Image src={rocket} alt="rocket" width={128} height={112} />
            <p className="font-inria text-[20px] tracking-[0.5em] leading-[20px] text-black text-center mt-[10px] w-[234px] whitespace-nowrap">
              fast delivery
            </p>
          </li>
          <li className="flex flex-col items-center justify-center">
            <Image src={verified} alt="verified" width={128} height={122} />
            <p className="font-inria text-[20px] tracking-[0.5em] leading-[20px] text-black text-center mt-[10px] w-[175px]">
              quality <br /> assurance
            </p>
          </li>
          <li className="flex flex-col items-center justify-center">
            <Image src={touch} alt="touch" width={130} height={122} />
            <p className="font-inria text-[20px] tracking-[0.5em] leading-[20px] text-black text-center mt-[10px] w-[162px] whitespace-nowrap">
              one click <br /> purchase
            </p>
          </li>
        </ul>
      </div>

      <div className="w-full h-[1px] bg-secondary mt-[58px] mb-[220px]" />
    </section>
  );
};
