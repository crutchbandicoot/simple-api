import { Injectable } from '@nestjs/common';
import { Items } from './interfaces/items.interfaces';

@Injectable()
export class ItemsService {
    items : Items[] = [
        {
            id: '567',
            name: 'Flour',
            description: 'white cake flour',
            qty: 12
        },
        {
            id: '569',
            name: 'Vanilla',
            description: 'Vanilla pods',
            qty: 5
        },
    ]

    getItems(): Items[] {
        return this.items;
    }

    getItem(id: string): Items {
        return this.items.find(item => item.id === id)
    }

    postItem(item: Items): void {
        console.log(`This service works ${item}`);
    }
}
