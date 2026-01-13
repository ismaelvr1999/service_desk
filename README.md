# Service Desk 
A service desk web app for creating and managing tickets, clients, and teams.
# Tech Stack
- Node.js
- Typescript
- Prisma
- Express.js
- Zod
- React 
- Tailwind
# Installation
## Backend
1. Clone repository
```bash
git clone https://github.com/ismaelvr1999/service_desk.git
```
2. Install dependencies
```bash
cd service_desk
cd backend
pnpm install
```
3. Set up environment varibles

```env 
PORT = 
JWT_SECRET = 

DATABASE_URL=
DATABASE_USER=
DATABASE_PASSWORD=
DATABASE_NAME=
DATABASE_HOST=
DATABASE_PORT=
CONNECTION_LIMIT=  
NODE_ENV =
```
4. Create database
```bash 
npx prisma db push
pnpm run generate
```
5. Start server
```bash 
pnpm run dev
