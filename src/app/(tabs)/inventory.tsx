import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { useInventory } from "../../api/inventory";

export default function Inventory() {
  const { data, isLoading, error } = useInventory();

  if (isLoading) return <ActivityIndicator style={{ flex: 1 }} />;
  if (error) return <Text style={{ padding: 16 }}>Couldn't reach the API. Is the backend running?</Text>;

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <View style={{ padding: 16, borderBottomWidth: 1, borderColor: "#ddd" }}>
          <Text>{item.name} — {item.quantity} in stock</Text>
        </View>
      )}
    />
  );
}