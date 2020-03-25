import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';

import { increaseCouner, decreaseCouner } from '../actions/counterActions';

class Counter extends Component {
    pic = {
        uri:
            'https://images.unsplash.com/photo-1519455953755-af066f52f1a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    };

    render() {
        return (
            <ImageBackground source={this.pic} style={styles.image}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => this.props.increaseCouner()}>
                        <Text style={styles.text}>Increase</Text>
                    </TouchableOpacity>
                    <Text style={styles.text}>{this.props.counter}</Text>
                    <TouchableOpacity onPress={() => this.props.decreaseCouner()}>
                        <Text style={styles.text}>Decrease</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: {
        fontSize: 50,
        fontWeight: 'bold',
        textAlignVertical: 'center',
        color: 'white',
    },
    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
});

function mapStateToProps(state) {
    return {
        counter: state.counter,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        increaseCouner: () => dispatch(increaseCouner()),
        decreaseCouner: () => dispatch(decreaseCouner()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Counter);
