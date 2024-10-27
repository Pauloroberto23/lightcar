import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screen/HomeScreen';  
import VehicleScreen from './screen/VehicleScreen';
import UsedVehiclesScreen from './screen/UsedVehiclesScreen';
import CheckInScreen from './screen/CheckInScreen';
import FilterScreen from './screen/FilterScreen';  
import VerificationScreen from './screen/VerificationScreen'; 
import LoginScreen from './screen/LoginScreen';   
import RegisterScreen from './screen/RegisterScreen';  
import SplashScreen from './screen/SplashScreen'; 
import HotelsScreen from './screen/HotelsScreen';
import AboutUsScreen from './screen/AboutUsScreen';

const Stack = createStackNavigator();

const App = () => {
  const [user, setUser] = useState(null);  // Estado para armazenar o usuário

  // Simulando persistência de login
  useEffect(() => {
    const storedUser = null; // Aqui você pode usar AsyncStorage ou alguma lógica para persistir o usuário
    if (storedUser) {
      setUser(storedUser);  // Se tiver usuário persistido, define no estado
    }
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Splash" 
          options={{ headerShown: false }}
        >
          {props => <SplashScreen {...props} user={user} />}  
        </Stack.Screen>

        {user ? (
          <>
            <Stack.Screen 
              name="Home" 
              options={{ title: 'Home', headerShown: false }}
            >
              {props => <HomeScreen {...props} user={user} />} 
            </Stack.Screen>
            <Stack.Screen 
              name="Vehicles" 
              component={VehicleScreen} 
              options={{ title: 'Veículos Disponíveis' }} 
            />
            <Stack.Screen 
              name="UsedVehicles" 
              component={UsedVehiclesScreen} 
            />
            <Stack.Screen 
              name="Hotels" 
              component={HotelsScreen} 
              options={{ title: 'Hotéis Parceiros' }} 
            />
            <Stack.Screen 
              name="AboutUs" 
              component={AboutUsScreen} 
              options={{ title: 'Quem Somos' }}
            />
            <Stack.Screen 
              name="CheckIn" 
              component={CheckInScreen} 
            />
            <Stack.Screen 
              name="Filters" 
              component={FilterScreen} 
              options={{ title: 'Filtros de Veículos' }} 
            />  
            <Stack.Screen 
              name="Verification" 
              component={VerificationScreen} 
              options={{ title: 'Verificação de Documentos' }} 
            /> 
          </>
        ) : (
          <>
            <Stack.Screen 
              name="Login" 
              options={{ title: 'Login', headerShown: false }} 
            >
              {props => <LoginScreen {...props} setUser={setUser} />}  
            </Stack.Screen>
            
            <Stack.Screen 
              name="Register" 
              options={{ title: 'Cadastrar-se', headerShown: false }} 
            >
              {props => <RegisterScreen {...props} setUser={setUser} />}  
            </Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
