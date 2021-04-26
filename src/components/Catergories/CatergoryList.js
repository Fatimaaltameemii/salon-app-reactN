import React, { useState } from "react";
import categoryStore from "../../Stores/CategoryStore";
import CatergoryItem from "./CatergoryItem";
import { observer } from "mobx-react";
import {
  AuthContainer,
  BackgroundSq,
  AuthBackgroundImg,
} from "../Salons/styles";
import { View } from "react-native";
const CategoryList = ({ navigation }) => {
  const [query, setQuery] = useState("");
  const categorylist = categoryStore.categoryId
    .filter((category) => category.categoryId === categoryStore.categoryId)
    .map((category) => <CatergoryItem category={category} key={category.id} />);
  return (
    <AuthContainer>
      <BackgroundSq source={require("../../../assets/BlueRec.png")} />
      {/* <AuthBackgroundImg source={require("../../../assets/BlueRec.png")}> */}
      <View>{categorylist}</View>
      {/* </AuthBackgroundImg> */}
    </AuthContainer>
  );
};

export default observer(CategoryList);
