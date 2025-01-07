import Image from "next/image";
import Link from "next/link";

import arrowBack from "../../public/images/icons/arrow-back.svg";
import call from "../../public/images/icons/call-brown.svg";
import mail from "../../public/images/icons/mail.svg";
import stamp from "../../public/images/stamp.svg";

const PrivacyPolicyPage = () => {
  return (
    <section className="ml-[68px] mr-[68px] mt-[42px]">
      <div className="flex flex-row items-center relative">
        <Link href="/">
          <Image
            src={arrowBack}
            alt="arrow back"
            width={48}
            height={48}
            className="z-10 mr-[62px]"
          />
        </Link>
        <div className="absolute w-[70px] h-[70px] bg-tertiary rounded-full left-[90px]" />
        <h1 className="uppercase font-inria text-[28px] tracking-[0.5em] leading-[20px] text-primary z-10">
          Privacy Policy
        </h1>
      </div>

      <h3 className="uppercase font-inria text-[20px] tracking-[0.2em] leading-[20px] text-primary relative z-20 ml-[110px]">
        Effective Date: 01.01.2025
      </h3>

      <p className="font-inria text-[20px] tracking-[0.2em] leading-[20px] text-primary mt-[64px] ml-[48px]">
        At Aura Cosmetics, we are committed to protecting your privacy and
        ensuring the security of your personal information. This Privacy Policy
        explains how we collect, use, and store your data.
      </p>

      {/* 1 */}

      <div className="mt-[38px] ml-[90px]">
        <div className="relative">
          <h2 className="relative uppercase font-inriaBold text-[24px] tracking-[0.2em] leading-[20px] text-primary z-10">
            1. Information we collect
          </h2>
          <div className="absolute w-[50px] h-[50px] bg-tertiary rounded-full left-[410px] top-[-15px]" />
        </div>

        <h3 className="font-inria text-[24px] tracking-[0.2em] leading-[20px] text-primary ml-[35px] mt-[18px]">
          We may collect the following information:
        </h3>

        <div className="relative flex flex-col justify-center mt-[18px]">
          <div className="flex flex-row items-center">
            <div className="absolute w-[20px] h-[20px] bg-secondary rounded-full" />
            <h4 className="font-inria text-[20px] tracking-[0.2em] leading-[40px] text-primary ml-[70px]">
              Name, surname, and contact details (phone, email).
            </h4>
          </div>

          <hr className="relative top-[50px] right-[50px] rotate-90 bg-secondary w-[120px] border-none h-[1px]" />

          <div className="flex flex-row items-center">
            <div className="absolute w-[20px] h-[20px] bg-secondary rounded-full" />
            <h4 className="font-inria text-[20px] tracking-[0.2em] leading-[40px] text-primary ml-[70px]">
              Delivery address.
            </h4>
          </div>

          <div className="flex flex-row items-center">
            <div className="absolute w-[20px] h-[20px] bg-secondary rounded-full" />
            <h4 className="font-inria text-[20px] tracking-[0.2em] leading-[40px] text-primary ml-[70px]">
              Order information and payment details (we do not store payment
              card information).
            </h4>
          </div>

          <div className="flex flex-row items-center">
            <div className="absolute w-[20px] h-[20px] bg-secondary rounded-full" />
            <h4 className="font-inria text-[20px] tracking-[0.2em] leading-[40px] text-primary ml-[70px]">
              Website usage data (cookies, IP address).
            </h4>
          </div>
        </div>
      </div>

      {/* 2 */}

      <div className="mt-[38px] ml-[90px]">
        <div className="relative">
          <h2 className="relative uppercase font-inriaBold text-[24px] tracking-[0.2em] leading-[20px] text-primary z-10">
            2. How we use your information
          </h2>
          <div className="absolute w-[50px] h-[50px] bg-tertiary rounded-full left-[510px] top-[-15px]" />
        </div>

        <h3 className="font-inria text-[24px] tracking-[0.2em] leading-[20px] text-primary ml-[35px] mt-[18px]">
          Your data is used to:
        </h3>

        <div className="relative flex flex-col justify-center mt-[18px]">
          <div className="flex flex-row items-center">
            <div className="absolute w-[20px] h-[20px] bg-secondary rounded-full" />
            <h4 className="font-inria text-[20px] tracking-[0.2em] leading-[40px] text-primary ml-[70px]">
              Process orders and deliver products.
            </h4>
          </div>

          <hr className="relative top-[20px] right-[35px] rotate-90 bg-secondary w-[90px] border-none h-[1px]" />

          <div className="flex flex-row items-center">
            <div className="absolute w-[20px] h-[20px] bg-secondary rounded-full" />
            <h4 className="font-inria text-[20px] tracking-[0.2em] leading-[40px] text-primary ml-[70px]">
              Improve our website and customer service.
            </h4>
          </div>

          <div className="flex flex-row items-center">
            <div className="absolute w-[20px] h-[20px] bg-secondary rounded-full" />
            <h4 className="font-inria text-[20px] tracking-[0.2em] leading-[40px] text-primary ml-[70px]">
              Notify you about promotions, news, and product updates (only with
              your consent).
            </h4>
          </div>
        </div>
      </div>

      {/* 3 */}

      <div className="mt-[38px] ml-[90px]">
        <div className="relative">
          <h2 className="relative uppercase font-inriaBold text-[24px] tracking-[0.2em] leading-[20px] text-primary z-10">
            3. Sharing information with third parties
          </h2>
          <div className="absolute w-[50px] h-[50px] bg-tertiary rounded-full left-[700px] top-[-15px]" />
        </div>

        <h3 className="font-inria text-[24px] tracking-[0.2em] leading-[30px] text-primary ml-[35px] mt-[18px]">
          We do not sell or share your data with third parties, except in the
          following cases:
        </h3>

        <div className="relative flex flex-col justify-center mt-[18px]">
          <div className="flex flex-row items-center">
            <div className="absolute w-[20px] h-[20px] bg-secondary rounded-full" />
            <h4 className="font-inria text-[20px] tracking-[0.2em] leading-[40px] text-primary ml-[70px]">
              Delivery services (only necessary information is provided).
            </h4>
          </div>

          <hr className="relative top-[10px] right-[10px] rotate-90 bg-secondary w-[40px] border-none h-[1px]" />

          <div className="flex flex-row items-center">
            <div className="absolute w-[20px] h-[20px] bg-secondary rounded-full" />
            <h4 className="font-inria text-[20px] tracking-[0.2em] leading-[40px] text-primary ml-[70px]">
              Compliance with legal obligations.
            </h4>
          </div>
        </div>
      </div>

      {/* 4 */}

      <div className="mt-[38px] ml-[90px]">
        <div className="relative">
          <h2 className="relative uppercase font-inriaBold text-[24px] tracking-[0.2em] leading-[20px] text-primary z-10">
            4. Data security
          </h2>
          <div className="absolute w-[50px] h-[50px] bg-tertiary rounded-full left-[240px] top-[-15px]" />
        </div>

        <h3 className="font-inria text-[24px] tracking-[0.2em] leading-[30px] text-primary ml-[35px] mt-[18px]">
          We use advanced technologies to protect your data. All payment
          transactions are processed through secure platforms.
        </h3>
      </div>

      {/* 5 */}

      <div className="mt-[38px] ml-[90px]">
        <div className="relative">
          <h2 className="relative uppercase font-inriaBold text-[24px] tracking-[0.2em] leading-[20px] text-primary z-10">
            5. Your rights
          </h2>
          <div className="absolute w-[50px] h-[50px] bg-tertiary rounded-full left-[210px] top-[-15px]" />
        </div>

        <h3 className="font-inria text-[24px] tracking-[0.2em] leading-[30px] text-primary ml-[35px] mt-[18px]">
          You have the right to:
        </h3>

        <div className="relative flex flex-col justify-center mt-[18px]">
          <div className="flex flex-row items-center">
            <div className="absolute w-[20px] h-[20px] bg-secondary rounded-full" />
            <h4 className="font-inria text-[20px] tracking-[0.2em] leading-[40px] text-primary ml-[70px]">
              Access your data.
            </h4>
          </div>

          <hr className="relative top-[20px] right-[35px] rotate-90 bg-secondary w-[90px] border-none h-[1px]" />

          <div className="flex flex-row items-center">
            <div className="absolute w-[20px] h-[20px] bg-secondary rounded-full" />
            <h4 className="font-inria text-[20px] tracking-[0.2em] leading-[40px] text-primary ml-[70px]">
              Correct or delete your data.
            </h4>
          </div>

          <div className="flex flex-row items-center">
            <div className="absolute w-[20px] h-[20px] bg-secondary rounded-full" />
            <h4 className="font-inria text-[20px] tracking-[0.2em] leading-[40px] text-primary ml-[70px]">
              Opt-out of receiving marketing communications.
            </h4>
          </div>
        </div>
      </div>

      {/* 6 */}

      <div className="mt-[38px] ml-[90px]">
        <div className="relative">
          <h2 className="relative uppercase font-inriaBold text-[24px] tracking-[0.2em] leading-[20px] text-primary z-10">
            6. Contact us
          </h2>
          <div className="absolute w-[50px] h-[50px] bg-tertiary rounded-full left-[190px] top-[-15px]" />
        </div>

        <h3 className="font-inria text-[24px] tracking-[0.2em] leading-[30px] text-primary ml-[35px] mt-[18px]">
          For any privacy-related questions, please contact us:
        </h3>

        <div className="relative flex flex-col justify-center mt-[18px]">
          <div className="flex flex-row gap-[32px] items-center">
            <Image src={mail} alt="mail" width={24} height={24} />
            <Link
              href="mailto:support@auracosmetics.com"
              className="font-inria text-[16px] leading-[20px] tracking-[0.5em] text-primary"
            >
              support@auracosmetics.com
            </Link>
          </div>

          <div className="flex flex-row gap-[32px] items-start mt-[20px]">
            <Image src={call} alt="phone" width={24} height={24} />
            <div className="flex flex-col gap-[10px]">
              <Link
                href="tel:0506795413"
                className="font-inria text-[16px] leading-[20px] tracking-[0.5em] text-primary"
              >
                050 679 5413
              </Link>
              <Link
                href="tel:0676458214"
                className="font-inria text-[16px] leading-[20px] tracking-[0.5em] text-primary"
              >
                067 645 8214
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end items-end">
        <Image
          src={stamp}
          alt="stamp"
          width={275}
          height={209}
          className="mt-[31px] mb-[80px] mr-[52px]"
        />
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
