import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const cars = [
  {
    name: 'Fiat Mobi',
    image: 'https://quatrorodas.abril.com.br/wp-content/uploads/2023/07/FiatMobiTrekkingMY242.jpg?quality=70&strip=info&w=720&crop=1',
    description: 'Fiat Mobi ou similar Econômico',
    details: '1 bolsa • 5 passageiros • 2/4 portas',
    price: 'R$ 70.000',
  },
  {
    name: 'Volkswagen Gol',
    image: 'https://i0.wp.com/loucosporcarro.com.br/wp-content/uploads/2022/02/Volkswagen-Gol-1.0.jpg?resize=798%2C466&ssl=1',
    description: 'Volkswagen Gol ou similar Econômico',
    details: '2 bolsas • 5 passageiros • 4 portas',
    price: 'R$ 60.000',
  },
  {
    name: 'Chevrolet Onix',
    image: 'https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2023-onix/mov/04-images/onix-ltz-mt.jpg?imwidth=960',
    description: 'Chevrolet Onix ou similar Compacto',
    details: '2 bolsas • 5 passageiros • 4 portas',
    price: 'R$ 90.000',
  },
  {
    name: 'Ford Ka',
    image: 'https://www.autoo.com.br/fotos/2018/1/1280_960/ford_ka_2019_1_31012018_8647_1280_960.jpg',
    description: 'Ford Ka ou similar Compacto',
    details: '1 bolsa • 5 passageiros • 2/4 portas',
    price: 'R$ 85.000',
  },
  {
    name: 'Renault Sandero',
    image: 'https://image1.mobiauto.com.br/images/api/images/v1.0/49105221/transform/fl_progressive,f_webp,q_85,w_959,h_504',
    description: 'Renault Sandero ou similar Compacto',
    details: '2 bolsas • 5 passageiros • 4 portas',
    price: 'R$ 80.000',
  },
  {
    name: 'Honda Civic',
    image: 'https://cdn.motor1.com/images/mgl/mMEQ8j/113:0:1821:1366/2024-honda-civic-rs-jdm.webp',
    description: 'Honda Civic ou similar Sedã',
    details: '3 bolsas • 5 passageiros • 4 portas',
    price: 'R$ 110.000',
  },
];

const VehiclesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {cars.map((car, index) => (
        <View key={index} style={styles.carContainer}>
          <Text style={styles.title}>{car.name}</Text>
          <Image source={{ uri: car.image }} style={styles.carImage} />
          <Text style={styles.description}>{car.description}</Text>
          <Text style={styles.details}>{car.details}</Text>
          <Text style={styles.price}>{car.price}</Text>

          <TouchableOpacity style={styles.bookButton} onPress={() => alert(`${car.name} reservado!`)}>
            <Text style={styles.bookText}>Reservar</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  carContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  carImage: {
    width: 300,
    height: 200,
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    marginBottom: 5,
  },
  details: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  bookButton: {
    backgroundColor: '#f37021',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  bookText: {
    color: 'white',
    fontSize: 18,
  },
});

export default VehiclesScreen;
