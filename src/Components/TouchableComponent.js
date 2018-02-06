import React from 'react';
import { 
    TouchableWithoutFeedback,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';

const TouchableComponent = (props) => {
    const { touchType, children } = props;
    switch (touchType) {
        case 'TouchableHighlight':
        {
          return (
            <TouchableHighlight {...props}>
              {children}
            </TouchableHighlight>
          );
        }
        case 'TouchableOpacity':
        {
          return (
            <TouchableOpacity {...props}>
              {children}
            </TouchableOpacity>
          );
        }
        case 'TouchableNativeFeedback':
        {
          return (
            <TouchableNativeFeedback {...props}>
              {children}
            </TouchableNativeFeedback>
          );
        }
        default:
            return (
                <TouchableWithoutFeedback {...props}>
                  {children}
                </TouchableWithoutFeedback>
              );
    }
};

export { TouchableComponent };
