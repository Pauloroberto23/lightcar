// AboutUsScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const AboutUsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>Quem Somos</Text>
      <Text style={styles.bodyText}>
        Bem-vindo à CarFlex! Somos uma empresa dedicada a oferecer as melhores soluções de mobilidade, em parceria com hotéis de alta qualidade para garantir conforto e praticidade aos nossos clientes.
        {"\n\n"}
        Na CarFlex, nos preocupamos em fornecer uma experiência única de reserva e locação de veículos, além de serviços exclusivos de fidelidade e parcerias com hotéis selecionados. 
        {"\n\n"}
        Nosso compromisso é entregar um serviço eficiente e transparente, sempre focado na satisfação do cliente.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'purple',
    textAlign: 'center',
    marginBottom: 20,
  },
  bodyText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
});

export default AboutUsScreen;
