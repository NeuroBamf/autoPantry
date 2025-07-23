from sqlalchemy import Column, Integer, String, Float
from database import Base 

class InventoryItem(Base):
    __tablename__ = "inventory"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True, nullable=False)
    current_quantity = Column(Integer, nullable=False)
    reorder_threshold = Column(Integer, nullable=False)
    reorder_amount = Column(Integer, nullable=False)
    location = Column(String, default="default") #Store/aisle/bin/etc.