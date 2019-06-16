import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import './App.css';
import CharacterSheet from './components/CharacterSheet'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

function App() {
  return (
    <div className="App">

      <SideNav
          onSelect={(selected) => {
              // Add your code here
              console.log(CharacterSheet);
          }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
                <NavIcon>
                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Home
                </NavText>
            </NavItem>
            <NavItem eventKey="charts">
                <NavIcon>
                    <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Charts
                </NavText>
                <NavItem eventKey="charts/linechart">
                    <NavText>
                        Line Chart
                    </NavText>
                </NavItem>
                <NavItem eventKey="charts/barchart">
                    <NavText>
                        Bar Chart
                    </NavText>
                </NavItem>
            </NavItem>
        </SideNav.Nav>
      </SideNav>

      <CharacterSheet />
    </div>
  );
}

export default App;


/*

<form class="charsheet">
        <main>
          <section>
            
            <div class="passive-perception box">
              <div class="label-container">
                <label for="passiveperception">Passive Wisdom (Perception)</label>
              </div>
              <input name="passiveperception" placeholder="10" />
            </div>
            <div class="otherprofs box textblock">
              <label for="otherprofs">Other Proficiencies and Languages</label><textarea name="otherprofs"></textarea>
            </div>
          </section>
          <section>
            <section class="combat">
              <div class="armorclass">
                <div>
                  <label for="ac">Armor Class</label><input name="ac" placeholder="10" type="text" />
                </div>
              </div>
              <div class="initiative">
                <div>
                  <label for="initiative">Initiative</label><input name="initiative" placeholder="+0" type="text" />
                </div>
              </div>
              <div class="speed">
                <div>
                  <label for="speed">Speed</label><input name="speed" placeholder="30" type="text" />
                </div>
              </div>
              <div class="hp">
                <div class="regular">
                  <div class="max">
                    <label for="maxhp">Hit Point Maximum</label><input name="maxhp" placeholder="10" type="text" />
                  </div>
                  <div class="current">
                    <label for="currenthp">Current Hit Points</label><input name="currenthp" type="text" />
                  </div>
                </div>
                <div class="temporary">
                  <label for="temphp">Temporary Hit Points</label><input name="temphp" type="text" />
                </div>
              </div>
              <div class="hitdice">
                <div>
                  <div class="total">
                    <label for="totalhd">Total</label><input name="totalhd" placeholder="2d10" type="text" />
                  </div>
                  <div class="remaining">
                    <label for="remaininghd">Hit Dice</label><input name="remaininghd" type="text" />
                  </div>
                </div>
              </div>
              <div class="deathsaves">
                <div>
                  <div class="label">
                    <label>Death Saves</label>
                  </div>
                  <div class="marks">
                    <div class="deathsuccesses">
                      <label>Successes</label>
                      <div class="bubbles">
                        <input name="deathsuccess1" type="checkbox" />
                        <input name="deathsuccess2" type="checkbox" />
                        <input name="deathsuccess3" type="checkbox" />
                      </div>
                    </div>
                    <div class="deathfails">
                      <label>Failures</label>
                      <div class="bubbles">
                        <input name="deathfail1" type="checkbox" />
                        <input name="deathfail2" type="checkbox" />
                        <input name="deathfail3" type="checkbox" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="attacksandspellcasting">
              <div>
                <label>Attacks & Spellcasting</label>
                <table>
                  <thead>
                    <tr>
                      <th>
                        Name
                      </th>
                      <th>
                        Atk Bonus
                      </th>
                      <th>
                        Damage/Type
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input name="atkname1" type="text" />
                      </td>
                      <td>
                        <input name="atkbonus1" type="text" />
                      </td>
                      <td>
                        <input name="atkdamage1" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input name="atkname2" type="text" />
                      </td>
                      <td>
                        <input name="atkbonus2" type="text" />
                      </td>
                      <td>
                        <input name="atkdamage2" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input name="atkname3" type="text" />
                      </td>
                      <td>
                        <input name="atkbonus3" type="text" />
                      </td>
                      <td>
                        <input name="atkdamage3" type="text" />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <textarea></textarea>
              </div>
            </section>
            <section class="equipment">
              <div>
                <label>Equipment</label>
                <div class="money">
                  <ul>
                    <li>
                      <label for="cp">cp</label><input name="cp" />
                    </li>
                    <li>
                      <label for="sp">sp</label><input name="sp" />
                    </li>
                    <li>
                      <label for="ep">ep</label><input name="ep" />
                    </li>
                    <li>
                      <label for="gp">gp</label><input name="gp" />
                    </li>
                    <li>
                      <label for="pp">pp</label><input name="pp" />
                    </li>
                  </ul>
                </div>
                <textarea placeholder="Equipment list here"></textarea>
              </div>
            </section>
          </section>
          <section>
            <section class="flavor">
              <div class="personality">
                <label for="personality">Personality</label><textarea name="personality"></textarea>
              </div>
              <div class="ideals">
                <label for="ideals">Ideals</label><textarea name="ideals"></textarea>
              </div>
              <div class="bonds">
                <label for="bonds">Bonds</label><textarea name="bonds"></textarea>
              </div>
              <div class="flaws">
                <label for="flaws">Flaws</label><textarea name="flaws"></textarea>
              </div>
            </section>
            <section class="features">
              <div>
                <label for="features">Features & Traits</label><textarea name="features"></textarea>
              </div>
            </section>
          </section>
        </main>
      </form>

*/