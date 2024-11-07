import { Card } from "@rneui/themed";
import { Text, View, StyleSheet, Image, ScrollView, ImageBackground } from "react-native";

const FeaturedRow = ({id, title} : { id: string; title: string }) => {

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <ScrollView contentContainerStyle={{paddingHorizontal: 15}}>
      <Card>
          <Card.Image
            style={{ padding: 0 }}
            source={require("../assets/images/pizza.jpg")}
          />
          <Card.Title style={styles.cardTitle}>Rosso's Pizzeria</Card.Title>
          <Text style={{ marginBottom: 10 }}>
            New Pizzeria open near you!
          </Text>
        </Card>
        <Card>
          <Card.Image
            style={{ padding: 0 }}
            source={require("../assets/images/burger.jpg")}
          />
          <Card.Title style={styles.cardTitle}>Bob's Burgers</Card.Title>
          <Text style={{ marginBottom: 10 }}>
            All burgers 10% OFF
          </Text>
        </Card>
        <Card>
          <Card.Image
            style={{ padding: 0 }}
            source={require("../assets/images/soda.jpg")}
          />
          <Card.Title style={styles.cardTitle}>Liamo Restaurante</Card.Title>
          <Text style={{ marginBottom: 10 }}>
            Free drink with any order
          </Text>
        </Card>
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20
  },
  container: {
    marginTop: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: "flex-start",
    marginTop: 10
  }
  });
