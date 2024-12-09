import Image from "next/image";
import slider1 from "../../public/images/new/slider-1.svg";

export const New = () => {
  return (
    <section
      id="new"
      className="flex flex-col items-center justify-center mt-[280px]"
    >
      <div className="relative flex flex-col items-center justify-center">
        <h1 className="uppercase text-[50px] tracking-[0.5em] leading-[60px] font-inria text-primary text-center w-[160px]">
          New
        </h1>
        <div className="w-[82px] h-[1px] bg-secondary mt-[10px] mb-[110px]" />

        <div className="absolute left-[270px] bottom-[40px] w-[300px] h-[300px] bg-tertiary rounded-full" />
        <div className="absolute left-[450px] bottom-[10px] w-[150px] h-[150px] bg-secondary rounded-full" />
        <div className="absolute left-[500px] bottom-[120px] w-[200px] h-[200px] bg-primary rounded-full" />
      </div>

      <Image src={slider1} alt="slider-1" width={1392} height={876} />
    </section>
  );
};
