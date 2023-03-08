import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, assets, SHADOWS } from "../constants";
import { CircleButton, RectButton } from "./Button";
import { SubInfo, EthPrice, NFTTitle } from "./SubInfo";

function NFTCard({ data }) {
  const navigation = useNavigation();

  return (
    <View style={styles.a}>
      <View style={styles.b}>
        <Image style={styles.c} source={data.image} resizeMode={"cover"} />
        <CircleButton imageUrl={assets.heart} right={10} top={10} />
        <SubInfo />
        <View style={styles.d}>
          <NFTTitle
            title={data.name}
            titleSize={SIZES.large}
            subTitle={data.creator}
            subTitleSize={SIZES.small}
          />
        </View>
        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 24,
            paddingRight: 24,
            alignItems: "center",
          }}
        >
          <EthPrice price={data.price} />
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("Details", { data })}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  a: {
    minHeight: 433,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.font,
    marginBottom: SIZES.extraLarge,
    margin: SIZES.base,
    ...SHADOWS.dark,
  },
  b: {
    width: "100%",
    height: 250,
  },
  c: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: SIZES.font,
    borderTopRightRadius: SIZES.font,
  },
  d: {
    width: "100%",
    padding: SIZES.font,
  },
});

export default NFTCard;
