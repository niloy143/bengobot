# Quickstart Guide: BengoBot MVP

## Prerequisites
- Node.js 18+
- PostgreSQL database
- OpenAI API key

## Setup Steps

### 1. Database Setup
```bash
# Create PostgreSQL database
createdb bengobot_dev

# Run Prisma migrations
npx prisma migrate dev
```

### 2. Environment Configuration
Create `.env.local`:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/bengobot_dev"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
OPENAI_API_KEY="your-openai-key"
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start Development Server
```bash
npm run dev
```

## User Journey Testing

### Primary User Story: Business Owner Setup and Customer Chat

#### Step 1: User Registration
1. Navigate to `http://localhost:3000/login`
2. Click "Sign Up" link
3. Fill registration form:
   - Email: `test@example.com`
   - Password: `password123`
4. Verify account creation and automatic login

#### Step 2: Configure OpenAI API Key
1. Navigate to dashboard (`http://localhost:3000/dashboard`)
2. Go to Settings/API Keys section
3. Enter valid OpenAI API key
4. Verify key validation and storage

#### Step 3: Create Knowledge Base
1. In dashboard, go to Knowledge Base section
2. Click "Add Knowledge Base"
3. Fill form:
   - Title: "Company Information"
   - Content: "We are a software company specializing in AI chatbots..."
4. Save and verify creation

#### Step 4: Get Embed Code
1. In dashboard, go to Embed section
2. Copy the generated iframe code
3. Verify the embed URL contains user-specific token

#### Step 5: Test Customer Chat Experience
1. Create a test HTML file with the embed code:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Test Website</title>
</head>
<body>
    <h1>Welcome to Our Website</h1>
    <p>This is a test page for the BengoBot embed.</p>

    <!-- Paste the embed code here -->
    <iframe src="http://localhost:3000/embed/[user-token]" width="400" height="600"></iframe>
</body>
</html>
```

2. Open the test HTML file in browser
3. Verify chat widget appears
4. Send a test message: "What do you do?"
5. Verify AI responds using the knowledge base content

## API Testing

### Authentication Flow
```bash
# Register user
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"api-test@example.com","password":"password123"}'

# Login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"api-test@example.com","password":"password123"}'
```

### Knowledge Base Management
```bash
# Create knowledge base (include auth token from login)
curl -X POST http://localhost:3000/api/knowledge-base \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"title":"Test KB","content":"Test content for API testing"}'
```

## Performance Validation

### Response Time Check
- Chat responses should be under 2 seconds
- Page loads should be under 3 seconds
- API endpoints should respond within 500ms

### Load Testing
```bash
# Simulate 10 concurrent users
npm run test:load
```

## Troubleshooting

### Common Issues
1. **Embed not loading**: Check CORS settings and embed token validity
2. **Chat not responding**: Verify OpenAI API key and knowledge base content
3. **Database connection**: Ensure PostgreSQL is running and connection string is correct

### Debug Mode
Set `NODE_ENV=development` and check console logs for detailed error messages.

## Success Criteria
- [ ] User can register and login successfully
- [ ] User can configure OpenAI API key
- [ ] User can create and manage knowledge base
- [ ] User gets valid embed code
- [ ] Chat widget loads on external website
- [ ] Customer messages receive AI responses
- [ ] Responses are based on knowledge base content
- [ ] All API endpoints return expected responses
- [ ] Performance meets requirements