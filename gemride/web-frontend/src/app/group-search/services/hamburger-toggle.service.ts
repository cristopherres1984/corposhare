import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({providedIn: 'root'})
export class HamburgerToggleService {

    isOpen = false;

    @Output() change: EventEmitter<boolean> = new EventEmitter();

    toggle() {
        this.isOpen = !this.isOpen;
        this.change.emit(this.isOpen);
    }
}
