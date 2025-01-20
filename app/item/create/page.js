import connectDB from "../../utils/database";
import { ItemModel } from "../../utils/schemaModels";

const itemCreate = async (formData) => {
  "use server";

  const itemData = {
    title: formData.get("title"),
    price: formData.get("price"),
    image: formData.get("image"),
    description: formData.get("description"),
  };

  try {
    await connectDB();
    await ItemModel.create(itemData);
  } catch {
    throw new Error("エラー：アイテム作成失敗");
  }
};

const CreateItem = () => {
  return (
    <div>
      <h1>アイテム作成</h1>
      <form action={itemCreate}>
        <input type="text" name="title" placeholder="アイテム名" required />
        <input type="text" name="price" placeholder="価格" required />
        <input type="text" name="image" placeholder="画像" required />
        <textarea
          name="description"
          rows={15}
          placeholder="商品説明"
          required
        ></textarea>
        <button>作成</button>
      </form>
    </div>
  );
};

export default CreateItem;
