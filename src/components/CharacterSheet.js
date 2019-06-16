import React from 'react';
import CharaceterName from './CharacterName';
import CharaceterInfo from './CharacterInfo';
import CharacterAttributes from './CharacterAttributes';

class CharacterSheet extends React.Component {
    constructor(props) {
      super(props);
      this.saveCharacter = this.saveCharacter.bind(this);
    }

    saveCharacter(data) {
        this.setState(data);
        console.log(this.state);
    }
  
    render() {
        return (
            <form class="charsheet">
                <header>
                    <CharaceterName saveCharacter={this.saveCharacter} />
                    <CharaceterInfo saveCharacter={this.saveCharacter} />
                </header>
                <main>
                <section>
                    <CharacterAttributes />
                </section>
                </main>
            </form>
        );
    }
}

export default CharacterSheet;