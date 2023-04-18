import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreditCard } from 'src/app/models/CreditCart';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css'],
})
export class CreateCardComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      titular: ['', Validators.required],
      numberCard: [
        '',
        [
          Validators.required,
          Validators.maxLength(16),
          Validators.minLength(16),
        ],
      ],
      expirationDate: [
        '',
        [Validators.required, Validators.maxLength(5), Validators.minLength(5)],
      ],
      cvv: [
        '',
        [Validators.required, Validators.maxLength(3), Validators.minLength(3)],
      ],
    });
  }

  public createCard(): void {
    console.log(this.form);

    const card: CreditCard = {
      titular: this.form.value.titular,
      cardNumber: this.form.value.numberCard,
      expirationDate: this.form.value.expirationDate,
      cvv: this.form.value.cvv,
      creationDate: new Date(),
      updateDate: new Date(),
    };

    console.log(card);
  }
}
