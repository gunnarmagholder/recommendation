import React, { Component } from 'react';

export class Recommendation extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <p><a href={this.props.link} target="_blank">{this.props.title}</a></p>
            </div>
        )
    }
}