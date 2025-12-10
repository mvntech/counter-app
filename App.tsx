import "./global.css";
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className='flex-1 items-center justify-center bg-black'>
      <Text className='text-2xl text-white'>Welcome to Counter App!</Text>
    </View>
  );
}
