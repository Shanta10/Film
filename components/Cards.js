import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Cards = ({ title, subtitle1, subtitle2, onEditPress, onDeletePress }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle1}</Text>
      <Text style={styles.subtitle}>{subtitle2}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onEditPress}>
          <Icon name="pencil" size={30} color="#007bff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDeletePress}>
          <Icon name="trash" size={30} color="#ff0000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default Cards;
