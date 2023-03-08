import React from "react";
import { Image, Text, View } from "react-native";
import { assets, COLORS, FONTS, SHADOWS, SIZES } from "../constants";

function NFTTitle({ title, titleSize, subTitle, subTitleSize }) {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: COLORS.primary,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.medium,
          fontSize: subTitleSize,
          color: COLORS.primary,
          paddingTop: 3,
        }}
      >
        {subTitle}
      </Text>
    </View>
  );
}

function EthPrice({ price }) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        source={assets.eth}
        resizeMode={"contain"}
        style={{ width: 20, height: 20, marginRight: 2 }}
      />
      <Text
        style={{
          fontFamily: FONTS.medium,
          fontSize: SIZES.font,
          color: COLORS.primary,
        }}
      >
        {price}
      </Text>
    </View>
  );
}

function ImageCmp({ imgUrl, index }) {
  return (
    <Image
      source={imgUrl}
      resizeMode={"cover"}
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  );
}

function People() {
  return (
    <View style={{ flexDirection: "row" }}>
      {[assets.person02, assets.person03, assets.person04].map(
        (imgUrl, index) => {
          return (
            <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />
          );
        }
      )}
    </View>
  );
}

function EndDate() {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: "50%",
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.primary,
        }}
      >
        Ending
      </Text>
      <Text
        style={{
          fontFamily: FONTS.semibold,
          fontSize: SIZES.medium,
          color: COLORS.primary,
        }}
      >
        12h 30m
      </Text>
    </View>
  );
}

function SubInfo() {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <People />
      <EndDate />
    </View>
  );
}

export { NFTTitle, EthPrice, ImageCmp, People, EndDate, SubInfo };
