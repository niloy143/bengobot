# API Contract: Authentication

## POST /api/auth/register
Register a new business owner account.

**Request Body**:
```json
{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

**Response (201 Created)**:
```json
{
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "created_at": "2025-09-24T10:00:00Z"
  },
  "token": "jwt_token_here"
}
```

**Error Responses**:
- 400: Email already exists
- 422: Invalid email format or password too short

## POST /api/auth/login
Authenticate and login a business owner.

**Request Body**:
```json
{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

**Response (200 OK)**:
```json
{
  "user": {
    "id": "uuid",
    "email": "user@example.com"
  },
  "token": "jwt_token_here"
}
```

**Error Responses**:
- 401: Invalid credentials
- 422: Invalid input format

## POST /api/auth/logout
Logout and invalidate the current session.

**Headers**: Authorization: Bearer {token}

**Response (200 OK)**:
```json
{
  "message": "Logged out successfully"
}
```

## GET /api/auth/me
Get current user information.

**Headers**: Authorization: Bearer {token}

**Response (200 OK)**:
```json
{
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "created_at": "2025-09-24T10:00:00Z",
    "has_api_key": true
  }
}
```

**Error Responses**:
- 401: Invalid or expired token