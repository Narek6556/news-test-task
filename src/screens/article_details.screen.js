import {View, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ArticleDetailsScreen() {
    return (
        <SafeAreaView>
            <View>
                <Text>
                    {'Article Details Screen'}
                </Text>
            </View>
        </SafeAreaView>
    );
}