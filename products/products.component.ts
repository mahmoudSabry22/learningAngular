import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
productName: string = "Laptop";
price = 25000;
quantity = 1;
isDisabled = false;


IncreasePrice()
{
  this.price += 100;
}

decreasePrice()
{
  this.price -= 100;
}

IncreaseQty()
{
  this.quantity += 1;
}

decreaseQty()
{
  if(this.quantity >1)
  {
      this.quantity -= 1;
  }
}
makeDisabled(status :boolean)
{
  this.isDisabled = status;
}

}
