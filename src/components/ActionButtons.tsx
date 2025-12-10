import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, {
    useAnimatedStyle,
    withTiming,
    interpolate
} from 'react-native-reanimated';
interface ActionButtonsProps {
    onIncrement: () => void;
    onDecrement: () => void;
    canDecrement: boolean;
}
export const ActionButtons: React.FC<ActionButtonsProps> = ({
    onIncrement,
    onDecrement,
    canDecrement,
}) => {
    const decrementOpacity = useAnimatedStyle(() => ({
        opacity: withTiming(canDecrement ? 1 : 0.3),
    }));
    return (
        <View className="absolute bottom-0 left-0 right-0 flex-row justify-between px-4 pb-2">
            {/* subtract button */}
            <Animated.View style={decrementOpacity}>
                <TouchableOpacity
                    onPress={onDecrement}
                    disabled={!canDecrement}
                    className="w-[62px] h-[62px] rounded-full border border-white/40 items-center justify-center active:border-white/80"
                >
                    <Ionicons name="remove" size={36} color="white" />
                </TouchableOpacity>
            </Animated.View>
            {/* add button */}
            <TouchableOpacity
                onPress={onIncrement}
                className="w-[62px] h-[62px] rounded-full border border-white/40 items-center justify-center active:border-white/80"
            >
                <Ionicons name="add" size={36} color="white" />
            </TouchableOpacity>
        </View>
    );
};