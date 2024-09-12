import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Image, Button, Modal, Pressable } from "react-native";
import Carousel from "react-native-snap-carousel";
import axios from "axios";
import Colors from "@/constants/Colors";

const HomeScreen = () => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0); // Tracks the active carousel item
    const carouselRef = useRef(null); // Reference for Carousel
    const [isVisible,setIsVisible]=useState(false)
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/photos");
            // Fetch only 7 items from the API
            setPhotos(response.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    const renderItem = ({ item }: any) => {
        return (
            <View style={styles.slide}>
                <Image source={{ uri: item.url }} style={styles.image} />
                <Text style={styles.title}>{item.title}</Text>
            </View>
        );
    };

    const handleNextPress = () => {
        const nextIndex = activeIndex === photos.length - 1 ? 0 : activeIndex + 1;
        carouselRef.current.snapToItem(nextIndex);
        setActiveIndex(nextIndex);
    };

    const handlePreviousPress = () => {
        const prevIndex = activeIndex === 0 ? photos.length - 1 : activeIndex - 1;
        carouselRef.current.snapToItem(prevIndex);
        setActiveIndex(prevIndex);
    };

    return (
        <View>
            <Text style={styles.postTitle}>Image Slider</Text>
            <View style={styles.corouselContainer}>
                {loading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                    <>
                        <Carousel
                            ref={carouselRef} // Reference to the carousel
                            layout={"default"}
                            data={photos}
                            renderItem={renderItem}
                            sliderWidth={300}
                            itemWidth={250}
                            onSnapToItem={(index) => setActiveIndex(index)} // Update active index when sliding
                        />

                        <View style={styles.navigationContainer}>
                            <Button title="Previous" onPress={handlePreviousPress} />
                            <Button title="Next" onPress={handleNextPress} />
                        </View>
                    </>
                )}
            </View>
            <Pressable style={{margin:25,backgroundColor:Colors.primaryColor,padding:10,borderRadius:7,width:200,justifyContent:'center',alignItems:'center'}} onPress={()=>{setIsVisible(true)}}><Text style={{color:Colors.white}}>Open Model</Text></Pressable>
            <Modal visible={isVisible} animationType="slide">
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>React Native Modal</Text>
                <Pressable style={{margin:25,backgroundColor:Colors.primaryColor,padding:10,borderRadius:7,width:200,justifyContent:'center',alignItems:'center'}} onPress={()=>{setIsVisible(false)}}><Text style={{color:Colors.white}}>Close</Text></Pressable>
              </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    corouselContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingTop: 25,
        paddingBottom: 25,
    },
    postTitle: {
        fontSize: 24,
        fontWeight: "700",
        color: Colors.primaryColor,
    },
    slide: {
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
    },
    title: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    navigationContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "60%",
        marginTop: 20,
    },
});

export default HomeScreen;
