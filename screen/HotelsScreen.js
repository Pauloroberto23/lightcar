// HotelScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';

const HotelScreen = ({ navigation }) => {
  const hotels = [
    { name: 'Hotel São Domingos', url: 'https://www.hoteis.com/ho448674/hotel-sao-domingos-feira-de-santana-brasil/' },
    { name: 'Unico Apart Hotel', url: 'https://unicoaparthotel.com.br/' },
    { name: 'ibis Feira de Santana', url: 'https://ibis.accor.com/pt-br/destination/city/hotels-feira-de-santana-v14105.html' },
    { name: 'Hotel Caju de Ouro', url: 'https://cajudeouro.com.br/' },
    { name: 'NH HOTEL', url: 'https://www.nh-hotels.com/pt?campid=8435708&gad_source=1&gclid=Cj0KCQjwpvK4BhDUARIsADHt9sSFEBHO2ZETRuOsLjC8dxIDiWbtA6osHhjV_z51cEcvJBZBgyF8T3saAngpEALw_wcB&gclsrc=aw.ds' },
    { name: 'Portal da Princesa Hotel', url: 'https://www.portaldaprincesa.com.br/' },
  ];

  const openHotelLink = (url) => {
    Linking.openURL(url).catch((err) => console.error('Failed to open link:', err));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>Em Parceria com CarFlex</Text>

      <View style={styles.hotelContainer}>
        <Text style={styles.title}>Hotéis Parceiros</Text>
        
        {hotels.map((hotel, index) => (
          <TouchableOpacity key={index} style={styles.hotelBox} onPress={() => openHotelLink(hotel.url)}>
            <Text style={styles.hotelName}>{hotel.name}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity onPress={() => navigation.navigate('AboutUs')} style={styles.aboutButton}>
          <Text style={styles.aboutButtonText}>Quem Somos</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'purple',
    marginBottom: 20,
  },
  hotelContainer: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  hotelBox: {
    backgroundColor: '#f3f3f3',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    width: '90%',
    alignItems: 'center',
  },
  hotelName: {
    fontSize: 18,
    color: '#333',
  },
  aboutButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: 'purple',
    borderRadius: 10,
  },
  aboutButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default HotelScreen;


