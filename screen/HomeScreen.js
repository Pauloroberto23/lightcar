import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';


const HomeScreen = ({  navigation,user }) => {
 
  const userName = user?.name || 'Usuário';
  const userEmail = user?.email || 'email não disponível';

  const handleLogout = () => {
    setUser(null); // Limpa o usuário do contexto ao sair
    navigation.navigate('Login'); // Navega para a tela de Login
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo, {userName}!</Text>
      <Text style={styles.text}>Você está logado com o email {userEmail}.</Text>

      <View style={styles.topMenuContainer}>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('CheckIn')}>
          <Image source={{ uri: 'https://png.pngtree.com/png-vector/20191113/ourmid/pngtree-green-check-mark-icon-flat-style-png-image_1986021.jpg' }} style={styles.icon} />
          <Text style={styles.menuText}>Check-In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('UsedVehicles')}>
          <Image source={{ uri: 'https://img.freepik.com/vetores-premium/modelo-de-logotipo-de-revendedor-de-carros-usados_784584-410.jpg' }} style={styles.icon} />
          <Text style={styles.menuText}>Usados</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Vehicles')}>
          <Image source={{ uri: 'https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize%2F2019%2F05%2F31%2F14%2FLogo-257280_43234_145138593_206570982.jpg' }} style={styles.icon} />
          <Text style={styles.menuText}>Novos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Hotels')}>
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/6395/6395481.png' }} style={styles.icon} />
          <Text style={styles.menuText}>Hotel</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Verification')}>
          <Image source={{ uri: 'https://img.freepik.com/vetores-premium/modelo-de-logotipo-de-vetor-de-icone-de-marca-de-verificacao-da-lista-de-verificacao_917138-1454.jpg' }} style={styles.icon} />
          <Text style={styles.menuText}>CNH</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Filters')}>
          <Image source={{ uri: 'https://png.pngtree.com/element_our/sm/20180620/sm_5b29c19b910c7.jpg' }} style={styles.icon} />
          <Text style={styles.menuText}>Filtros</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.animationContainer}>
        <LottieView
          source={{ uri: 'https://lottie.host/da65df51-03ad-4717-9156-cb4bd83dae07/mi0jc9sbWL.json' }}
          autoPlay
          loop
          style={styles.animation}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  topMenuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  menuButton: {
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    marginBottom: 5,
  },
  menuText: {
    fontSize: 12,
    color: 'white',
  },
  animationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  animation: {
    width: 500,
    height: 400,
  },
});

export default HomeScreen;






  
