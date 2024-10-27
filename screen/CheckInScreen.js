import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const CheckInScreen = ({ reservedCar }) => {
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Check-In</Text>

      {/* Exibe o nome do carro reservado, se houver */}
      {reservedCar ? (
        <Text style={styles.reservedCarText}>Carro Reservado: {reservedCar}</Text>
      ) : (
        <Text style={styles.noReservationText}>Nenhum carro reservado.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  reservedCarText: {
    fontSize: 22,
    color: '#333',
    marginBottom: 20,
  },
  noReservationText: {
    fontSize: 18,
    color: '#666',
  },
});

export default CheckInScreen;

