import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { CreateItemDTO } from './dto/create-item.dto';
import { Items } from './interfaces/items.interfaces';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {

    constructor(private itemService: ItemsService){}

    @Get()
    findAll(): Items[]{
        return this.itemService.getItems();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Items {
        return this.itemService.getItem(id);
    }

    @Post()
    create(@Body() createItem: CreateItemDTO): string{
        return `Name: ${createItem.name},
                Description: ${createItem.description}`;
    }

    @Delete(':id')
    deleteItem(@Param('id') id: string): string{
        return `Item ${id} has been deleted`
    }

    @Patch(':id')
    updateItem(@Body() updateItem: CreateItemDTO, @Param('id') id:string): string{
        return `id: ${id},
                Name: ${updateItem.name},
                Qty: ${updateItem.qty}`;
    }
}
