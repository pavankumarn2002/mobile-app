import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView, Pressable } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { useHeaderHeight } from "@react-navigation/elements";
import CategoryButtons from "@/components/CategoryButtons";
import Posts from "@/components/Posts";
export default function Page() {
    const headerHeight = useHeaderHeight();
    return (
        <>
            <Stack.Screen
                options={{
                    headerTransparent: true,
                    headerTitle: "",
                    headerLeft: () => (
                        <Pressable onPress={() => {}}>
                            <Image source={require("./../../assets/images/transport.png")} style={{ marginTop: 15, width: 40, height: 40, borderRadius: 20 }} />
                        </Pressable>
                    ),
                    headerRight: () => (
                        <Pressable onPress={() => {}}>
                            <Ionicons name="notifications" size={22} color={Colors.black} style={styles.shadow} />
                        </Pressable>
                    ),
                }}
            />
            <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={[styles.container, { paddingTop: headerHeight }]}>
                    <Text style={styles.headerText}>Expolre The Beautiful World</Text>
                    <View style={styles.searchSectionWraper}>
                        <View style={styles.searchBar}>
                            <Ionicons name="search" size={18} style={{ marginRight: 5 }} color={Colors.black} />
                            <TextInput placeholder="Search..." />
                        </View>
                        <TouchableOpacity onPress={() => {}} style={styles.filterButton}>
                            <Ionicons name="options" size={30} color={Colors.white} />
                        </TouchableOpacity>
                    </View>
                    <CategoryButtons />
                    <Posts />
                </View>
            </ScrollView>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: Colors.bgColor,
    },
    headerText: {
        fontSize: 20,
        fontWeight: "800",
        marginTop: 10,
        color: Colors.black,
    },
    shadow: {
        padding: 5,
        backgroundColor: Colors.white,
        borderRadius: 5,
        marginRight: 10,
        shadowColor: "#171717",
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    searchSectionWraper: {
        flexDirection: "row",
        marginVertical: 20,
        alignItems: "center",
    },
    searchBar: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: Colors.white,
        padding: 16,
        borderRadius: 10,
    },
    filterButton: {
        backgroundColor: Colors.primaryColor,
        padding: 12,
        borderRadius: 5,
        marginLeft: 7,
    },
});
