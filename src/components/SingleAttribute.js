import React from 'react';

class SingleAttribute extends React.Component {
    constructor(props) {
      super(props);
    }
    
    render() {
        return (
            <div class="proficiencybonus box">
                <div class="label-container">
                    <label for="proficiencybonus">{this.props.label}</label>
                </div>
                <input name="proficiencybonus" placeholder="+2" />
            </div>
        );
    }
}

export default SingleAttribute;