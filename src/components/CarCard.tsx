import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

interface CarCardProps {
  car: {
    make: string;
    model: string;
    year: number;
    imageUrl: string;
  };
}

const CarCard: React.FC<CarCardProps> = ({car}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} />
      <Text style={styles.title}>
        {car.make} {car.model}
      </Text>
      <Text>{car.year}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CarCard;
