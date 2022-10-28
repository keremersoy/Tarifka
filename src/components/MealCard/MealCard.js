import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from "./MealCard.style";

const MealCard = ({image_uri,name}) => {
    return (
        <View>
            <ImageBackground
                imageStyle={styles.image}
                style={styles.container}
                source={{ uri: image_uri }}>
                <Text style={styles.title}>{name.length>30?name.substring(0,30)+"...":name}</Text>
            </ImageBackground>
        </View>
    );
}

export default MealCard;
