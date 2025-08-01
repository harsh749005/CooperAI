import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import data from '../component/Data';
import SearchCard from "@/component/SearchCard";
import { router } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.mainSection}>
          <View style={styles.brandingSection} >
            <View style={styles.logo}></View>
            <Text style={styles.brandName} onPress={()=>router.push('/(tabs)/Subcription')}>Cooper 1.7</Text>
            <Feather name="chevron-down" size={24} color="black" />
          </View>
          <View
            style={{
              width: 55,
              height: 55,
              borderRadius: 50,
              backgroundColor: "#ebebebff",
            }}
          ></View>
        </View>
        <View style={styles.second}>
          <View>
            <Text style={styles.name}>Hello Harsh</Text>
            <Text style={styles.subText}>Make your day easy with us</Text>
          </View>
          <View
            style={{
              backgroundColor: "",
              flexDirection: "row",
              gap: 10,
              width: "100%",
            }}
          >
            <View style={styles.comp1}>
              <View style={styles.iconBG}>
                <Feather name="mic" size={24} color="black" />
              </View>
              <View>
                <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 24 }}>
                  Talk with Copper
                </Text>
                <Text style={styles.subText}>{`Let's try it now`}</Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                height: 250,
                justifyContent: "space-between",
              }}
            >
              {/* ffecba */}
              <View
                style={{
                  width: "100%",
                  height: 120,
                  padding: 10,
                  justifyContent: "space-between",
                  borderRadius: 22,
                  backgroundColor: "#f9e8bcff",
                }}
              >
                <View style={styles.iconBG}>
                  <Ionicons
                    name="chatbubbles-outline"
                    size={24}
                    color="black"
                  />
                </View>
                <Text style={{ fontFamily: "Poppins-Medium", fontSize: 20 }}>
                  New chat
                </Text>
              </View>
              <View
                style={{
                  width: "100%",
                  height: 120,
                  borderRadius: 22,
                  padding: 10,
                  justifyContent: "space-between",
                  backgroundColor: "#242529",
                }}
              >
                <View style={styles.iconBG}>
                  <AntDesign name="scan1" size={24} color="white" />
                </View>
                <Text
                  style={{
                    fontFamily: "Poppins-Medium",
                    fontSize: 16,
                    color: "white",
                  }}
                >
                  Search by image
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.third}>
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "baseline",
              flexDirection: "row",
            }}
          >
            <Text style={{ fontFamily: "Poppins-Medium", fontSize: 20 }}>
              Recent Search
            </Text>
            <Text style={styles.subText}>See All</Text>
          </View>
          {/* list scroll */}
          <SafeAreaView style={{ height: 160 ,paddingTop:10}}>
            <ScrollView
              contentContainerStyle={{ gap: 10 }}
              showsVerticalScrollIndicator={false}
            >

              {
                data.map((data,index)=>(
                  <SearchCard key={index} text={data.text} circleBgColor={data.color} icon={data.icon}>

                  </SearchCard>
                ))
              }

            </ScrollView>
          </SafeAreaView>
        </View>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontFamily: "Poppins-Medium",
    fontSize: 15,
  },
  text2: {
    fontFamily: "Poppins-Medium",
    fontSize: 24,
  },
  safeArea: {
    flex: 1,
    // backgroundColor:"pink",
    paddingTop: 50,
    paddingLeft: 20,
    paddingBottom: 20,
    gap: 20,
    // paddingRight:10
  },
  // edededff
  mainSection: {
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor:"orange"
  },
  brandingSection: {
    gap: 10,
    width: "60%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ebebebff",
    padding: 10,
    borderRadius: 50,
  },
  logo: {
    backgroundColor: "black",
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  brandName: {
    fontFamily: "Poppins-Medium",
    fontSize: 15,
  },
  second: {
    // backgroundColor:"blue",
    // flex: 1,
    gap: 15,
    width: "95%",
    // height: 140,
    paddingTop: 30,
  },
  name: {
    fontFamily: "Poppins-Medium",
    fontSize: 36,
    color: "black",
  },
  subText: {
    fontFamily: "Poppins-Medium",
    color: "#7c7c7cff",
    fontSize: 14,
  },
  comp1: {
    width: "50%",
    height: 250,
    borderRadius: 22,
    backgroundColor: "#d7d0fe",
    padding: 15,
    justifyContent: "space-between",
  },
  iconBG: {
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor: "#ffffff83",
    justifyContent: "center",
    alignItems: "center",
  },
  third: {
    // backgroundColor:"brown",
    // flex: 1,
    width: "95%",
    height: 40,
    paddingTop: 10,
    gap: 20,
  },
});
