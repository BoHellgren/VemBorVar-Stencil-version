import { Component, Prop, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-show',
  styleUrl: 'app-show.scss'
})
export class AppShow {

  @Prop() members: any[];
  @Prop() match: MatchResults;
  @State() mask: string;

  render() {
    if (!this.mask) this.mask = this.match.params.mask;
    return (
      <div class='container'>

        <div class='header'>
          <img class="centerImage" src="../../assets/imgs/logga.png"> </img>
          <p>{this.showHeader()}</p>
        </div>

        <div class='floor'>
          <table>
            {this.members.filter((member) => {
              return (member.lgh.substring(0, 2).indexOf(this.mask) > -1);
            }).map((member) =>
              <tr>
                <td> {member.lgh} </td>
                <td> {member.lmv} </td>
                <td> {member.membername} </td>
              </tr>
              )}
          </table>
        </div>

        <div class='footer'>
          <tr>
            <td><button onClick={() => this.up()}>Upp</button></td>
            <td><button onClick={() => this.down()}>Ner</button></td>
            <stencil-route-link url={'/'} >
              <button>Tillbaks</button>
            </stencil-route-link>
          </tr>
        </div>

      </div>
    );
  }

  showHeader() {
   // console.log('showHeader called');
    var floor = (Number(this.mask.substr(1, 1)) - 1).toString();
    if (this.mask.substr(0, 1) == '2')
      return (<p> Taxgatan 3  &emsp; &emsp; &emsp; {floor} trappor </p>)
    else return (<p> Taxgatan 7 &emsp; &emsp; &emsp; {floor} trappor </p>);
  }

  up() {
    // console.log('up called');
    var max = 8; 
    if (this.mask.substr(0, 1) == '1') max = 7;
    if (Number(this.mask.substr(1, 1)) < max) {
      this.mask = (Number(this.mask) + 1).toString();
    }
  }
  down() {
    // console.log('down called');
    if (Number(this.mask.substr(1, 1)) > 2) {
      this.mask = (Number(this.mask) - 1).toString();
    }
  }
}
