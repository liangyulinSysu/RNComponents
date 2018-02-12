import React, { Component } from 'react';
import { View, Text, Modal, TouchableWithoutFeedback } from 'react-native';
import { YLModalView, YLButton } from '../Components';

const PropTypes = require('prop-types');

/**
 *  title
 *  info
 *  btn
 */
class YLConfirm extends Component {
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
        
    }

    _renderTitle() {
        if(this.props.title) {
            return <Text style={[styles.titleStyle, this.props.titleStyle]}>{this.props.title}</Text>;
        }
    }

    _renderInfo() {
        if(this.props.title) {
            return <Text style={[styles.descriptionStyle, this.props.descriptionStyle]}>{this.props.description}</Text>
        }
    }

    _renderBtn() {
        const { leftBtnTitle, leftBtnStyle, onLeftBtnPress, rightBtnTitle, rightBtnStyle, onRightBtnPress } = this.props;
        if (leftBtnTitle && rightBtnTitle) {
            return (
                <View style={{ marginTop: 15, flexDirection: 'row' }}>
                    <YLButton
                        style={[styles.alertBtnStyle, styles.btnBorderStyle, leftBtnStyle]}
                        title={leftBtnTitle}
                        onPress={onLeftBtnPress}
                    /> 
                    <YLButton
                        style={[styles.alertBtnStyle, styles.btnBorderStyle, rightBtnStyle]}
                        title={rightBtnTitle}
                        onPress={onRightBtnPress}
                    />
                </View>
            );
        } else if (leftBtnTitle) {
            return (
                <View style={[{ marginTop: 15 }, styles.btnBorderStyle]}>
                    <YLButton 
                        style={styles.singleBtnStyle}
                        title={leftBtnTitle}
                        onPress={onLeftBtnPress}
                    />
                </View>
            );
        }
    }

    render() {
        return(
            <YLModalView
                visible
                transparent
                animationType='none'
                supportClickClose={this.props.supportClickClose} 
            >
                <View style={[styles.backgroundStyle, this.props.backgroundStyle]}>
                    {this._renderTitle()}
                    {this._renderInfo()}
                    {this._renderBtn()}
                </View>
            </YLModalView>
        );
    }
}

const styles = {
    backgroundStyle: { 
        width: '75%',
        backgroundColor: '#fff',
        borderWidth: 1, 
        borderColor: '#000',
        borderRadius: 4,
        padding: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    titleStyle: {
        fontSize: 20,
        alignSelf: 'center',
    },
    descriptionStyle: {
        fontSize: 16,
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
    },
    singleBtnStyle: {
        padding: 5,
    },
    alertBtnStyle: {
        flex: 1,
    },
    btnBorderStyle: {
        margin: 5,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#000',
    },
}

export default YLConfirm;