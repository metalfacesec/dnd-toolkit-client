import React from 'react';

class CharacterSkills extends React.Component {
    constructor(props) {
      super(props);
    }
    
    render() {
        return (
            <div class="skills list-section box">
                <ul>
                    <li>
                        <label for="Acrobatics">Acrobatics <span class="skill">(Dex)</span></label><input name="Acrobatics" placeholder="+0" type="text" /><input name="Acrobatics-prof" type="checkbox" />
                    </li>
                    <li>
                        <label for="Animal Handling">Animal Handling <span class="skill">(Wis)</span></label><input name="Animal Handling" placeholder="+0" type="text" /><input name="Animal Handling-prof" type="checkbox" />
                    </li>
                    <li>
                        <label for="Arcana">Arcana <span class="skill">(Int)</span></label><input name="Arcana" placeholder="+0" type="text" /><input name="Arcana-prof" type="checkbox" />
                    </li>
                    <li>
                        <label for="Athletics">Athletics <span class="skill">(Str)</span></label><input name="Athletics" placeholder="+0" type="text" /><input name="Athletics-prof" type="checkbox" />
                    </li>
                    <li>
                        <label for="Deception">Deception <span class="skill">(Cha)</span></label><input name="Deception" placeholder="+0" type="text" /><input name="Deception-prof" type="checkbox" />
                    </li>
                    <li>
                        <label for="History">History <span class="skill">(Int)</span></label><input name="History" placeholder="+0" type="text" /><input name="History-prof" type="checkbox" />
                    </li>
                    <li>
                        <label for="Insight">Insight <span class="skill">(Wis)</span></label><input name="Insight" placeholder="+0" type="text" /><input name="Insight-prof" type="checkbox" />
                    </li>
                    <li>
                        <label for="Intimidation">Intimidation <span class="skill">(Cha)</span></label><input name="Intimidation" placeholder="+0" type="text" /><input name="Intimidation-prof" type="checkbox" />
                    </li>
                    <li>
                        <label for="Investigation">Investigation <span class="skill">(Int)</span></label><input name="Investigation" placeholder="+0" type="text" /><input name="Investigation-prof" type="checkbox" />
                    </li>
                    <li>
                        <label for="Medicine">Medicine <span class="skill">(Wis)</span></label><input name="Medicine" placeholder="+0" type="text" /><input name="Medicine-prof" type="checkbox" />
                    </li>
                    <li>
                        <label for="Nature">Nature <span class="skill">(Int)</span></label><input name="Nature" placeholder="+0" type="text" /><input name="Nature-prof" type="checkbox" />
                    </li>
                    <li>
                        <label for="Perception">Perception <span class="skill">(Wis)</span></label><input name="Perception" placeholder="+0" type="text" /><input name="Perception-prof" type="checkbox" />
                    </li>
                    <li>
                        <label for="Performance">Performance <span class="skill">(Cha)</span></label><input name="Performance" placeholder="+0" type="text" /><input name="Performance-prof" type="checkbox" />
                    </li>
                    <li>
                        <label for="Persuasion">Persuasion <span class="skill">(Cha)</span></label><input name="Persuasion" placeholder="+0" type="text" /><input name="Persuasion-prof" type="checkbox" />
                    </li>
                    <li>
                        <label for="Religion">Religion <span class="skill">(Int)</span></label><input name="Religion" placeholder="+0" type="text" /><input name="Religion-prof" type="checkbox" />
                    </li>
                    <li>
                        <label for="Sleight of Hand">Sleight of Hand <span class="skill">(Dex)</span></label><input name="Sleight of Hand" placeholder="+0" type="text" /><input name="Sleight of Hand-prof" type="checkbox" />
                    </li>
                    <li>
                        <label for="Stealth">Stealth <span class="skill">(Dex)</span></label><input name="Stealth" placeholder="+0" type="text" /><input name="Stealth-prof" type="checkbox" />
                    </li>
                    <li>
                        <label for="Survival">Survival <span class="skill">(Wis)</span></label><input name="Survival" placeholder="+0" type="text" /><input name="Survival-prof" type="checkbox" />
                    </li>
                </ul>
                <div class="label">
                    Skills
                </div>
            </div>
        );
    }
}

export default CharacterSkills;