import React from 'react';

class CharacterName extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        characterName: ''
      };
      this.handleBlur = this.handleBlur.bind(this);
    }

    handleBlur(evt) {
        this.props.saveCharacter({characterName: evt.target.value});
    }
  
    render() {
        return (
            <section class="charname">
                <label for="charname">Character Name</label><input onBlur={this.handleBlur} name="charname" placeholder="Thoradin Fireforge" />
            </section>
          );
    }
}

export default CharacterName;