import Image from "next/image";
import React from "react";
import Container from "./container";

const Step = (props) => {
  const { data, imgPos } = props;
  return (
    <>
      <Container className="flex flex-col-reverse lg:gap-8 lg:flex-row lg:flex-nowrap">
        <div
          className={`flex items-center  justify-center w-full lg:w-10/12 flex-1 ${
            imgPos === "right" ? "lg:order-1" : ""
          }`}>
          <div className="flex  justify-center ">
            <div className="drop-shadow-lg lg:w-10/12 flex justify-center rounded-lg">
              <Image
              src={data.image}
              width={data.width}
              height="auto"
              alt="Benefits"
              className={"object-cover p-6"}
              placeholder="blur"
              blurDataURL={data.image.src}
            />
            </div>
          </div>
        </div>

        <div
          className={`flex  flex-wrap items-center flex-1 justify-center`}>
          <div>
            <div className="flex  flex-col w-full mt-4">
              <div className="inline-flex gap-4 items-center">
              
                <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                  {data.title}
                </h3>
                
              </div>
              

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                {data.desc}
              </p>
            </div>

          </div>
        </div>
      </Container>
    </>
  );
};

export default Step;
