import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };
    
    render() { 
        let classes = this.getBadgeClasses();
        return (<div>
                <span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
                <ul>
        { this.state.tags.map(tag => <li key= {tag}>{tag}</li>)}
                </ul>
             </div>);
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;




//--------- <h1> ... </h1> jsx expression not a STRING
// COMPILED by calling React.createElement
//----------- export default class Counter 
//-------index.js is the entry point of the app
//---------- we can't return 2 elements side by side. we wrap them in a div
// React.createElement can't know which element to create 
//---------------- ctrl +d =>  to use multiple cursors
//------------ state is used to contain any data that this component needs
// to display data from state we use: { this.state.count }
//------------ between {}, we can write any expression, an expression is somthing that produces a value, a function for example.
//------------ const { count } = this.state; => to extract the property count and store it a seperate variable.
//------------ a function can return a JSX expression (JSX expressions can be used like normal objetcs.)
//------------ setting attributes----------------
//can be defined in the state property and used between {}
// class => className => className="badge badge-primary m-2"
//-------- for the style attributes!!!
 //we a have a style attribute and set it to a plain Javascript object object 
 // the properties of this object are CSS PROPERTIES in camelCase NOTATION
 // an other way, is to set them directly  using style={{ fontSize: 30}}
 //-----------rendering styles dynamicly
//add classes to span depending on the value
//let classes = "badge m-2 badge-"
//classes += (this.state.count === 0) ? "warning": "primary";
//it's better to extract this code to a seperate method.
//---------------rendering lists
// we DIDN'T HAVE LOOPS
//tags: ['tag1', 'tag2', 'tag3']
//<ul>
//{ this.state.tags.map(tag => <li>{tag}</li>)}
//</ul>
//the li shoud have a unique key =>key= {tag} for each li
// in real word example, it can be an id of an object