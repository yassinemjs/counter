import React from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

const Counter = ({ ctr ,onIncrementCounter ,onDecrementCounter,onAddCounter,onSubtractCounter}) => 
     {
        return (
            <div>
                <CounterOutput value={ctr} />
                <CounterControl label="Increment" clicked={onIncrementCounter} />
                <CounterControl label="Decrement" clicked={onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={onSubtractCounter}  />
            </div>
        );
    }


const mapStateToProps = state => {
    return {
        ctr: state.counter
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: () => dispatch({type: 'ADD' , payloader :10}),
        onSubtractCounter: () => dispatch({type: 'SUBTRACT' ,payloader :5})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);