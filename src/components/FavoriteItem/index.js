import React from "react";
import {Pressable, Image, Text, View} from "react-native";
import {styles} from "./styles";

const FavoriteItem = ({title, image, price, onPress}) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Image source={{uri: image}} style={styles.image}/>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>
            <Image source={require("../../assets/close.png")} style={styles.icon}/>
        </Pressable>
    )
}
export default React.memo(FavoriteItem);