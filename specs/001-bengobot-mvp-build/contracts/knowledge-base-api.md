# API Contract: Knowledge Base Management

## POST /api/knowledge-base
Create a new knowledge base entry.

**Headers**: Authorization: Bearer {token}

**Request Body**:
```json
{
  "title": "Product Information",
  "content": "Our product is a chatbot platform that helps businesses..."
}
```

**Response (201 Created)**:
```json
{
  "id": "uuid",
  "title": "Product Information",
  "content": "Our product is a chatbot platform that helps businesses...",
  "created_at": "2025-09-24T10:00:00Z",
  "updated_at": "2025-09-24T10:00:00Z"
}
```

**Error Responses**:
- 401: Unauthorized
- 422: Invalid input (empty title/content, title too long)

## GET /api/knowledge-base
List all knowledge base entries for the authenticated user.

**Headers**: Authorization: Bearer {token}

**Query Parameters**:
- limit: number (default: 50, max: 100)
- offset: number (default: 0)

**Response (200 OK)**:
```json
{
  "knowledge_bases": [
    {
      "id": "uuid",
      "title": "Product Information",
      "content_preview": "Our product is a chatbot platform...",
      "created_at": "2025-09-24T10:00:00Z",
      "updated_at": "2025-09-24T10:00:00Z"
    }
  ],
  "total": 25,
  "limit": 50,
  "offset": 0
}
```

## GET /api/knowledge-base/{id}
Get a specific knowledge base entry.

**Headers**: Authorization: Bearer {token}

**Response (200 OK)**:
```json
{
  "id": "uuid",
  "title": "Product Information",
  "content": "Full content here...",
  "created_at": "2025-09-24T10:00:00Z",
  "updated_at": "2025-09-24T10:00:00Z"
}
```

**Error Responses**:
- 401: Unauthorized
- 403: Knowledge base belongs to different user
- 404: Knowledge base not found

## PUT /api/knowledge-base/{id}
Update a knowledge base entry.

**Headers**: Authorization: Bearer {token}

**Request Body**:
```json
{
  "title": "Updated Product Information",
  "content": "Updated content..."
}
```

**Response (200 OK)**:
```json
{
  "id": "uuid",
  "title": "Updated Product Information",
  "content": "Updated content...",
  "updated_at": "2025-09-24T11:00:00Z"
}
```

## DELETE /api/knowledge-base/{id}
Delete a knowledge base entry.

**Headers**: Authorization: Bearer {token}

**Response (204 No Content)**

**Error Responses**:
- 401: Unauthorized
- 403: Knowledge base belongs to different user
- 404: Knowledge base not found