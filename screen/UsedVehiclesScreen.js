import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const usedCars = [
  {
    name: 'Chevrolet Prisma',
    image: 'https://lh4.googleusercontent.com/proxy/ODYcLVwAJME88Yf4ldZ62WQF7NdRgTuVrVx_wyBWuOUB9R7IR3QqSISlm_ZmmwElld7tPvScJeQRyMWiNz6QAk104af-jvEeRBOcIExSjNtbFP7BWYPDJACX5Yz6L_z6ne_Hxw',
    description: 'Chevrolet Prisma usado',
    details: '2 bolsas • 5 passageiros • 4 portas',
    distance: 30,
    price: 100,
    availableTime: '14:00',
  },
  {
    name: 'Fiat Uno',
    image: 'https://www.infomoney.com.br/wp-content/uploads/2019/06/fiat-uno-vivace.jpg?fit=900%2C572&quality=50&strip=all',
    description: 'Fiat Uno usado',
    details: '1 bolsa • 5 passageiros • 2/4 portas',
    distance: 10,
    price: 60,
    availableTime: '10:00',
  },
  {
    name: 'Volkswagen Fox',
    image: 'https://www.webmotors.com.br/wp-content/uploads/2021/10/06210012/VW-Fox-2003.jpeg',
    description: 'Volkswagen Fox usado',
    details: '2 bolsas • 5 passageiros • 4 portas',
    distance: 50,
    price: 80,
    availableTime: '16:00',
  },
  {
    name: 'Renault Logan',
    image: 'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/368/SP/BR/RENAULT-LOGAN-6459_1.JPG',
    description: 'Renault Logan usado',
    details: '3 bolsas • 5 passageiros • 4 portas',
    distance: 20,
    price: 80,
    availableTime: '14:00',
  },
  {
    name: 'Ford Fiesta',
    image: 'https://doutorie.com.br/blog/wp-content/uploads/2022/09/template-bg-blog.jpg',
    description: 'Ford Fiesta usado',
    details: '1 bolsa • 5 passageiros • 2/4 portas',
    distance: 15,
    price: 50,
    availableTime: '12:00',
  },
];

const UsedVehiclesScreen = ({ route, navigation }) => {
  // Recebe os filtros passados pela tela de filtros
  const { distance, time, price } = route.params || {};

  // Se não houver filtros, mostra todos os carros
  const filteredCars = usedCars.filter(car => {
    if (!distance && !time && !price) {
      return true; // Se não houver filtros, exibe todos os carros
    }
    return (
      (!distance || car.distance <= distance) &&
      (!price || car.price <= price) &&
      (!time || car.availableTime === time)
    );
  });

  return (
    <View style={styles.container}>
      {/* Botão de Filtro na parte superior */}
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => navigation.navigate('Filters')} // Navega para a tela de filtros
        >
          <Text style={styles.filterButtonText}>Filtros</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de carros filtrados ou todos os carros */}
      <ScrollView style={styles.scrollView}>
        {filteredCars.length > 0 ? (
          filteredCars.map((car, index) => (
            <View key={index} style={styles.carContainer}>
              <Text style={styles.title}>{car.name}</Text>
              <Image source={{ uri: car.image }} style={styles.carImage} />
              <Text style={styles.description}>{car.description}</Text>
              <Text style={styles.details}>{car.details}</Text>
              <Text style={styles.price}>R$ {car.price}</Text>

              <TouchableOpacity style={styles.bookButton} onPress={() => alert(`${car.name} reservado!`)}>
                <Text style={styles.bookText}>Reservar</Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text style={styles.noResults}>Nenhum carro corresponde aos filtros.</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  filterContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  filterButton: {
    backgroundColor: '#f37021',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  filterButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  scrollView: {
    paddingHorizontal: 20,
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
  noResults: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
    color: '#666',
  },
});

export default UsedVehiclesScreen;


