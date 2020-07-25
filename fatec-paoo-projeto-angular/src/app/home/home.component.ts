import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public nome: string;
  public alerta: boolean;

  constructor(
    public forms: FormsModule
  ) { }

  ngOnInit() {
    this.nome = '';
    this.alerta = false;
    console.log('NOME INICIALIZADO', this.nome);
  }


  alterarNome(nomeInput) {
    console.log(nomeInput.target.value);
    this.nome = nomeInput.target.value;
  }

  adicionar(nomeInput) {
    this.nome = nomeInput.value;
    this.alerta = true;
    console.log('O nome ' + nomeInput.value + 'foi adicionado Adicionado');

    setTimeout(() => {
      this.alerta = false;
    }, 3000);
  }

}
