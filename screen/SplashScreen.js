import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation, user }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (user) {
        navigation.replace('Home'); // Vai para a Home se o usuário está logado
      } else {
        navigation.replace('Login'); // Vai para o Login se o usuário não está logado
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation, user]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo!</Text>
      <Image
        source={{ uri: 'https://carflexplus.com/wp-content/uploads/2024/05/cropped-logo-e1717084055186.png' }}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    color: 'purple',
    marginBottom: 20,
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
