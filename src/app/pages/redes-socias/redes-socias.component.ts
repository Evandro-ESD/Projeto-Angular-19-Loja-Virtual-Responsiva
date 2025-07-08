import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-redes-socias',
  imports: [],
  templateUrl: './redes-socias.component.html',
  styleUrl: './redes-socias.component.css'
})
export class RedesSociasComponent {
  contatoForm: FormGroup;
  enviado = false;

  constructor(private fb: FormBuilder) {
    this.contatoForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensagem: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.contatoForm.valid) {
      this.enviado = true;
      console.log('Dados enviados:', this.contatoForm.value);
      this.contatoForm.reset();
    }
  }

}
