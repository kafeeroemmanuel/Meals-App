import { View, Text, StyleSheet } from "react-native";

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subTitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    borderBottomColor: "white",
    borderBottomWidth: 2,
    padding: 6,
<<<<<<< HEAD
    marginHorizontal: 12,
=======
    marginHorizontal: 24,
>>>>>>> 4eec5c5b471f79168f20f80f25b5b27f8742fc04
    marginVertical: 4,
  },
});
