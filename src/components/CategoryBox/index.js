import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { styles } from "./styles";
import { colors } from "../../utils/colors";

const CategoryBox = ({ title, image, onPress, isSelected}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={[styles.imageContainer, isSelected ? {backgroundColor : colors.black} : {}]}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <Text style={[styles.title, isSelected ? {color: colors.blue, fontWeight: '500'} : {}]}>{title}</Text>
    </Pressable>
  );
};

export default CategoryBox;