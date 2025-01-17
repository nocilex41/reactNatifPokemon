import {Text, View} from "react-native";
import {useLocalSearchParams} from "expo-router";

export default function pokemon(){
        const params = useLocalSearchParams()
        return <View>
            <Text>Pokemon {params.id}</Text>
        </View>
    }