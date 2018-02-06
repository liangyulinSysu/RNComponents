import React, { Component } from 'react';
import { View, Text, Button, Modal } from 'react-native';
import ModalView from '../Components/ModalView';

const PropTypes = require('prop-types');

/**
 *  title
 *  info
 *  btn
 */
class Confirm extends Component {
    static propTypes = {
        supportClickClose: PropTypes.bool,
        backgroundStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
    
        title: PropTypes.string,
        titleStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),

        description: PropTypes.string,
        descriptionStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),

        leftBtnTitle: PropTypes.string,
        leftBtnStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
        onLeftBtnPress: PropTypes.func,

        rightBtnTitle: PropTypes.string,
        rightBtnStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
        onRightBtnPress: PropTypes.func,
    }

    static defaultProps = {
        supportClickClose: false,
        backgroundStyle: { 
            backgroundColor: '#fff',
            borderWidth: 1, 
            borderColor: '#000',
            borderRadius: 4,
            padding: 10,
            alignSelf: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            marginLeft: 25,
            marginRight: 25,
        },
        titleStyle: {
            fontSize: 20,
            alignSelf: 'center',
        },
        descriptionStyle: {
            fontSize: 16,
            marginTop: 10,
        }
    }

    _renderTitle() {
        if(this.props.title) {
            return <Text style={this.props.titleStyle}>{this.props.title}</Text>;
        }
    }

    _renderInfo() {
        if(this.props.title) {
            return <Text style={this.props.descriptionStyle}>{this.props.description}</Text>
        }
    }

    render() {
        return(
            <ModalView
                visible
                transparent
                animationType='none'
                supportClickClose={this.props.supportClickClose} 
            >
                <View style={this.props.backgroundStyle}>
                    {this._renderTitle()}
                    {this._renderInfo()}
                </View>
            </ModalView>
        );
    }
}

export default Confirm;