import React, { useEffect } from 'react';
import { View, FlatList, TouchableWithoutFeedback } from 'react-native';
import styles from "./Meals.style";
import useFetch from '../../hooks/useFetch';
import { API_URL } from "@env"
import Error from "../../components/Error"
import Loading from "../../components/Loading"
import MealCard from '../../components/MealCard/MealCard';

const Meals = ({ route, navigation }) => {

    const { idCategory, strCategory } = route.params;
    const { data, loading, error } = useFetch(API_URL + "filter.php?c=" + strCategory);


    const renderMeal = ({ item }) => {
        return (
            <TouchableWithoutFeedback onPress={() => { clickMeal(item) }}>
                <View>
                    <MealCard
                        name={item.strMeal}
                        image_uri={item.strMealThumb} />
                </View>
            </TouchableWithoutFeedback>
        )
    }

    const clickMeal = ({ idMeal }) => {
        navigation.navigate("DetailScreen", { idMeal });
    }

    return (
        <View style={styles.container}>
            {loading ? <Loading /> :
                    error ? <Error/>:
            <FlatList
                keyExtractor={(item) => item.idMeal}
                data={data.meals}
                renderItem={renderMeal} />
            }
        </View>
    );
}

export default Meals;
