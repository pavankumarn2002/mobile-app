import Colors from "@/constants/Colors";
import { Link } from "expo-router";
import { Slot, Stack } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
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
                headerTitle: "Popstrem",
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
});
