import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title: string = 'Enigma App';

  cars: string[] = ['Avanza','Brio', 'Sedan'];

  getTitle(): string{
    return this.title;
  }

  customer = {
    id: '1',
    name: 'Juan'
  }

  /**
   * Penerapan string interpolation di angular menggunakan double bracket {{ data }}
   * -> implementasinya dapat di binding yaitu : attribute, array, function, expression
   * -> implementasi yang tidak dapat di binding yaitu: object
   */

  /**
   * property binding -> cara angular untuk mengontrol atau mengubah value dari suatu elemen html
   * -> contohnya : ketika ingin disable button, readonly text input, dll
   */
  isDisabled: boolean = false;

  constructor() {
    setTimeout(() => {
      this.isDisabled = true;
    }, 3000)
  } // akan dipanggil ketika class dipanggil


  /**
   * Event Binding -> cara angular untuk mengontrol dan mengubah suatu event dari element html
   * -> contohnya : click, change, hover dll
   */

  showMessage: string = '';
  getMessage: string = 'Pesan ini muncul karena tombol di klik';
  onClickButton(): void {
    alert(this.showMessage = this.getMessage);
  }
}
