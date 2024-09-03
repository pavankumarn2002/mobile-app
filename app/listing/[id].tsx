import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import axios from "axios";
import Colors from "@/constants/Colors";
interface Posts {
    id: number;
    userId: number;
    title: string;
    body: string;
}
export default function ListingDetails() {
    const { id } = useLocalSearchParams();
    const [data, setData] = useState<Posts>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                const mainData = response.data.filter((item: any) => {
                    return item.id === Number(id);
                });
                setData(mainData[0]);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, [id]);

    // if (loading) {
    //     return <Text>Loading...</Text>;
    // }

    // if (!data) {
    //     return <Text>No data found.</Text>;
    // }

    return (
        <View style={styles.detailsContainer}>
            <Text style={styles.titleText}>Listing Details</Text>
            <Text style={styles.text}>User Id : {data?.userId}</Text>
            <Text style={styles.text}>ID : {data?.id}</Text>
            <Text style={styles.text}>Title : {data?.title}</Text>
            <Text style={styles.text}>Body : {data?.body}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    detailsContainer: {
        flex: 1,
        padding: 20,
    },
    titleText:{
        color:Colors.primaryColor,
        fontWeight:'bold',
        fontSize:28,
    },
    text:{
        fontWeight:'bold',
        fontSize:20
    }
});
