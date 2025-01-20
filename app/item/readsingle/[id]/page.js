import connectDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemaModels";
import Image from "next/image";
import React from "react";

const itemReadSingle = async (context) => {
  const params = await context.params;
  await connectDB();
  const singleItem = await ItemModel.findById(params.id);
  return singleItem;
};

const ReadSingleItem = async (context) => {
  const singleItem = await itemReadSingle(context);

  return (
    <div>
      <div>
        <Image
          src={singleItem.image}
          width={750}
          height={500}
          alt="item-image"
          priority
        />
      </div>
      <div>
        <h1>{singleItem.title}</h1>
        <h2>¥{singleItem.price}</h2>
        <hr />
        <p>{singleItem.description}</p>
      </div>
    </div>
  );
};

export default ReadSingleItem;
