import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Subcription = () => {
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 32, fontFamily: "Poppins-Medium" }}>
          Cooper+ plans
        </Text>
        <Text style={styles.subText}>Try unlimited features with cooper+</Text>
      </View>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
        }}
      >
        <View style={styles.box}>
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <View style={{ gap: 15, flexDirection: "row" }}>
              <View>
                <View style={styles.logo}></View>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: "Poppins-SemiBold",
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                >
                  Monthly Plan
                </Text>
                <Text style={styles.subText}>$8.99/month</Text>
              </View>
            </View>
            <View
              style={{
                borderRadius: 50,
                height: 30,
                borderWidth: 1,
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: 10,
              }}
            >
              <Text style={{ fontSize: 10, fontFamily: "Poppins-SemiBold" }}>
                free ads
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <View
              style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
            >
              <View
                style={{
                  backgroundColor: "black",
                  borderRadius: 50,
                  width: 18,
                  height: 18,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialIcons name="done" size={14} color="white" />
              </View>
              <Text style={{ fontFamily: "Poppins-Medium", fontSize: 12 }}>
                Chat unlimited
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.box1}>
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <View style={{ gap: 15, flexDirection: "row" }}>
              <View>
                <View style={styles.logo}></View>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: "Poppins-SemiBold",
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                >
                  Monthly Plan
                </Text>
                <Text style={styles.subText}>$8.99/month</Text>
              </View>
            </View>
            <View
              style={{
                borderRadius: 50,
                height: 30,
                borderWidth: 1,
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: 10,
              }}
            >
              <Text style={{ fontSize: 10, fontFamily: "Poppins-SemiBold" }}>
                free ads
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <View
              style={{
                backgroundColor: "black",
                borderRadius: 50,
                width: 18,
                height: 18,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialIcons name="done" size={14} color="white" />
            </View>
            <Text style={{ fontFamily: "Poppins-Medium", fontSize: 12 }}>
              Chat unlimited
            </Text>
          </View>
        </View>
      </View>
      <Pressable style={styles.subscriptionBtn}>
        <Text
          style={{ color: "white", fontFamily: "Poppins-Medium", fontSize: 18 }}
        >
          Subcription
        </Text>
      </Pressable>
    </View>
  );
};

export default Subcription;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap: 30,
  },
  box: {
    width: "90%",
    height: 120,
    padding: 15,
    backgroundColor: "#d7d0fe",
    borderRadius: 22,
    justifyContent: "space-between",
  },
  box1: {
    width: "90%",
    height: 120,
    padding: 15,
    backgroundColor: "#f9e8bcff",
    borderRadius: 22,
    justifyContent: "space-between",
  },
  subscriptionBtn: {
    backgroundColor: "#1e1e1e",
    padding: 10,
    width: "90%",
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  subText: {
    fontFamily: "Poppins-Regular",
    color: "#7c7c7cff",
    fontSize: 12,
  },
  logo: {
    backgroundColor: "black",
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});
