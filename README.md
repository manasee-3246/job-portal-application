# job-portal-application

Project Objective:
. REST API design
.JWT-based authentication
.File upload handling
.Database relationship

Feature:
.User Registration and Login
.JWT Authentication & Protected Routes
.Resume Upload using Multer
.Apply for Job Listings
.View Logged‑in User Applications
.Sample Job Listings for Testing

Install dependencies:
npm install


environment variable:
create .env file in root directory 

 
 Authentication Flow(JWT)
.User registers or logs in
.Server generates a JWT token
.Token is sent in response
.Client sends token in headers for protected routes

API Documentation:
*register user
POST /api/auth/register

*login USER
POST /api/auth/login

*Get all jobs
GET /api/jobs

*Apply for jobs
POST /api/applications

*View Application
GET /api/my-applications



 
 
