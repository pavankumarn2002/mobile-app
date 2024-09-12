import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Slot, Stack } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
export default function RootLayout() {
    const DrawerContent = ({ navigation }: any) => {
        return (
            <View>
                <View style={styles.sideHeader}>
                    <Text style={styles.sideHeaderTitle}>Side Bar</Text>
                    <Pressable
                        onPress={() => {
                            navigation.toggleDrawer();
                        }}
                    >
                        <Text style={styles.sideHeaderTitle}>X</Text>
                    </Pressable>
                </View>
                <View style={styles.sideItems}>
                <Link style={styles.sideItem} href={"/"}>
                        Index
                    </Link>
                    <Link style={styles.sideItem} href={"/profile"}>
                        Profile
                    </Link>
                    <Link style={styles.sideItem} href={"/category"}>
                        Category
                    </Link>
                    <Link style={styles.sideItem} href={"/bookmark"}>
                        Book Mark
                    </Link>
                    <Link style={styles.sideItem} href={"/search"}>
                        Search
                    </Link>
                </View>
            </View>
        );
    };
    // return (
    //     <Stack>
    //       <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    //     </Stack>
    // );
    return (
        <Drawer
            drawerContent={DrawerContent}
            screenOptions={{

                headerTitle: () => (
                    <Pressable onPress={() => {}} >
                        <Image source={require("./../assets/images/transport.png")} style={{marginLeft:-25,marginTop: 0, width: 40, height: 40, borderRadius: 20 }} />
                    </Pressable>
                ),
                headerRight: () => (
                    <Pressable onPress={() => {}}>
                        <Ionicons name="notifications" size={22} color={Colors.black} style={styles.shadow} />
                    </Pressable>
                )
            }}
        />
    );
}
const styles = StyleSheet.create({
    sideHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
    },
    sideHeaderTitle: {
        fontSize: 28,
        fontWeight: "500",
    },
    sideItems: {
        padding: 20,
    },
    sideItem: {
        padding: 10,
        marginBottom: 5,
        backgroundColor: Colors.primaryColor,
        color: Colors.white,
        fontSize: 28,
        fontWeight: "500",
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
});
