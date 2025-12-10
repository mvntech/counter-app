import React from 'react';
import { Text, View } from 'react-native';
import Animated, {
    useAnimatedStyle,
    withSpring
} from 'react-native-reanimated';
interface CounterDisplayProps {
    count: number;
}
export const CounterDisplay: React.FC<CounterDisplayProps> = ({ count }) => {
    const digitCount = count.toString().length;
    const getFontSizeClass = () => {
        switch (digitCount) {
            case 1: return 'text-[16rem]';
            case 2: return 'text-[11rem]';
            case 3: return 'text-[7.5rem]';
            case 4: return 'text-[6.25rem]';
            default: return 'text-[6.25rem]';
        }
    };
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: withSpring(1, { damping: 10 }) }],
    }));
    return (
        <View className="flex-1 justify-center items-center">
            <Animated.Text
                className={`${getFontSizeClass()} font-inter-bold text-white leading-none`}
                style={animatedStyle}
            >
                {count}
            </Animated.Text>
        </View>
    );
};