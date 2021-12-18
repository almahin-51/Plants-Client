// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, FlatList, Dimensions, Image } from 'react-native';
// import COLORS from '../consts/colors';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import plants from '../consts/plants';

// const width = Dimensions.get('screen').width / 2 - 30;

// export default function Home() {
//     const categories = ['POPULAR', 'ORGANIC', 'INDOORS', 'SYNTHETIC'];

//     const [categoryIndex, setCategoryIndex] = React.useState(0);

//     const CategoryList = () => {
//         return <View style={styles.categoriesList}>
//             {
//                 categories.map((item, index) => (
//                     <TouchableOpacity key={index}
//                         activeOpacity={0.8}
//                         onPress={() => setCategoryIndex(index)}>
//                         <Text
//                             style={[styles.categoryText, categoryIndex == index && styles.categoryTextSelected]} >
//                             {item}
//                         </Text>
//                     </TouchableOpacity>
//                 ))
//             }
//         </View>
//     };

//     const Card = ({ plant }) => {
//         return (
//             <TouchableOpacity>
//                 <View style={styles.card}>
//                     <View style={{ alignItems: "flex-end" }}>
//                         <View style={{
//                             width: 30,
//                             height: 30,
//                             borderRadius: 15,
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             backgroundColor: plant.like ? `rgba(245, 42, 42, 0.2)` : `rgba(0, 0, 0, 0.2)`,
//                         }}>
//                             < MaterialIcons name="favorite" size={18} color={plant.like ? COLORS.red : COLORS.dark} />
//                         </View>
//                     </View>
//                     <View style={{ height: 100, alignItems: "center" }}>
//                         <Image
//                             style={{ flex: 1, resizeMode: "contain" }}
//                             source={plant.img}
//                         />
//                     </View>
//                     <Text style={{ fontSize: 17, fontWeight: 'bold', marginTop: 10 }}>{plant.name}</Text>
//                     <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, }}>
//                         <Text style={{ fontSize: 19, fontWeight: 'bold' }}>${plant.price}</Text>
//                         <View style={{
//                             height: 25,
//                             width: 25,
//                             backgroundColor:
//                                 COLORS.green,
//                             borderRadius: 5,
//                             justifyContent: 'center',
//                             alignItems: 'center',
//                         }}>
//                             <Text style={{ fontSize: 22, color: COLORS.white, fontWeight: 'bold' }}>+</Text>
//                         </View>
//                     </View>
//                 </View >
//             </TouchableOpacity>
//         )
//     }

//     return (
//         <SafeAreaView style={styles.container}>
//             <View style={styles.header}>
//                 <View>
//                     <Text style={{ fontSize: 25, fontWeight: "bold" }}>Welcome to</Text>
//                     <Text style={{ fontSize: 38, fontWeight: "bold", color: COLORS.green }}>Plant Shop</Text>
//                 </View>
//                 <Icon name="shopping-cart" size={28} />
//             </View>
//             <View style={{ marginTop: 30, flexDirection: "row" }}>
//                 <View style={styles.searchContainer}>
//                     <Icon name="search" size={20} style={{ marginLeft: 20, marginRight: 15 }} />
//                     <TextInput placeholder='Search' style={styles.input} />
//                 </View>
//                 <View style={styles.sortBtn}>
//                     <MaterialIcons name="sort" size={30} color={COLORS.white} />
//                 </View>
//             </View>
//             <CategoryList />
//             <FlatList
//                 columnWrapperStyle={{ justifyContent: 'space-between' }}
//                 showsVerticalScrollIndicator={false}
//                 contentContainerStyle={{
//                     marginTop: 10,
//                     paddingBottom: 50,
//                 }}
//                 numColumns={2}
//                 data={plants}
//                 renderItem={({ item }) => <Card plant={item} />} />
//             <StatusBar style="auto" />
//         </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         marginTop: 40,
//         paddingHorizontal: 20,
//         // alignItems: 'center',
//     },
//     header: {
//         flexDirection: "row",
//         justifyContent: "space-between"
//     },
//     searchContainer: {
//         height: 50,
//         borderRadius: 10,
//         flex: 1,
//         flexDirection: "row",
//         backgroundColor: COLORS.light,
//         alignItems: 'center'
//     },
//     input: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         flex: 1,
//         color: COLORS.dark,
//     },
//     sortBtn: {
//         marginLeft: 10,
//         height: 50,
//         width: 50,
//         backgroundColor: COLORS.green,
//         borderRadius: 10,
//         justifyContent: "center",
//         alignItems: "center"
//     },
//     categoriesList: {
//         flexDirection: "row",
//         marginTop: 30,
//         marginBottom: 20,
//         justifyContent: "space-between"
//     },
//     categoryText: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: COLORS.dark
//     },
//     categoryTextSelected: {
//         color: COLORS.green,
//         paddingBottom: 5,
//         borderBottomWidth: 2,
//         borderColor: COLORS.green,
//     },
//     card: {
//         height: 225,
//         backgroundColor: COLORS.light,
//         width,
//         marginHorizontal: 2,
//         borderRadius: 10,
//         marginBottom: 20,
//         padding: 15,
//     }
// });
