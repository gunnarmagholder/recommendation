import React, { Component } from 'react';

export class Recommendation extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
                <tr>
                    <td>{ this.props.title }</td>
                    <td><a href={ this.props.link } target="_blank">Zum Anschauen</a></td>
                </tr> 
        )
    }
}