import React from "react";

import { AuthImg, AuthContainer, BackgroundSq } from "./styles";
import salonStore from "../../Stores/SalonStore";

const SalonDetails = ({ navigation }) => {
  return (
    <AuthContainer>
      <BackgroundSq source={require("../../../assets/BlueRec.png")} />
      <AuthImg source={require("../../../assets/logosolidwhite.png")} />
    </AuthContainer>
  );
};

export default SalonDetails;
