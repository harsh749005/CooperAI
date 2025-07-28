import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";

type SearchItem = {
  text: string;
  color: string;
  icon: React.ReactNode;
};

const data: SearchItem[] = [
  {
    text: "What is a wild animal?",
    color: "#d7d0fe",
    icon: <Feather name="mic" size={20} color="black" />,
  },
  {
    text: "Scanning images",
    color: "#242529",
    icon: <AntDesign name="scan1" size={22} color="white" />,
  },
  {
    text: "Analyse the report",
    color: "#f9e8bcff",
    icon: <Ionicons name="chatbubbles-outline" size={24} color="black" />,
  },
];

export default data;
