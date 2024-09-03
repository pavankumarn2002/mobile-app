import { View, Text, StyleSheet, ScrollView, Animated, Easing, TouchableOpacity, Linking, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "@/constants/Colors";
import { Href, Link } from "expo-router";

const destinationCategories = [
    {
        id: 1,
        title: "All",
        iconName: "hiking",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        id: 2,
        title: "Beaches",
        iconName: "beach",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        id: 3,
        title: "Mountains",
        iconName: "terrain",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        id: 4,
        title: "Cities",
        iconName: "city",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        id: 5,
        title: "Forests",
        iconName: "tree",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        id: 6,
        title: "National Park",
        iconName: "pine-tree",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        id: 7,
        title: "Islands",
        iconName: "island",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        id: 8,
        title: "Deserts",
        iconName: "weather-sunny",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
];

export default function ListOfCategories({ props }: { props: string }) {
    const [data, setData] = useState<any>([]);
    const animatedValues = destinationCategories.map(() => new Animated.Value(0));

    const getData = () => {
        if (props === "" || props === "All") {
            setData(destinationCategories);
        } else {
            const filteredCategory = destinationCategories.filter((category) => category.title === props);
            setData(filteredCategory);
        }
    };

    useEffect(() => {
        getData();
    }, [props]);

    useEffect(() => {
        animateItems();
    }, [data]);

    const animateItems = () => {
        data.forEach((_: any, index: any) => {
            Animated.timing(animatedValues[index], {
                toValue: 1,
                duration: 500,
                delay: index * 100,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true,
            }).start();
        });
    };
    const handlePress = (item: any) => {
        console.log(item);
        const url = `/listing/${item}`;
        Linking.openURL(url);
    };
    return (
        <View>
            <Text style={styles.title}>List Of Categories</Text>
            {data.length === 0 ? (
                <Text style={styles.noDataText}>No data available</Text>
            ) : (
                <ScrollView style={styles.scrollView} horizontal showsHorizontalScrollIndicator={false}>
                    {data.map((item: any, index: number) => {
                        const animatedStyle = {
                            opacity: animatedValues[index],
                            transform: [
                                {
                                    translateY: animatedValues[index].interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [20, 0],
                                    }),
                                },
                            ],
                        };
                        return (
                            <Pressable onPress={() => {}} key={index}>
                                <Link href={("/listing/"+item.id) as Href}>
                                    <Animated.View  style={[styles.categoryCard, animatedStyle]}>
                                        <View style={styles.textContainer}>
                                            <Text style={styles.categoryTitle}>{item.title}</Text>
                                            <Text style={styles.categoryDescription}>{item.description}</Text>
                                        </View>
                                    </Animated.View>
                                </Link>
                            </Pressable>
                        );
                    })}
                </ScrollView>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flex: 1,
        backgroundColor: Colors.white,
    },
    title: {
        fontSize: 24,
        fontWeight: "700",
        color: Colors.black,
        marginBottom: 20,
    },
    noDataText: {
        fontSize: 18,
        color: Colors.gray,
        textAlign: "center",
    },
    scrollView: {
        marginTop: 10,
    },
    categoryCard: {
        width: 250,
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        marginBottom: 15,
        marginRight: 20,
        backgroundColor: Colors.white,
        borderRadius: 8,
        elevation: 2, // For shadow effect on Android
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
    },
    icon: {
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
    },
    categoryTitle: {
        fontSize: 18,
        fontWeight: "700",
        color: Colors.primary,
    },
    categoryDescription: {
        fontSize: 14,
        color: Colors.black,
        marginTop: 5,
    },
});
