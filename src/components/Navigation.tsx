import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
interface NavigationProps {
    onInfoPress: () => void;
    onSettingsPress: () => void;
    onResetPress: () => void;
}
export const Navigation: React.FC<NavigationProps> = ({
    onInfoPress,
    onSettingsPress,
    onResetPress,
}) => {
    return (
        <Animated.View
            entering={FadeIn.delay(300)}
            exiting={FadeOut}
            className="absolute top-4 left-0 right-0 flex-row justify-center space-x-2"
        >
            <TouchableOpacity
                onPress={onInfoPress}
                className="w-[42px] h-[42px] rounded-full items-center justify-center active:scale-125"
            >
                <Ionicons name="information-circle-outline" size={28} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={onSettingsPress}
                className="w-[42px] h-[42px] rounded-full items-center justify-center active:scale-125"
            >
                <Ionicons name="settings-outline" size={28} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={onResetPress}
                className="w-[42px] h-[42px] rounded-full items-center justify-center active:scale-125"
            >
                <Ionicons name="refresh-outline" size={28} color="white" />
            </TouchableOpacity>
        </Animated.View>
    );
};