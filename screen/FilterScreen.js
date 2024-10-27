import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import Slider from '@react-native-community/slider'; 

const FilterScreen = ({ navigation }) => {
  const [distance, setDistance] = useState(10);
  const [time, setTime] = useState('14:00');
  const [price, setPrice] = useState(100);

  const applyFilters = () => {
    // Navegar para a tela de veículos usados passando os filtros
    navigation.navigate('UsedVehicles', { distance, time, price });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filtros de Aluguel de Carros</Text>

      <Text style={styles.label}>Distância Máxima: {distance}km</Text>
      <Slider
        style={styles.slider}
        value={distance}
        onValueChange={setDistance}
        minimumValue={0}
        maximumValue={100000}
        step={1}
      />

      <Text style={styles.label}>Horário de Retirada:</Text>
      <TextInput
        style={styles.input}
        value={time}
        onChangeText={setTime}
        placeholder="Ex: 14:00"
      />

      <Text style={styles.label}>Preço Máximo: R$ {price}</Text>
      <Slider
        style={styles.slider}
        value={price}
        onValueChange={setPrice}
        minimumValue={50}
        maximumValue={500}
        step={10}
      />

      <Button title="Aplicar Filtros" onPress={applyFilters} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  slider: {
    width: '100%',
    height: 40,
    marginBottom: 20,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '100%',
  },
});

export default FilterScreen;
