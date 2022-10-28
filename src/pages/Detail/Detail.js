import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, Linking ,ActivityIndicator} from 'react-native';
import useFetch from '../../hooks/useFetch';
import styles from "./Detail.style";
import Error from "../../components/Error"
import Loading from "../../components/Loading"
import { API_URL } from "@env"

const Detail = ({ route, navigation }) => {
    const [meal, setMeal] = useState([]);
    const { idMeal } = route.params;
    const { data, loading, error } = useFetch(API_URL + "lookup.php?i=" + idMeal);

    useEffect(() => {
        setMeal(data.meals ? data.meals[0] : []);
        console.log(data.meals ? data.meals[0] : []);
    }, [data]);

    const handlePress = async () => {
        await Linking.openURL(meal.strYoutube).catch(err => console.error("Couldn't load", err));
    }
    
    return (
        <ScrollView style={styles.outer_container}>
            {loading ? <Loading /> :
                    error ? <Error/>:
                    <View style={styles.inner_container}>

                        <View style={styles.top_container}>
                            <Image style={styles.image} source={{ uri: meal.strMealThumb }} />
                            <View style={styles.title_container}>
                                <Text style={styles.title}>{meal.strMeal}</Text>
                                <Text style={styles.area}>{meal.strArea}</Text>
                            </View>

                        </View>

                        <View style={styles.bottom_container}>
                            <Text style={styles.instructions}>{meal.strInstructions}</Text>
                        </View>
                        <TouchableOpacity style={styles.btn_youtube}>
                            <Text style={styles.btn_youtube_text} onPress={handlePress}>Watch On Youtube</Text>
                        </TouchableOpacity>
                    </View>
            }
        </ScrollView>

    );
}


export default Detail;
