import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-clientes',
    templateUrl: './clientes.component.html',
    styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
    clientes = [];
    cliente:Cliente = {
        nome: "",
        idade: 0
    }
    addCliente(){
        let cli = Object.assign({}, this.cliente);
        this.clientes.push(cli);
    }
    constructor() { }

    ngOnInit() {
    }
}
