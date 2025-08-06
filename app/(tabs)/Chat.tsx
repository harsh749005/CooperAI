import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  Pressable,
  ScrollView,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import { getPerplexityResponse } from "../../api/perplexity";
import { callOpenAIApi } from "../../api/gpt";
import { callGeminiAPI } from "../../api/gemini";
import TypingDots from "../../animation/TypingDots";
const Chat = () => {
  const [input, setInput] = useState({
    text: "",
    sender: "user",
    date: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }),
  });

  const [chatmsg, setChatmsg] = useState([]);
  const [loding, setLoding] = useState(false);
  const scrollViewRef = useRef(null);

  const handleChat = async () => {
    if (input.text.trim() === "") return;
    setLoding(true);

    // 1. Add user's message
    const userMessage = {
      ...input,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
    };
    setChatmsg((prev) => [...prev, userMessage]);

    // 2. Clear input field
    setInput({
      text: "",
      sender: "user",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
    });
    const typingMessage = {
      text: "Typing ...",
      sender: "bot",
      time: Date.now(),
      isTyping: true,
    };
    setChatmsg((prev) => [...prev, typingMessage]);

    // 3. Get response from API
    try {
      const reply = await callGeminiAPI(userMessage.text);

      const botMessage = {
        text: reply,
        sender: "bot",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      };

      // 4. Add bot's reply
      setTimeout(() => {
        setChatmsg((prev) => {
          const updated = [...prev];
          const typingIndex = updated.findIndex(
            (msg) => msg.isTyping && msg.sender === "bot"
          );
          if (typingIndex !== -1) {
            updated[typingIndex] = botMessage;
          } else {
            updated.push(botMessage);
          }
          return updated;
        });
        // setChatmsg((prev) => [...prev, botMessage]);
        setLoding(false);
      }, 2000);
    } catch (err) {
      console.error(err);
      setLoding(false);
    }
  };

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [chatmsg]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={90}
      >
        <ScrollView
          ref={scrollViewRef}
          style={{ flex: 1 }}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "flex-end",
            padding: 20,
            paddingTop: 30,
          }}
          bounces={false}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {chatmsg.length === 0 ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>Ask your Questions.</Text>
            </View>
          ) : (
            chatmsg.map((chat, index) => (
              <View
                key={index}
                style={{
                  alignSelf: chat.sender === "user" ? "flex-end" : "flex-start",
                  backgroundColor: chat.sender === "user" ? "#242529" : "white",
                  padding: 10,
                  borderRadius: 10,
                  marginBottom: 10,
                  maxWidth: "80%",
                }}
              >
                {chat.isTyping ? (
                  <TypingDots />
                ) : (
                  <View >
                    <Text
                      style={{
                        color: chat.sender === "user" ? "white" : "#242529",
                        fontStyle: chat.isTyping ? "italic" : "normal",
                      }}
                    >
                      {chat.text }
                    </Text>
                    <Text
                      style={{
                        fontSize:10,
                        textAlign:"right",
                        marginTop:5,
                        color: chat.sender === "user" ? "white" : "#242529",
                        fontStyle: chat.isTyping ? "italic" : "normal",
                      }}
                    >
                      {chat.time}
                    </Text>
                  </View>
                )}
              </View>
            ))
          )}

          {/* Input Section */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 6,
            }}
          >
            <TextInput
              placeholder="Message ..."
              placeholderTextColor="white"
              style={{
                backgroundColor: "#242529",
                padding: 10,
                borderRadius: 50,
                paddingVertical: 15,
                paddingHorizontal: 15,
                color: "white",
                width: "80%",
              }}
              multiline
              value={input.text}
              onChangeText={(text) =>
                setInput((prevInput) => ({
                  ...prevInput,
                  text: text,
                }))
              }
            />
            <Pressable
              style={{
                paddingHorizontal: 10,
                paddingVertical: 10,
                backgroundColor: "#242529",
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={handleChat}
            >
              {loding ? (
                <Entypo name="controller-stop" size={24} color="white" />
              ) : (
                <Feather name="send" size={24} color="white" />
              )}
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Chat;
