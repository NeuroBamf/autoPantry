
# schemas/__init__.py
from pydantic import BaseModel

class InventoryItemBase(BaseModel):
    name: str
    current_quantity: int
    reorder_threshold: int
    reorder_amount: int
    location: str = "default" 

class InventoryItemCreate(InventoryItemBase):
        pass
    
class InventoryItemRead(InventoryItemBase):
      id: int

class Config: 
      orm_mode = True
