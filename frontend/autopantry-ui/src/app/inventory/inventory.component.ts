import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryService, InventoryItem } from '../services/inventory.service';

@Component({
  selector: 'app-inventory',
  standalone: false,

  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'] // Optional: remove or create the file
})
export class InventoryComponent implements OnInit{
  inventory: InventoryItem[] = [];
  isLoading = true;

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.inventoryService.getInventory().subscribe({
      next: (data) => {
        this.inventory = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading inventory:', err);
        this.isLoading = false;
      }
    });
  }
}
