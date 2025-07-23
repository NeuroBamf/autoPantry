# AutoPantry

AutoPantry is a full-stack grocery inventory management system.

- Backend: FastAPI + SQLAlchemy
- Frontend: Angular + RxJS
- Features: Add/view items, RESTful API, live data rendering

## Local Setup

1. **Backend**
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
uvicorn main:app --reload

2.**Frontend**
cd autopantry-ui
npm install
ng serve
open https://localhost:4200 to view the UI

