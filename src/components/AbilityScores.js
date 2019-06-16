import React from 'react';

class AbilityScores extends React.Component {
    constructor(props) {
      super(props);
    }
    
    render() {
        return (
            <div class="scores">
                <ul>
                    <li>
                        <div class="score">
                            <label for="Strengthscore">Strength</label><input name="Strengthscore" placeholder="10" />
                        </div>
                        <div class="modifier">
                            <input name="Strengthmod" placeholder="+0" />
                        </div>
                    </li>
                    <li>
                        <div class="score">
                            <label for="Dexterityscore">Dexterity</label><input name="Dexterityscore" placeholder="10" />
                        </div>
                        <div class="modifier">
                            <input name="Dexteritymod" placeholder="+0" />
                        </div>
                    </li>
                    <li>
                        <div class="score">
                            <label for="Constitutionscore">Constitution</label><input name="Constitutionscore" placeholder="10" />
                        </div>
                        <div class="modifier">
                            <input name="Constitutionmod" placeholder="+0" />
                        </div>
                    </li>
                    <li>
                        <div class="score">
                            <label for="Wisdomscore">Wisdom</label><input name="Wisdomscore" placeholder="10" />
                        </div>
                        <div class="modifier">
                            <input name="Wisdommod" placeholder="+0" />
                        </div>
                    </li>
                    <li>
                        <div class="score">
                            <label for="Intelligencescore">Intelligence</label><input name="Intelligencescore" placeholder="10" />
                        </div>
                        <div class="modifier">
                            <input name="Intelligencemod" placeholder="+0" />
                        </div>
                    </li>
                    <li>
                        <div class="score">
                            <label for="Charismascore">Charisma</label><input name="Charismascore" placeholder="10" />
                        </div>
                        <div class="modifier">
                            <input name="Charismamod" placeholder="+0" />
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default AbilityScores;