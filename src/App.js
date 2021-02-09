import 'react-native-gesture-handler';
import * as React from "react";
import { Provider as PaperProvider } from 'react-native-paper';
import NavigationRouts from "./NavigationRouts";

export default function App() {
    return(
        <PaperProvider>
            <NavigationRouts />
        </PaperProvider>
    );
};