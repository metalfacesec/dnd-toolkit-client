import React from 'react';

class CharacterSavingThrows extends React.Component {
    constructor(props) {
      super(props);
    }
    
    render() {
        return (
            <div class="saves list-section box">
                <ul>
                    <li>
                        <label for="Strength-save">Strength</label><input name="Strength-save" placeholder="+0" type="text" /><input name="Strength-save-prof" type="checkbox" />
                    </li>
                    <li>
                        <label for="Dexterity-save">Dexterity</label><input name="Dexterity-save" placeholder="+0" type="text" /><input name="Dexterity-save-prof" type="checkbox" />
                    </li>
                    <li>
                        <label for="Constitution-save">Constitution</label><input name="Constitution-save" placeholder="+0" type="text" /><input name="Constitution-save-prof" type="checkbox" />
                    </li>
                    <li>
                        <label for="Wisdom-save">Wisdom</label><input name="Wisdom-save" placeholder="+0" type="text" /><input name="Wisdom-save-prof" type="checkbox" />
                    </li>
                    <li>
                        <label for="Intelligence-save">Intelligence</label><input name="Intelligence-save" placeholder="+0" type="text" /><input name="Intelligence-save-prof" type="checkbox" />
                    </li>
                    <li>
                        <label for="Charisma-save">Charisma</label><input name="Charisma-save" placeholder="+0" type="text" /><input name="Charisma-save-prof" type="checkbox" />
                    </li>
                </ul>
                <div class="label">Saving Throws</div>
            </div>
        );
    }
}

export default CharacterSavingThrows;