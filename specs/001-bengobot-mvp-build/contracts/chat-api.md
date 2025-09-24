# API Contract: Chat Functionality

## POST /api/chat/session
Create a new chat session for a customer.

**Request Body**:
```json
{
  "user_id": "uuid", // Business owner ID
  "customer_identifier": "customer_123" // Optional customer tracking
}
```

**Response (201 Created)**:
```json
{
  "session_id": "uuid",
  "created_at": "2025-09-24T10:00:00Z"
}
```

**Error Responses**:
- 422: Invalid user_id

## POST /api/chat/message
Send a message in a chat session and get AI response.

**Request Body**:
```json
{
  "session_id": "uuid",
  "message": "Hello, can you tell me about your products?"
}
```

**Response (200 OK)**:
```json
{
  "message": {
    "id": "uuid",
    "role": "assistant",
    "content": "I'd be happy to tell you about our products...",
    "created_at": "2025-09-24T10:00:01Z"
  },
  "session_id": "uuid"
}
```

**Error Responses**:
- 422: Invalid session_id or empty message
- 429: Rate limit exceeded
- 503: OpenAI service unavailable

## GET /api/chat/session/{session_id}/messages
Get all messages in a chat session.

**Response (200 OK)**:
```json
{
  "session_id": "uuid",
  "messages": [
    {
      "id": "uuid",
      "role": "user",
      "content": "Hello, can you tell me about your products?",
      "created_at": "2025-09-24T10:00:00Z"
    },
    {
      "id": "uuid",
      "role": "assistant",
      "content": "I'd be happy to tell you about our products...",
      "created_at": "2025-09-24T10:00:01Z"
    }
  ]
}
```

**Error Responses**:
- 404: Session not found
- 403: Session belongs to different user

## GET /api/embed/config
Get embed configuration for a business owner.

**Query Parameters**:
- user_id: uuid (required)

**Response (200 OK)**:
```json
{
  "embed_token": "secure_token_here",
  "iframe_url": "https://bengobot.app/embed/secure_token_here",
  "allowed_domains": ["example.com", "www.example.com"]
}
```

**Error Responses**:
- 422: Invalid user_id
- 404: No embed config found for user