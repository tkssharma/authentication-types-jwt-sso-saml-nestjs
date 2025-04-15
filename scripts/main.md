

## 🎬 **4-Part Series: NestJS Session-Based Auth with Passport, Redis & TypeORM**

---

### ✅ **Video 1: Setup & Docker Compose — Postgres + Redis + NestJS**

**Title:**  
🚀 _"NestJS Auth Setup with Docker: PostgreSQL & Redis for Sessions"_

**What You'll Cover:**
- Intro to session-based authentication (vs JWT)
- Project setup with NestJS and TypeORM
- Create `docker-compose.yml` for:
  - PostgreSQL (for users)
  - Redis (for session storage)
- Connect NestJS to both:
  - TypeORM to Postgres
  - ioredis to Redis
- Create `.env` file for credentials
- Set up Redis and test connection

**Files Involved:**
- `docker-compose.yml`
- `.env`
- `typeorm.config.ts`
- Redis setup file

---

### ✅ **Video 2: User Entity + LocalStrategy + Passport Auth Flow**

**Title:**  
🔐 _"Username & Password Login in NestJS with Passport LocalStrategy"_

**What You'll Cover:**
- Create `User` entity (with hashed password)
- Seed a dummy user
- Create `UsersService` with TypeORM
- Setup `AuthModule` and `AuthService`
- Implement `LocalStrategy` using Passport
- Use `AuthGuard('local')` on `/auth/login`
- Validate user credentials

**Key Concepts:**
- LocalStrategy
- AuthGuard('local')
- bcrypt password hashing
- TypeORM repository pattern

---

### ✅ **Video 3: Sessions + Redis + Serialize/Deserialize User**

**Title:**  
🗂️ _"Session Management in NestJS with Redis + Passport"_

**What You'll Cover:**
- Install and configure `express-session` + `connect-redis`
- Set up session middleware in `main.ts`
- Enable `PassportModule.register({ session: true })`
- Implement `SessionSerializer` (serialize/deserialize logic)
- Store session data in Redis
- Confirm sessions persist across requests (req.user populated)

**Key Concepts:**
- Redis-backed sessions
- Passport session lifecycle
- `serializeUser` / `deserializeUser`

---

### ✅ **Video 4: Auth Guards, Logout, and Securing Routes**

**Title:**  
🛡️ _"Protecting Routes & Logging Out in NestJS with Session-Based Auth"_

**What You'll Cover:**
- Implement custom `AuthenticatedGuard` to protect routes
- Create protected `/auth/profile` or `/dashboard` route
- Add `/auth/logout` endpoint (with `req.logout()` + `session.destroy()`)
- Discuss session TTL, secure cookies, and CSRF basics
- Add CORS config for frontend

**Optional Add-ons (if time permits):**
- Connect a frontend (React or Postman)
- Show session persistence on page reload

---

## 🧱 Summary Structure

| Video | Title                                                             | Focus Areas |
|-------|-------------------------------------------------------------------|-------------|
| 1     | Setup + Docker Compose for Postgres & Redis                      | Infra Setup |
| 2     | LocalStrategy + Login with Passport + User Entity                | Auth Logic  |
| 3     | Session Middleware + Redis Store + Serialize/Deserialize         | Session Mgmt|
| 4     | AuthenticatedGuard + Logout + Route Protection                   | Security    |

---

Want me to create folders + boilerplate code for this setup? Or outline scripts/slides for each video?