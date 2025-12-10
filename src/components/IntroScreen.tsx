import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withSequence,
    withDelay,
    Easing,
} from 'react-native-reanimated';
interface IntroScreenProps {
    onComplete: () => void;
}
export const IntroScreen: React.FC<IntroScreenProps> = ({ onComplete }) => {
    const titleOpacity = useSharedValue(0);
    const titleTranslateX = useSharedValue(200);
    const subtitleOpacity = useSharedValue(0);
    useEffect(() => {
        titleOpacity.value = withSequence(
            withTiming(1, { duration: 1500, easing: Easing.inOut(Easing.ease) }),
            withDelay(2000, withTiming(0, { duration: 500 }))
        );

        titleTranslateX.value = withTiming(-200, {
            duration: 5000,
            easing: Easing.inOut(Easing.ease)
        });

        subtitleOpacity.value = withSequence(
            withDelay(1500, withTiming(1, { duration: 800 })),
            withDelay(1200, withTiming(0, { duration: 500 }))
        );

        const timer = setTimeout(onComplete, 4500);
        return () => clearTimeout(timer);
    }, []);
    const titleStyle = useAnimatedStyle(() => ({
        opacity: titleOpacity.value,
        transform: [{ translateX: titleTranslateX.value }],
    }));
    const subtitleStyle = useAnimatedStyle(() => ({
        opacity: subtitleOpacity.value,
    }));
    return (
        <View className="flex-1 justify-center items-center px-5">
            <Animated.Text
                style={titleStyle}
                className="text-5xl font-inter-bold text-white mb-4"
            >
                Counter App
            </Animated.Text>

            <Animated.Text
                style={subtitleStyle}
                className="text-lg font-inter text-white text-center max-w-[420px]"
            >
                Because every number matters!
            </Animated.Text>
        </View>
    );
};