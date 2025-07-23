AutoPantry is a full-stack grocery inventory management app that helps users track, post, and view pantry items in real time.

🖥️ Frontend: Angular 17 + RxJS

⚙️ Backend: FastAPI + SQLAlchemy

🔁 Communication: RESTful API (JSON over HTTP)

🌐 Ports: Frontend 4200, Backend API 8000


Features
Add new grocery items via UI

Fetch and render real-time inventory from backend

Clean separation between frontend and backend codebases

Uses virtual environment and Angular CLI for dev speed and consistency



🛠️ Local Setup
1. Backend (FastAPI)
bash
cd backend
python3 -m venv venv
source venv/bin/activate
uvicorn main:app --reload
Runs backend API server at: http://127.0.0.1:8000/inventory/



2. Frontend (Angular)
bash
cd frontend/autopantry-ui
npm install
ng serve
Then open http://localhost:4200 in your browser to view the UI.


🧩 Folder Structure

AutoPantry/
├── backend/
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── schemas/
│   └── autopantry.db
├── frontend/
│   └── autopantry-ui/
│       ├── src/
│       ├── angular.json
│       └── package.json



📚 Tech Stack Highlights
Tech	            Purpose

FastAPI	            Lightweight API server
SQLAlchemy	        Database ORM
Angular	            Frontend framework
RxJS	            Async stream handling in UI
Uvicorn	            ASGI server for FastAPI
SQLite	            Local data persistence


Created by C.Howard | Passionate about automation, intuitive design, and solving real-world problems through software.
