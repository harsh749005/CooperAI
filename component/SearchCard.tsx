import { View, Text } from "react-native";
import React from "react";
import Octicons from "@expo/vector-icons/Octicons";

type SearchCardPropType = {
  // key:number;  
  text: string | null;
  circleBgColor: string;
  icon:React.ReactNode;
};

const SearchCard = ({ text, circleBgColor,icon }: SearchCardPropType) => {
  return (
    <View
    // key={key}
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 14,
        backgroundColor: "#f7f6fefe",
        borderRadius: 50,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <View
          style={{
            backgroundColor: circleBgColor,
            width: 40,
            height: 40,
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
            {icon}
        </View>
        <Text style={{ fontSize: 16 }}>{text}</Text>
      </View>
      <View style={{ flexDirection: "row", gap: 2, backgroundColor: "" }}>
        <Octicons name="dot" size={12} color="black" />
        <Octicons name="dot" size={12} color="black" />
        <Octicons name="dot" size={12} color="black" />
      </View>
    </View>
  );
};

export default SearchCard;

{
  /* <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingVertical: 10,
                  paddingHorizontal: 14,
                  backgroundColor: "#f7f6fefe",
                  borderRadius: 50,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#d7d0fe",
                      width: 40,
                      height: 40,
                      borderRadius: 50,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Feather name="mic" size={20} color="black" />
                  </View>
                  <Text style={{ fontSize: 16 }}>What is a wild animal?</Text>
                </View>
                <View
                  style={{ flexDirection: "row", gap: 2, backgroundColor: "" }}
                >
                  <Octicons name="dot" size={12} color="black" />
                  <Octicons name="dot" size={12} color="black" />
                  <Octicons name="dot" size={12} color="black" />
                </View>
              </View> */
}
