// src/app/services/inventory.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface InventoryItem {
  id: number;
  name: string;
  current_quantity: number;
  reorder_threshold: number;
  reorder_amount: number;
  location: string;
}

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  private apiUrl = 'http://127.0.0.1:8000/inventory/';

  constructor(private http: HttpClient) {}

  getInventory(): Observable<InventoryItem[]> {
    return this.http.get<InventoryItem[]>(this.apiUrl);
  }
}
