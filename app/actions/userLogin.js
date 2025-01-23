"use server";

import connectDB from "../utils/database";
import { UserModel } from "../utils/schemaModels";

export const userLogin = async (prevState, formData) => {
  const userData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  try {
    await connectDB();
    const savedUserData = await UserModel.findOne({ email: userData.email });
    if (savedUserData) {
      // ユーザーデータが存在する場合の処理
      if (userData.password === savedUserData.password) {
        // パスワードが正しい場合の処理
        return { message: "ログイン成功" };
      } else {
        // パスワードが間違っている場合の処理
        return { message: "エラー：パスワードが間違っています" };
      }
    } else {
      // ユーザーデータが存在しない場合の処理
      return { message: "エラー：ユーザー登録をしてください" };
    }
  } catch {
    return { message: "エラー：ログイン失敗" };
  }
};
