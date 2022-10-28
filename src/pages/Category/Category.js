import React from 'react';
import { SafeAreaView, View,Text, FlatList, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import styles from "./Category.style";
import CategoryCard from '../../components/CategoryCard';
import useFetch from "../../hooks/useFetch"
import Error from "../../components/Error"
import Loading from "../../components/Loading"
import { API_URL } from '@env';

const Category = ({ navigation }) => {

    const { data, loading, error } = useFetch(API_URL + "Categories.php");

    const renderCategory = ({ item }) => {
        return (
            <TouchableWithoutFeedback onPress={() => { clickCategory(item) }}>
                <View>
                    <CategoryCard
                        name={item.strCategory}
                        image_uri={item.strCategoryThumb} />
                </View>
            </TouchableWithoutFeedback>
        );
    }

    const clickCategory = ({ idCategory, strCategory }) => {
        navigation.navigate("MealsScreen", { idCategory, strCategory });
    }

    return (
        <SafeAreaView style={styles.container}>
            {loading ? <Loading /> :
                    error ? <Error/>:
                        < View style={styles.container}>
                            <FlatList
                                keyExtractor={(item) => item.idCategory}
                                data={data.categories}
                                renderItem={renderCategory} />
                        </View>
            }
        </SafeAreaView >
    );
}


export default Category;
