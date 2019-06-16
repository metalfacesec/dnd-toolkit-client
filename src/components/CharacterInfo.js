import React from 'react';

class CharacterInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            levelAndInfo: '',
            background: '',
            playerName: '',
            race: '',
            alignment: '',
            xp: ''
        };

        this.handleLevelBlur = this.handleLevelBlur.bind(this);
        this.handleBackgroundBlur = this.handleBackgroundBlur.bind(this);
        this.handlePlayerNameBlur = this.handlePlayerNameBlur.bind(this);
        this.handleRaceBlur = this.handleRaceBlur.bind(this);
        this.handleAlignmentBlur = this.handleAlignmentBlur.bind(this);
        this.handleXPBlur = this.handleXPBlur.bind(this);
    }

    handleLevelBlur(evt) {
        this.state.levelAndInfo = evt.target.value;
        this.props.saveCharacter(this.state);
    }

    handleBackgroundBlur(evt) {
        this.state.background = evt.target.value;
        this.props.saveCharacter(this.state);
    }

    handlePlayerNameBlur(evt) {
        this.state.playerName = evt.target.value;
        this.props.saveCharacter(this.state);
    }

    handleRaceBlur(evt) {
        this.state.race = evt.target.value;
        this.props.saveCharacter(this.state);
    }

    handleAlignmentBlur(evt) {
        this.state.alignment = evt.target.value;
        this.props.saveCharacter(this.state);
    }

    handleXPBlur(evt) {
        this.state.xp = evt.target.value;
        this.props.saveCharacter(this.state);
    }
  
    render() {
        return (
            <section class="misc">
                <ul>
                    <li>
                        <label for="classlevel">Class & Level</label><input onBlur={this.handleLevelBlur} name="classlevel" placeholder="Paladin 2" />
                    </li>
                    <li>
                        <label for="background">Background</label><input onBlur={this.handleBackgroundBlur} name="background" placeholder="Acolyte" />
                    </li>
                    <li>
                        <label for="playername">Player Name</label><input onBlur={this.handlePlayerNameBlur} name="playername" placeholder="Player McPlayerface" />
                    </li>
                    <li>
                        <label for="race">Race</label><input onBlur={this.handleRaceBlur} name="race" placeholder="Half-elf" />
                    </li>
                    <li>
                        <label for="alignment">Alignment</label><input onBlur={this.handleAlignmentBlur} name="alignment" placeholder="Lawful Good" />
                    </li>
                    <li>
                        <label for="experiencepoints">Experience Points</label><input onBlur={this.handleXPBlur} name="experiencepoints" placeholder="3240" />
                    </li>
                </ul>
            </section>
        );
    }
}

export default CharacterInfo;