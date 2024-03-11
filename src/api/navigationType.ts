import { ParamListBase, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the type for your navigation stack
export type RootStackParamList = {
  Home: undefined; // No parameters expected to be passed to Home screen
  Allusers: undefined; // Assume no parameters for ExtraScreen
  // Define other screens and their parameters if any
};

// Example of how you might type a navigation prop for a specific screen
export type ExtraScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Allusers'>;

// Example of how you might type a route prop for a specific screen
export type ExtraScreenRouteProp = RouteProp<RootStackParamList, 'Allusers'>;
