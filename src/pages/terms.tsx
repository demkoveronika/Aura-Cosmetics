import Image from "next/image";
import Link from "next/link";

import arrowBack from "../../public/images/icons/arrow-back.svg";
import call from "../../public/images/icons/call-brown.svg";
import mail from "../../public/images/icons/mail.svg";
import stamp from "../../public/images/stamp.svg";

const Terms = () => {
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
        <div className="absolute w-[70px] h-[70px] bg-tertiary rounded-full left-[80px]" />
        <h1 className="uppercase font-inria text-[28px] tracking-[0.5em] leading-[20px] text-primary z-10">
          Terms
        </h1>
      </div>

      <h3 className="uppercase font-inria text-[20px] tracking-[0.2em] leading-[20px] text-primary relative z-20 ml-[110px]">
        Effective Date: 01.01.2025
      </h3>

      <p className="font-inria text-[20px] tracking-[0.2em] leading-[20px] text-primary mt-[64px] ml-[48px]">
        Welcome to Aura Cosmetics! By using our website, you agree to these
        Terms.
      </p>

      {/* 1 */}

      <div className="mt-[38px] ml-[90px]">
        <div className="relative">
          <h2 className="relative uppercase font-inriaBold text-[24px] tracking-[0.2em] leading-[20px] text-primary z-10">
            1. General provisions
          </h2>
          <div className="absolute w-[50px] h-[50px] bg-tertiary rounded-full left-[330px] top-[-15px]" />
        </div>

        <div className="relative flex flex-col justify-center mt-[18px]">
          <div className="flex flex-row items-center">
            <div className="absolute w-[20px] h-[20px] bg-secondary rounded-full" />
            <h4 className="font-inria text-[20px] tracking-[0.2em] leading-[40px] text-primary ml-[70px]">
              Aura Cosmetics offers products made from natural ingredients.
            </h4>
          </div>

          <hr className="relative top-[10px] right-[10px] rotate-90 bg-secondary w-[40px] border-none h-[1px]" />

          <div className="flex flex-row items-center">
            <div className="absolute w-[20px] h-[20px] bg-secondary rounded-full" />
            <h4 className="font-inria text-[20px] tracking-[0.2em] leading-[40px] text-primary ml-[70px]">
              All products are described and presented with accurate photos and
              details.
            </h4>
          </div>
        </div>
      </div>

      {/* 2 */}

      <div className="mt-[38px] ml-[90px]">
        <div className="relative">
          <h2 className="relative uppercase font-inriaBold text-[24px] tracking-[0.2em] leading-[20px] text-primary z-10">
            2. Orders
          </h2>
          <div className="absolute w-[50px] h-[50px] bg-tertiary rounded-full left-[130px] top-[-15px]" />
        </div>

        <div className="relative flex flex-col justify-center mt-[18px]">
          <div className="flex flex-row items-center">
            <div className="absolute w-[20px] h-[20px] bg-secondary rounded-full" />
            <h4 className="font-inria text-[20px] tracking-[0.2em] leading-[40px] text-primary ml-[70px]">
              Orders are considered accepted after confirmation via email.
            </h4>
          </div>

          <hr className="relative top-[10px] right-[10px] rotate-90 bg-secondary w-[40px] border-none h-[1px]" />

          <div className="flex flex-row items-center">
            <div className="absolute w-[20px] h-[20px] bg-secondary rounded-full" />
            <h4 className="font-inria text-[20px] tracking-[0.2em] leading-[40px] text-primary ml-[70px]">
              We reserve the right to cancel orders due to product
              unavailability or technical errors.
            </h4>
          </div>
        </div>
      </div>

      {/* 3 */}

      <div className="mt-[38px] ml-[90px]">
        <div className="relative">
          <h2 className="relative uppercase font-inriaBold text-[24px] tracking-[0.2em] leading-[20px] text-primary z-10">
            3. Payment
          </h2>
          <div className="absolute w-[50px] h-[50px] bg-tertiary rounded-full left-[145px] top-[-15px]" />
        </div>

        <div className="relative flex flex-col justify-center mt-[18px]">
          <div className="flex flex-row items-start">
            <div className="absolute w-[20px] h-[20px] bg-secondary rounded-full mt-[10px]" />
            <h4 className="font-inria text-[20px] tracking-[0.2em] leading-[40px] text-primary ml-[70px]">
              We accept payments via major credit and debit cards (Visa,
              MasterCard, American Express) and PayPal.
            </h4>
          </div>

          <hr className="relative bottom-[20px] right-[32px] rotate-90 bg-secondary w-[85px] border-none h-[1px]" />

          <div className="flex flex-row items-center">
            <div className="absolute w-[20px] h-[20px] bg-secondary rounded-full" />
            <h4 className="font-inria text-[20px] tracking-[0.2em] leading-[40px] text-primary ml-[70px]">
              All prices are listed in USD and include applicable taxes.
            </h4>
          </div>
        </div>
      </div>

      {/* 4 */}

      <div className="mt-[38px] ml-[90px]">
        <div className="relative">
          <h2 className="relative uppercase font-inriaBold text-[24px] tracking-[0.2em] leading-[20px] text-primary z-10">
            4. Delivery
          </h2>
          <div className="absolute w-[50px] h-[50px] bg-tertiary rounded-full left-[155px] top-[-15px]" />
        </div>

        <div className="relative flex flex-col justify-center mt-[18px]">
          <div className="flex flex-row items-center">
            <div className="absolute w-[20px] h-[20px] bg-secondary rounded-full" />
            <h4 className="font-inria text-[20px] tracking-[0.2em] leading-[40px] text-primary ml-[70px]">
              Products are delivered through trusted delivery services such as
              UPS, FedEx, and DHL.
            </h4>
          </div>

          <hr className="relative top-[10px] right-[10px] rotate-90 bg-secondary w-[40px] border-none h-[1px]" />

          <div className="flex flex-row items-center">
            <div className="absolute w-[20px] h-[20px] bg-secondary rounded-full" />
            <h4 className="font-inria text-[20px] tracking-[0.2em] leading-[40px] text-primary ml-[70px]">
              Delivery times vary based on your location, typically ranging from
              3 to 7 business days.
            </h4>
          </div>
        </div>
      </div>

      {/* 5 */}

      <div className="mt-[38px] ml-[90px]">
        <div className="relative">
          <h2 className="relative uppercase font-inriaBold text-[24px] tracking-[0.2em] leading-[20px] text-primary z-10">
            5. Returns and exchanges
          </h2>
          <div className="absolute w-[50px] h-[50px] bg-tertiary rounded-full left-[410px] top-[-15px]" />
        </div>

        <div className="relative flex flex-col justify-center mt-[18px]">
          <div className="flex flex-row items-start">
            <div className="absolute w-[20px] h-[20px] bg-secondary rounded-full mt-[10px]" />
            <h4 className="font-inria text-[20px] tracking-[0.2em] leading-[40px] text-primary ml-[70px]">
              Returns are accepted within 30 days from the date of purchase,
              provided the product is unused and in its original packaging.
            </h4>
          </div>

          <hr className="relative bottom-[20px] right-[32px] rotate-90 bg-secondary w-[85px] border-none h-[1px]" />

          <div className="flex flex-row items-start">
            <div className="absolute w-[20px] h-[20px] bg-secondary rounded-full mt-[10px]" />
            <h4 className="font-inria text-[20px] tracking-[0.2em] leading-[40px] text-primary ml-[70px]">
              To initiate a return, please contact our customer support team at{" "}
              <Link
                href="mailto:support@auracosmetics.com"
                className="font-inriaBoldItalic"
              >
                support@auracosmetics.com
              </Link>{" "}
              or call us at{" "}
              <Link href="tel:0506795413" className="font-inriaBoldItalic">
                050 679 5413
              </Link>{" "}
              or{" "}
              <Link href="tel:0676458214" className="font-inriaBoldItalic">
                067 645 8214
              </Link>
              .
            </h4>
          </div>
        </div>
      </div>

      {/* 6 */}

      <div className="mt-[38px] ml-[90px]">
        <div className="relative">
          <h2 className="relative uppercase font-inriaBold text-[24px] tracking-[0.2em] leading-[20px] text-primary z-10">
            6. Limitation of liability
          </h2>
          <div className="absolute w-[50px] h-[50px] bg-tertiary rounded-full left-[400px] top-[-15px]" />
        </div>

        <div className="relative flex flex-col justify-center mt-[18px]">
          <div className="flex flex-row items-start">
            <div className="absolute w-[20px] h-[20px] bg-secondary rounded-full mt-[10px]" />
            <h4 className="font-inria text-[20px] tracking-[0.2em] leading-[40px] text-primary ml-[70px]">
              We are not responsible for any delays in delivery caused by force
              majeure events, including but not limited to natural disasters,
              strikes, or weather conditions.
            </h4>
          </div>

          <hr className="relative bottom-[20px] right-[32px] rotate-90 bg-secondary w-[85px] border-none h-[1px]" />

          <div className="flex flex-row items-start">
            <div className="absolute w-[20px] h-[20px] bg-secondary rounded-full mt-[10px]" />
            <h4 className="font-inria text-[20px] tracking-[0.2em] leading-[40px] text-primary ml-[70px]">
              Customers are responsible for using the products as intended and
              following all provided instructions.
            </h4>
          </div>
        </div>
      </div>

      {/* 7 */}

      <div className="mt-[38px] ml-[90px]">
        <div className="relative">
          <h2 className="relative uppercase font-inriaBold text-[24px] tracking-[0.2em] leading-[20px] text-primary z-10">
            7. Changes to terms
          </h2>
          <div className="absolute w-[50px] h-[50px] bg-tertiary rounded-full left-[310px] top-[-15px]" />
        </div>

        <h3 className="font-inria text-[24px] tracking-[0.2em] leading-[30px] text-primary ml-[35px] mt-[18px]">
          We reserve the right to update these Terms. Updates will be published
          on this page.
        </h3>
      </div>

      {/* 8 */}

      <div className="mt-[38px] ml-[90px]">
        <div className="relative">
          <h2 className="relative uppercase font-inriaBold text-[24px] tracking-[0.2em] leading-[20px] text-primary z-10">
            8. Contact us
          </h2>
          <div className="absolute w-[50px] h-[50px] bg-tertiary rounded-full left-[190px] top-[-15px]" />
        </div>

        <h3 className="font-inria text-[24px] tracking-[0.2em] leading-[30px] text-primary ml-[35px] mt-[18px]">
          If you have any questions, please contact us:
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

      <h2 className="font-inriaBold text-[24px] leading-[35px] tracking-[0.2em] text-primary ml-[125px] mt-[38px]">
        Thank you for choosing Aura Cosmetics! We are proud <br /> to provide you with
        natural, high-quality products.
      </h2>

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

export default Terms;
