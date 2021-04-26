import { View, Text } from "react-native";
import React from "react";
import { CategoryTitle, CategoryImg } from "../Salons/styles";
import { observer } from "mobx-react";
function CatergoryItem({ Category }) {
  return (
    <View>
      {/*<CategoryImg>{Category.image}</CategoryImg>    "i think mako img in the backend'*/}
      <CategoryTitle> - {Category.name}</CategoryTitle>
    </View>
  );
}
export default observer(CatergoryItem);
