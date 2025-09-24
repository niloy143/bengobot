# Data Model: BengoBot MVP

## Core Entities

### User (Business Owner)
- **id**: UUID (Primary Key)
- **email**: String (Unique, Required)
- **password_hash**: String (Required)
- **created_at**: DateTime (Required)
- **updated_at**: DateTime (Required)
- **openai_api_key**: String (Encrypted, Optional)
- **is_active**: Boolean (Default: true)

**Validation Rules**:
- Email must be valid format
- Password minimum 6 characters
- API key must be valid OpenAI format when provided

### KnowledgeBase
- **id**: UUID (Primary Key)
- **user_id**: UUID (Foreign Key → User.id)
- **title**: String (Required)
- **content**: Text (Required)
- **created_at**: DateTime (Required)
- **updated_at**: DateTime (Required)
- **is_active**: Boolean (Default: true)

**Validation Rules**:
- Content cannot be empty
- Title maximum 200 characters
- Content maximum 10000 characters
- User can have maximum 100 knowledge bases

### ChatSession
- **id**: UUID (Primary Key)
- **user_id**: UUID (Foreign Key → User.id)
- **customer_identifier**: String (Optional - for tracking return customers)
- **created_at**: DateTime (Required)
- **updated_at**: DateTime (Required)
- **is_active**: Boolean (Default: true)

**Validation Rules**:
- Sessions expire after 12 hours of inactivity

### ChatMessage
- **id**: UUID (Primary Key)
- **session_id**: UUID (Foreign Key → ChatSession.id)
- **role**: Enum ('user', 'assistant') (Required)
- **content**: Text (Required)
- **created_at**: DateTime (Required)
- **tokens_used**: Integer (Optional)

**Validation Rules**:
- Content cannot be empty
- Maximum 500 characters per message

### EmbedConfig
- **id**: UUID (Primary Key)
- **user_id**: UUID (Foreign Key → User.id)
- **embed_token**: String (Unique, Required)
- **allowed_domains**: JSON Array (Optional)
- **created_at**: DateTime (Required)
- **is_active**: Boolean (Default: true)

**Validation Rules**:
- Embed token must be URL-safe
- Domains must be valid URLs when provided

## Relationships

```
User (1) ──── (N) KnowledgeBase
User (1) ──── (N) ChatSession
User (1) ──── (1) EmbedConfig
ChatSession (1) ──── (N) ChatMessage
```

## Indexes

- User.email (Unique)
- KnowledgeBase.user_id
- ChatSession.user_id
- ChatMessage.session_id
- EmbedConfig.user_id (Unique)
- EmbedConfig.embed_token (Unique)

## Data Integrity Rules

1. **Cascade Delete**: Deleting a User deletes all related KnowledgeBase, ChatSession, and EmbedConfig records
2. **Restrict Delete**: Cannot delete ChatSession if it has ChatMessages
3. **Unique Constraints**: One EmbedConfig per User, unique embed tokens globally

## Business Logic Constraints

1. **Knowledge Base Isolation**: Users can only access their own knowledge bases
2. **Chat Session Limits**: Maximum 10 active sessions per user
3. **API Key Security**: OpenAI keys are encrypted and never returned in API responses
4. **Domain Restrictions**: Embed configs can restrict which domains can load the widget

## Migration Strategy

1. **Initial Schema**: Create all tables with basic constraints
2. **Add Indexes**: Performance optimization after data population
3. **Add Encryption**: Implement API key encryption in application layer
4. **Add Audit Fields**: created_at/updated_at for all entities