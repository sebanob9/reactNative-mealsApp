import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

const MealDetailScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The mealDetail Screen!</Text>
            <Button title='go back to categories' onPress={ () => {
                props.navigation.popToTop();
            }}/>
        </View>
        
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealDetailScreen;
