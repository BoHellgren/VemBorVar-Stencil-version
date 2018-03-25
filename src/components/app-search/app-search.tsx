import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'app-search',
  styleUrl: 'app-search.scss'
})
export class AppSearch {

  @Prop() members: any[];
  @State() hits: any[];

  render() {

    if (!this.hits) this.hits = this.members;

    return (
      <div>

        <div class='header'>
          <p> Skriv namn eller lgh-nummer </p>
          <input id='textInput' type='search' onInput={() => this.findHits(event)}></input>
        </div>

        <div class="content">
          <table>
            {this.hits.map((member) =>
              <stencil-route-link url={'/show/' + member.lgh.substring(0, 2)}>
                <tr>
                  <td> <button>{member.lgh} </button></td>
                  <td> <button>{member.lmv} </button></td>
                  <td> <button class='wide'>{member.membername}</button> </td>
                  <td> <button class='alnright'>&emsp;</button> </td>
                </tr>
              </stencil-route-link>
            )}
          </table>
        </div>

      </div>
    );
  }

  findHits(ev: any) {
    let val = ev.target.value;
    console.log('val', val);
    if (!val) {
      this.hits = this.members; // cancel cross clicked
    } else {
      this.hits = this.members.filter((member) => {
        return (
          (member.membername.toLowerCase().indexOf(val.toLowerCase()) > -1)
          || (member.lgh.toLowerCase().indexOf(val.toLowerCase()) > -1)
          || (member.lmv.toLowerCase().indexOf(val.toLowerCase()) > -1)
        );
      })
    }
  }
}
