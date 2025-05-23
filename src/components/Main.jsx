import React from "react";
import Button from "./Button";

import hero from "../assets/images/image-mockups.png";
import img_openAPI from "../assets/images/icon-api.svg";
import img_budgeting from "../assets/images/icon-budgeting.svg";
import img_onlineBanking from "../assets/images/icon-online.svg";
import img_onboarding from "../assets/images/icon-onboarding.svg";
import img_currency from "../assets/images/image-currency.jpg";
import img_plane from "../assets/images/image-plane.jpg";
import img_confetti from "../assets/images/image-confetti.jpg";
import img_restaurant from "../assets/images/image-restaurant.jpg";

export default function Main() {
  return (
    <main className="relative m-auto lg:relative overflow-x-hidden">
   

      <section
        id="hero-section"
        className="m-auto md:max-w-[800px]  md:flex max-w-[375px] pb-9 lg:flex md:m-auto lg:flex-row-reverse lg:overflow-hidden lg:max-w-[1340px] lg:justify-end lg:h-[500px] "
      >
        <div className="relative h-[350px] m-auto overflow-hidden md:absolute md:w-[375px] md:right-0 lg:overflow-hidden lg:w-[700px]  lg:h-[700px] xl:w-[800px]  xl:h-[700px] lg:absolute lg:-right-10 lg:-top-20">
          <div
            className="pattern-svg absolute bg-[url('/bg-intro-mobile.svg')] -top-10 h-[375px] w-[375px] md:h-[370px] md:w-[375px] lg:h-[750px] lg:w-[950px] lg:-top-30 lg:bg-[url('/bg-intro-desktop.svg')] lg:-left-10 lg:bg-contain lg:bg-no-repeat lg:bg-center lg:overflow-hidden"
            alt=""
          ></div>
          <img
            className="absolute -top-35 w-[375px]  lg:w-[600px] lg:h-[750px] lg:right-0 xl:right-0 lg:-top-25 xl:w-[650px] xl:h-[800px]"
            src={hero}
            alt=""
          />
        </div>
        <div className="text-center md:w-[400px] md:mt-12 p-8 pt-0 lg:flex lg:flex-col  lg:justify-center lg:items-start lg:w-[600px] xl:w-2/3 lg:pr-36 lg:text-left">
          <p className="font-normal text-4xl text-fm-dark-blue md:text-left lg:text-5xl xl:text-6xl dark:text-white">
            Next generation digital banking
          </p>
          <p className="text-fm-grayis-blue font-normal text-justify my-5 ">
            Take your financial life online.Your Easybank account will be a
            one-stop for spending, saving, budgeting, investing, and much more.
          </p>
          <Button></Button>
        </div>
      </section>

      <section className="section-why-easybank p-8 lg:py-24 text-center bg-fm-light-grayish-blue dark:bg-[#1f1f1f] ">
        <div className="md:m-auto md:w-[90%] lg:max-w-[1340px] lg:m-auto">
          <div className="md:max-w-[400px] md:m-auto lg:ml-0  lg:max-w-none lg:text-left lg:w-1/2">
            <p className="text-2xl w-40 m-auto text-fm-dark-blue dark:text-white lg:w-auto">
              Why choose Easybank?
            </p>
            <p className=" text-fm-grayis-blue mb-8 mt-4">
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>
          <ul className="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8  lg:gap-8 lg:text-left">
            <li>
              <img src={img_onlineBanking} alt="" />
              <p className="dark:darkFull">Online Banking</p>
              <p>
                Our modern web and mobile aplications allow you to keep track of
                your finances wherever you are in the world.
              </p>
            </li>
            <li>
              <img src={img_budgeting} alt="" />
              <p>Simple Budgeting</p>
              <p>
                See exactly where money goes each month. Receibe notifications
                when you're close to your hitting limits.
              </p>
            </li>
            <li>
              <img src={img_onboarding} alt="" />
              <p>Fast Onboarding</p>
              <p>
                We don't do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </p>
            </li>
            <li>
              <img src={img_openAPI} alt="" />
              <p>Open API</p>
              <p>
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="section-articles py-8 pb-0 md:max-w-[800px] md:m-auto lg:max-w-[1340px] lg:m-auto">
        <p className="text-2xl w-40 m-auto py-8 text-fm-dark-blue lg:text-left lg:ml-0 dark:text-white">
          Lates Articles
        </p>
        <ul className="md:grid md:grid-cols-2 md:gap-8 bg-neutral-50 p-8 lg:flex lg:gap-8 dark:bg-[#1f1f1f]">
          <li>
            <img src={img_currency} alt="" />

            <div className="">
              <span>By Claire Robinson</span>
              <p>Receive money in any currency with no fees</p>
              <p>
                The world is getting smaller and we're become more mobile. So
                whuy shoudl you be forced to only receive money in a single ..
              </p>
            </div>
          </li>
          <li>
            <img src={img_restaurant} alt="" />
            <div>
              <span>By Wilson Hutton</span>
              <p>Treat yourself without worrying about money</p>
              <p>
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you...
              </p>
            </div>
          </li>
          <li>
            <img src={img_plane} alt="" />
            <div>
              <span>By Wilson Hutton</span>
              <p>Take your Easybank card wherever you go</p>
              <p>
                We want you to enjoy your travels. This is why we don't charge
                any fees on purchases while youŕe abroad. We'll even show you...{" "}
              </p>
            </div>
          </li>
          <li>
            <img src={img_confetti} alt="" />
            <div>
              <span>By Claire Robinson</span>
              <p>Our invite-only Beta accounts are now live!</p>
              <p>
                After a lot of hard work by the whole team, we're excited to
                launch our closed beta. It's easy to request an invite through
                the site...
              </p>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}
