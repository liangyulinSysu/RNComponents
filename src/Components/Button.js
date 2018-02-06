import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TouchableComponent } from '../Components';

const PropTypes = require('prop-types');

class Button extends Component {
    static propTypes = {
        touchType: PropTypes.oneOf(['TouchableHighlight', 'TouchableOpacity', 'TouchableWithoutFeedback', 'TouchableNativeFeedback']),
        onPress: PropTypes.func,
        title: PropTypes.string
    }

    static defaultProps = {
        touchType: 'TouchableOpacity'
    };

    render() {
        const { touchType, onPress, title, titleStyle } = this.props;

        return (
            <View {...this.props}>
                <TouchableComponent touchType={touchType} onPress={onPress}>
                    <Text style={[styles.textStyle, titleStyle]}>{title}</Text>
                </TouchableComponent>
            </View>
        );
    }
}

const styles = {
    textStyle: {
        fontSize: 18,
        margin: 5,
        alignSelf: 'center',
    },
};

export { Button };
