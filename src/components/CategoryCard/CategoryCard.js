import React from 'react';
import {View,Text,Image} from 'react-native';
import styles from "./CategoryCard.style";

const CategoryCard = ({name,image_uri}) => {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.image}
                source={{uri:image_uri}}/>
            <Text style={styles.title}>{name}</Text>
        </View>
    );
}


export default CategoryCard;
