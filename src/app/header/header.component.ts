import { Component, Output, EventEmitter } from '@angular/core'

@Component({
	selector: "app-header",
	templateUrl: './header.component.html',
	styles: [`
		.collapse.show {
  		visibility: visible;
}`]
})
export class HeaderComponent {
	@Output() featureSelected = new EventEmitter<string>();
	onRecipeSelected() {
		this.featureSelected.emit('recipes');
	}
	onShoppingListSelected() {
		this.featureSelected.emit('shopping-list');
	}
}