import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})

export class AppHome {

  render() {

    return (

      <div class='container'>

        <div class='header'>
          <img class="centerImage" src="../../assets/imgs/logga.png"> </img>
          <p>Brf Husarvikens Strand</p>
        </div>

        <div class='bluehouse'>
          <p >Taxgatan 3</p>
          <stencil-route-link url={'/show/28'} >
            <button>7 trappor</button>
          </stencil-route-link>
          <stencil-route-link url={'/show/27'} >
            <button>6 trappor</button>
          </stencil-route-link>
          <stencil-route-link url={'/show/26'} >
            <button>5 trappor</button>
          </stencil-route-link>
          <stencil-route-link url={'/show/25'} >
            <button>4 trappor</button>
          </stencil-route-link>
          <stencil-route-link url={'/show/24'} >
            <button>3 trappor</button>
          </stencil-route-link>
          <stencil-route-link url={'/show/23'} >
            <button>2 trappor</button>
          </stencil-route-link>
          <stencil-route-link url={'/show/22'} >
            <button>1 trappa</button>
          </stencil-route-link>
        </div>

        <div class='redhouse'>
          <p>Taxgatan 7</p>
          <stencil-route-link url={'/show/17'} >
            <button>6 trappor</button>
          </stencil-route-link>
          <stencil-route-link url={'/show/16'} >
            <button>5 trappor</button>
          </stencil-route-link>
          <stencil-route-link url={'/show/15'} >
            <button>4 trappor</button>
          </stencil-route-link>
          <stencil-route-link url={'/show/14'} >
            <button>3 trappor</button>
          </stencil-route-link>
          <stencil-route-link url={'/show/13'} >
            <button>2 trappor</button>
          </stencil-route-link>
          <stencil-route-link url={'/show/12'} >
            <button>1 trappa</button>
          </stencil-route-link>
        </div>


        <div class='footer'>
          <stencil-route-link url={'/search/'} >
            <button type="submit">
              Sök på namn eller lgh-nummer
            </button>
          </stencil-route-link>
          <p> Version 3.0 &emsp; &emsp; &emsp; 2018-03-04 </p>
        </div>

      </div>
    );
  }
}
