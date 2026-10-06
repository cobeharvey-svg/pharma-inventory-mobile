import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Login() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: "600" }}>Pharma Inventory</Text>
      <Button title="Log in" onPress={() => router.replace("/inventory")} />
    </View>
  );
}