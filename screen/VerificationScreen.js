import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const VerificationScreen = () => {
  const [cnhImage, setCnhImage] = useState(null);

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permissão para acessar a galeria de fotos é necessária!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setCnhImage(result.uri);
    }
  };

  const submitVerification = () => {
    if (cnhImage) {
      alert('Documento enviado para verificação!');
    } else {
      alert('Por favor, faça o upload da CNH.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verificação de Documentos</Text>

      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Upload da CNH</Text>
      </TouchableOpacity>
      
      {cnhImage && <Image source={{ uri: cnhImage }} style={styles.image} />}

      <TouchableOpacity style={[styles.button, styles.submitButton]} onPress={submitVerification}>
        <Text style={styles.buttonText}>Enviar para Verificação</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    width: '80%',
    backgroundColor: '#6200EE',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
  },
  submitButton: {
    backgroundColor: 'green', 
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default VerificationScreen;

