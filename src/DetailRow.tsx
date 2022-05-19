import React from "react";

const DetailRow = ({heading, detail}: any) => {
  return (
    <>
    <div className="sm:flex mt-4">
      <h4 className="sm:w-40 text-gray-500 font-medium">{heading}</h4>
      <p >{detail}</p>
    </div>
    <hr />
  </>
  ); 
};
export default DetailRow;