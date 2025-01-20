import Link from "next/link";
import connectDB from "./utils/database";
import { ItemModel } from "./utils/schemaModels";
import Image from "next/image";

const itemReadAll = async () => {
  await connectDB();
  const allItems = await ItemModel.find();
  return allItems;
};

const ReadAllItems = async () => {
  const allItems = await itemReadAll();
  console.log(allItems);

  return (
    <div>
      {allItems?.map((item) => (
        <Link href="" key={item._id}>
          <Image
            src={item.image}
            width={750}
            height={500}
            alt="item-image"
            priority
          />
          <div>
            <h2>¥{item.price}</h2>
            <h3>{item.title}</h3>
            <p>{item.description.substring(0, 80)}...</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ReadAllItems;
