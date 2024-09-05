import React from "react";
import list from '../../public/List.json'
import Card from "./Card";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-16 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">here!:</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem id
            quibusdam voluptatem itaque soluta, expedita repellendus sit
            molestias ea laudantium autem obcaecati voluptatum perferendis animi
            reiciendis consequatur odio quia, exercitationem amet atque magnam
            omnis adipisci consequuntur! Nemo, consequuntur quae facere quo
            accusantium nam earum deleniti possimus, architecto blanditiis
            corrupti perferendis.
          </p>
<Link  to='/'>
          <button className="bg-pink-500 text-white  mt-6 px-4 py-2 rounded-md hover:bg-pink-700  duration-300 ">Back</button>
</Link>

        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3"> 
                {list.map((item)=>(
                    <Card  key={item.id} item={item} />
                ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
