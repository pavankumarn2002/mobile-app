import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import Colors from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ListOfCategories from "./ListOfCategories";

const destinationCategories = [
    { title: "All", iconName: "hiking" },
    { title: "Beaches", iconName: "beach" },
    { title: "Mountains", iconName: "terrain" },
    { title: "Cities", iconName: "city" },
    { title: "Forests", iconName: "tree" },
    { title: "National Park", iconName: "pine-tree" },
    { title: "Islands", iconName: "island" },
    { title: "Deserts", iconName: "weather-sunny" },
];

export default function CategoryButtons() {
    const scrollRef = useRef<ScrollView>(null);
    const itemRef = useRef<TouchableOpacity[] | null[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [categories,setCategories]=useState("")
    const handleSelectCategory = (i: number,item:string) => {
        setCategories(item)
        const selected = itemRef.current[i];
        if (selected) {
            selected.measureLayout(
                scrollRef.current as any, // Measure relative to the scroll view
                (x, y, width, height) => {
                    scrollRef.current?.scrollTo({ x, y: 0, animated: true });
                },
                () => {
                    // Fallback in case measure fails
                    console.warn("Measure failed");
                }
            );
            setActiveIndex(i);
        }
    };

    return (
        <View>
            <Text style={styles.title}>Categories</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.scrollBar}
                ref={scrollRef}
            >
                {destinationCategories.map((item, index) => {
                    const isActive = activeIndex === index;
                    return (
                        <TouchableOpacity
                            key={index}
                            ref={(ele) => (itemRef.current[index] = ele)}
                            onPress={() => handleSelectCategory(index,item.title)}
                            style={isActive ? styles.categoryButtonActive : styles.categoryButton}
                        >
                            <MaterialCommunityIcons
                                name={item.iconName as any}
                                size={20}
                                color={isActive ? Colors.white : Colors.black}
                            />
                            <Text style={isActive ? styles.categoryButtonTxtActive : styles.categoryButtonTxt}>
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
            <ListOfCategories props={categories}/>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "700",
        color: Colors.primaryColor,
    },
    scrollBar: {
        paddingVertical: 10,
        marginBottom: 10,
    },
    categoryButton: {
        flexDirection: "row",
        backgroundColor: Colors.white,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        marginRight: 20,
        shadowColor: "#333333",
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    categoryButtonActive: {
        flexDirection: "row",
        backgroundColor: Colors.primaryColor,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        marginRight: 20,
        shadowColor: "#333333",
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    categoryButtonTxt: {
        marginLeft: 5,
        color: Colors.black,
    },
    categoryButtonTxtActive: {
        marginLeft: 5,
        color: Colors.white,
    },
});
