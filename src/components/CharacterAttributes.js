import React from 'react';
import AbilityScores from './AbilityScores';
import SingleAttribute from './SingleAttribute';
import CharacterSavingThrows from './CharacterSavingThrows';
import CharacterSkills from './CharacterSkills';

class CharacterAttributes extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
        return (
            <section class="attributes">
                <AbilityScores />
                <div class="attr-applications">
                    <SingleAttribute label="Inspiration" />
                    <SingleAttribute label="Proficency Bonus" />
                    <CharacterSavingThrows />
                    <CharacterSkills />
                </div>
            </section>
        );
    }
}

export default CharacterAttributes;