import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import COLORS from './src/consts/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function App() {
  const categories = ['POPULAR', 'ORGANIC', 'INDOORS', 'SYNTHETIC'];

  const [categoryIndex, setCategoryIndex] = React.useState(0);

  const CategoryList = () => {
    return <View style={styles.categoriesList}>
      {
        categories.map((item, index) => (
          <TouchableOpacity key={index}
            activeOpacity={0.8}
            onPress={() => setCategoryIndex(index)}>
            <Text
              style={[styles.categoryText, categoryIndex == index && styles.categoryTextSelected]} >
              {item}
            </Text>
          </TouchableOpacity>
        ))
      }
    </View>
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Welcome to</Text>
          <Text style={{ fontSize: 38, fontWeight: "bold", color: COLORS.green }}>Plant Shop</Text>
        </View>
        <Icon name="shopping-cart" size={28} />
      </View>
      <View style={{ marginTop: 30, flexDirection: "row" }}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} style={{ marginLeft: 20, marginRight: 15 }} />
          <TextInput placeholder='Search' style={styles.input} />
        </View>
        <View style={styles.sortBtn}>
          <MaterialIcons name="sort" size={30} color={COLORS.white} />
        </View>
      </View>
      <CategoryList />
      <FlatList numColumns={2} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  searchContainer: {
    height: 50,
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    backgroundColor: COLORS.light,
    alignItems: 'center'
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: COLORS.dark,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    backgroundColor: COLORS.green,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  categoriesList: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 20,
    justifyContent: "space-between"
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.dark
  },
  categoryTextSelected: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.green,
  }
});
