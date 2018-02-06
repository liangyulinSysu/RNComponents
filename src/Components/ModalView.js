import React, { Component } from 'react';
import { View, Modal, TouchWithoutFeedback, TouchableWithoutFeedback } from 'react-native';

const PropTypes = require('prop-types');

export default class ModalView extends Component {
    static propTypes = {
        visible: PropTypes.bool,
        backgroundColor: PropTypes.string,
        supportClickClose: PropTypes.bool,
        animationType: PropTypes.oneOf(['fade', 'none', 'slide']),
        style: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array])
    }

    static defaultProps = {
        visible: true,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        supportClickClose: true,
        animationType: 'fade',
    }

    constructor(props) {
        super(props);

        this.state = {
            visible: props.visible,
        };
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            visible: nextProps.visible
        });
    }

    _onHiddenModal() {
        this.setState({
            visible: false
        });
    }

    _renderModal = () => {
        const { 
            transparent, 
            animationType,
            supportClickClose, 
            children,
            style,
            backgroundColor
        } = this.props;

        if(this.state.visible) {
            return (
                <Modal
                    visible={this.state.visible}
                    transparent={transparent}
                    animationType={animationType}
                    style={style}
                    {...this.props}
                >
                    <TouchableWithoutFeedback
                        onPress={this._onHiddenModal.bind(this)}
                        disabled={!supportClickClose}
                    >
                        <View style={{ backgroundColor: backgroundColor, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            
                                {children}
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            );
        }
    }

    render() {
        return(
            <View>
                {this._renderModal()}
            </View>
        );
    }
}