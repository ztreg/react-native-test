import { Stack } from 'expo-router';


export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: 'index',
};

export default function Layout() {
  return (
    <Stack
      // https://reactnavigation.org/docs/headers#sharing-common-options-across-screens
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      {/* Optionally configure static options outside the route. */}
      <Stack.Screen name="home" options={{}} />
    </Stack>
  );
}