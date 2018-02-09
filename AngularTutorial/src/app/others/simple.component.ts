import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'

@Component({
    selector: 'simple',
    template: `You enetered {{simpleImput}}`
})
export class SimpleComponent implements OnChanges {
    ngOnChanges(changes: SimpleChanges): void {
        for (let propertyName in changes) {
            console.log(changes);
            let change = changes[propertyName];
            let current = JSON.stringify(change.currentValue);
            let previous = JSON.stringify(change.previousValue);
            console.log(propertyName + ': current value = ' + current + ' previous value = ' + previous);
        }
    }

    @Input()
    simpleImput: string;
}