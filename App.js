import { NativeBaseProvider, Box, Text } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#ccc" alignItems="center" justifyContent="center">
        <Text>Open up App.js to start working on your app!</Text>
      </Box>
    </NativeBaseProvider>
  );
}
