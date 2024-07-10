import { View, Animated, StyleSheet } from "react-native"
import { useEffect, useRef } from "react"

const BouncingDots = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        dot: {
            width: 10,
            height: 10,
            borderRadius: 100,
            backgroundColor: '#000',
            margin: 5,
        },
    });
    const animations = useRef([...Array(5)].map(() => new Animated.Value(0))).current

    useEffect(() => {
        const animate = (animation) => {
            return Animated.sequence([
                Animated.timing(animation, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }),
                Animated.timing(animation, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true,
                }),
            ])
        }

        const animationsSequence = animations.map((animation) =>
            animate(animation)
        );

        Animated.loop(Animated.stagger(100, animationsSequence)).start()
    }, [animations])

    return (
        <View style={styles.container}>
            {animations.map((animation, index) => {
                const translateY = animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -20],
                });

                return (
                    <Animated.View
                        key={index}
                        style={[
                            styles.dot,
                            { transform: [{ translateY }] },
                        ]}
                    />
                );
            })}
        </View>
    );
}

export default BouncingDots