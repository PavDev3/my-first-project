import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filtrar por ciudad">
        <button class="primary" type="button">Buscar</button>
      </form>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {

}