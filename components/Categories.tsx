import { Text, View, StyleSheet, Image, ScrollView, ImageBackground } from "react-native";

import { Tile } from '@rneui/themed';
export function Categories() {

  return (
    <View>
      <View style={styles.container}>
          <Text style={styles.title}>Categories</Text>
      </View>
      <ScrollView horizontal contentContainerStyle={{paddingHorizontal: 15}} showsHorizontalScrollIndicator={false}>
        <View style={styles.tiles}>
            <Tile
              imageSrc={
                require('../assets/images/pizza.jpg')
              }
              featured
              activeOpacity={0.1}
              width={100}
              containerStyle={{ borderWidth: 1, borderColor: 'gray' }}
            />
            <Text style={styles.subHeader}>Pizza</Text>
        </View>
        <View style={styles.tiles}>
            <Tile
              imageSrc={
                require('../assets/images/burger.jpg')
              }
              featured
              activeOpacity={0.1}
              width={100}
              containerStyle={{ borderWidth: 1, borderColor: 'gray' }}
            />
            <Text style={styles.subHeader}>Burgers</Text>
        </View>
        <View style={styles.tiles}>
            <Tile
              imageSrc={
                require('../assets/images/tortilla.jpg')
              }
              featured
              activeOpacity={0.1}
              width={100}
              containerStyle={{ borderWidth: 1, borderColor: 'gray' }}
            />
            <Text style={styles.subHeader}>Tortillas</Text>
        </View>
        <View style={styles.tiles}>
            <Tile
              imageSrc={
                require('../assets/images/snacks.jpg')
              }
              featured
              activeOpacity={0.1}
              width={100}
              containerStyle={{ borderWidth: 1, borderColor: 'gray' }}
            />
            <Text style={styles.subHeader}>Snacks</Text>
        </View>
        <View style={styles.tiles}>
            <Tile
              imageSrc={
                require('../assets/images/soda.jpg')
              }
              featured
              activeOpacity={0.1}
              width={100}
              containerStyle={{ borderWidth: 1, borderColor: 'gray' }}
            />
            <Text style={styles.subHeader}>Drinks</Text>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  subHeader: {
    backgroundColor : "#2089dc",
    color : "white",
    textAlign : "center",
    paddingVertical : 5,
    marginBottom : 10
  },
  tiles: {
    marginRight: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    marginBottom: 4,
    marginTop: 0,
    paddingTop: 0
  },
  });
