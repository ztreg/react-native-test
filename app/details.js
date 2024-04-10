import { View, Text } from 'react-native';
import { Link, Stack, useLocalSearchParams, useRouter } from 'expo-router';

export default function Details() {
  const router = useRouter();
  const params = useLocalSearchParams();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Stack.Screen
        options={{
          title: params.name,
        }}
      />
      <Text
        onPress={() => {
          router.setParams({ name: 'Updated' });
          router.push('/about');
        }}>
        Update the title
      </Text>
      {/* <Link href={{ pathname: 'about', params: { name: 'Bacon' } }}>Go to About</Link> */}
    </View>
  );
}