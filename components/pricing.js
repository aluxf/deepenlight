import Container from "./container";
import {
    CheckCircleIcon
  } from "@heroicons/react/24/solid";

function Price(props) {
    const { data } = props
    
    return (
        <div className={`flex flex-col gap-2 w-full lg:w-1/4 rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 mb-10
                    ${data.dark ? "bg-indigo-500 text-white" : "text-gray-700 bg-white"}`}>
          <div className="flex-grow flex flex-col gap-2">  

          <h3 className="text-xl font-semibold">{data.title}</h3>
          <p className=" mt-1 text-xl">
            <span className={`font-bold text-4xl ${data.dark ? "text-white" : "text-indigo-600"}`}>{data.price}</span> / {data.unit}
          </p>
          <p className={`text-lg  mt-2 ${data.dark ? "opacity-75" : "text-gray-500"}`}>
            {data.desc}
          </p>
          <div className="text-lg mt-4 flex flex-col">
            { data.features.map((text) => {
                return (
                    <p className="my-2 inline-flex gap-4">
                        <span className={`w-2 mr-2 ml-1 ${data.dark ? "" : "text-indigo-500"}`}>
                            <CheckCircleIcon width={28}/>
                        </span> 
                        {text}
                    </p>
                )
            })}
            
          </div>
          </div>
          <a href="#waitlist">
            <button className={` w-full  rounded bg-indigo-500 hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4
                          ${data.dark ? "text-indigo-500 bg-white opacity-75 hover:opacity-100 hover:shadow-xl transition duration-150 ease-in-out" : "text-white"}`}>
                  Join waitlist
            </button>
          </a>
          
        </div>
    )
}

export default function Pricing(props) {
    const { pricingList } = props
    
  return (
    <Container classNameName="">

      <div className="flex flex-1 flex-col w-full justify-center gap-4 md:flex-row px-2 md:px-0">
      
      {
            pricingList.map((data) => {
                return (
                    <Price data={data}/>
                )
            })
        }
      </div>
    </Container>
  );
}
