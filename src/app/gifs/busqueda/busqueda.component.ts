import { Component, ElementRef, ViewChild } from '@angular/core';

import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  // Non-null assertion operator
  //https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  @ViewChild('txtBuscarStickers') txtBuscarStickers!:ElementRef<HTMLInputElement>;

  constructor( private gifsService: GifsService ) {}

  buscarGifts() {
   
    const valor = this.txtBuscar.nativeElement.value;

    if ( valor.trim().length === 0 ) {
      return;
    }

    this.gifsService.buscarStickers( valor );

    this.txtBuscar.nativeElement.value = '';
  }

  buscarStickers() {
   
    const valor = this.txtBuscarStickers.nativeElement.value;

    if ( valor.trim().length === 0 ) {
      return;
    }

    this.gifsService.buscarStickers( valor );

    this.txtBuscarStickers.nativeElement.value = '';
  }


}
