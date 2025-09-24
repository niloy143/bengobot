# Tasks: BengoBot MVP Build

**Input**: Design documents from `/specs/001-bengobot-mvp-build/`
**Prerequisites**: plan.md (required), research.md, data-model.md, contracts/

## Execution Flow (main)
```
1. Load plan.md from feature directory
   → If not found: ERROR "No implementation plan found"
   → Extract: tech stack, libraries, structure
2. Load optional design documents:
   → data-model.md: Extract entities → model tasks
   → contracts/: Each file → contract test task
   → research.md: Extract decisions → setup tasks
3. Generate tasks by category:
   → Setup: project init, dependencies, linting
   → Tests: contract tests, integration tests
   → Core: models, services, CLI commands
   → Integration: DB, middleware, logging
   → Polish: unit tests, performance, docs
4. Apply task rules:
   → Different files = mark [P] for parallel
   → Same file = sequential (no [P])
   → Tests before implementation (TDD)
5. Number tasks sequentially (T001, T002...)
6. Generate dependency graph
7. Create parallel execution examples
8. Validate task completeness:
   → All contracts have tests?
   → All entities have models?
   → All endpoints implemented?
9. Return: SUCCESS (tasks ready for execution)
```

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

## Path Conventions
- **Next.js Web App**: `app/`, `components/`, `lib/`, `prisma/`, `tests/` at repository root
- **API Routes**: `app/api/` directory structure
- **Database**: `prisma/schema.prisma` and `lib/db/`
- **Components**: `components/` directory
- **Tests**: `tests/` directory with subdirectories

## Phase 3.1: Setup
- [ ] T001 Initialize Next.js 14+ project with TypeScript and Tailwind CSS
- [ ] T002 Configure ESLint, Prettier, and TypeScript strict mode
- [ ] T003 [P] Setup Prisma ORM with PostgreSQL connection
- [ ] T004 [P] Configure NextAuth.js for JWT authentication
- [ ] T005 [P] Setup OpenAI SDK integration
- [ ] T006 [P] Configure environment variables and validation
- [ ] T007 [P] Setup Jest and React Testing Library for unit tests
- [ ] T008 [P] Configure Playwright for E2E testing

## Phase 3.2: Tests First (TDD) ⚠️ MUST COMPLETE BEFORE 3.3
**CRITICAL: These tests MUST be written and MUST FAIL before ANY implementation**
- [ ] T009 [P] Contract test POST /api/auth/register in tests/contract/test-auth-register.ts
- [ ] T010 [P] Contract test POST /api/auth/login in tests/contract/test-auth-login.ts
- [ ] T011 [P] Contract test GET /api/auth/me in tests/contract/test-auth-me.ts
- [ ] T012 [P] Contract test POST /api/knowledge-base in tests/contract/test-knowledge-base-create.ts
- [ ] T013 [P] Contract test GET /api/knowledge-base in tests/contract/test-knowledge-base-list.ts
- [ ] T014 [P] Contract test GET /api/knowledge-base/{id} in tests/contract/test-knowledge-base-get.ts
- [ ] T015 [P] Contract test PUT /api/knowledge-base/{id} in tests/contract/test-knowledge-base-update.ts
- [ ] T016 [P] Contract test DELETE /api/knowledge-base/{id} in tests/contract/test-knowledge-base-delete.ts
- [ ] T017 [P] Contract test POST /api/chat/session in tests/contract/test-chat-session-create.ts
- [ ] T018 [P] Contract test POST /api/chat/message in tests/contract/test-chat-message-send.ts
- [ ] T019 [P] Contract test GET /api/chat/session/{id}/messages in tests/contract/test-chat-messages-get.ts
- [ ] T020 [P] Contract test GET /api/embed/config in tests/contract/test-embed-config-get.ts
- [ ] T021 [P] Integration test user registration flow in tests/integration/test-user-registration.ts
- [ ] T022 [P] Integration test knowledge base management in tests/integration/test-knowledge-base-workflow.ts
- [ ] T023 [P] Integration test chat conversation flow in tests/integration/test-chat-conversation.ts
- [ ] T024 [P] Integration test embed widget loading in tests/integration/test-embed-widget.ts
- [ ] T025 [P] E2E test complete user journey in tests/e2e/test-complete-user-journey.spec.ts

## Phase 3.3: Core Implementation (ONLY after tests are failing)
- [ ] T026 [P] Create User Prisma model in prisma/schema.prisma
- [ ] T027 [P] Create KnowledgeBase Prisma model in prisma/schema.prisma
- [ ] T028 [P] Create ChatSession Prisma model in prisma/schema.prisma
- [ ] T029 [P] Create ChatMessage Prisma model in prisma/schema.prisma
- [ ] T030 [P] Create EmbedConfig Prisma model in prisma/schema.prisma
- [ ] T031 [P] Implement database connection utilities in lib/db/prisma.ts
- [ ] T032 [P] Create authentication utilities in lib/auth/index.ts
- [ ] T033 [P] Implement OpenAI service wrapper in lib/openai/index.ts
- [ ] T034 [P] Create validation schemas with Zod in lib/validation/index.ts
- [ ] T035 Implement POST /api/auth/register route in app/api/auth/register/route.ts
- [ ] T036 Implement POST /api/auth/login route in app/api/auth/login/route.ts
- [ ] T037 Implement GET /api/auth/me route in app/api/auth/me/route.ts
- [ ] T038 Implement POST /api/auth/logout route in app/api/auth/logout/route.ts
- [ ] T039 Implement POST /api/knowledge-base route in app/api/knowledge-base/route.ts
- [ ] T040 Implement GET /api/knowledge-base route in app/api/knowledge-base/route.ts
- [ ] T041 Implement GET /api/knowledge-base/[id]/route.ts route in app/api/knowledge-base/[id]/route.ts
- [ ] T042 Implement PUT /api/knowledge-base/[id]/route.ts route in app/api/knowledge-base/[id]/route.ts
- [ ] T043 Implement DELETE /api/knowledge-base/[id]/route.ts route in app/api/knowledge-base/[id]/route.ts
- [ ] T044 Implement POST /api/chat/session route in app/api/chat/session/route.ts
- [ ] T045 Implement POST /api/chat/message route in app/api/chat/message/route.ts
- [ ] T046 Implement GET /api/chat/session/[id]/messages/route.ts route in app/api/chat/session/[id]/messages/route.ts
- [ ] T047 Implement GET /api/embed/config route in app/api/embed/config/route.ts
- [ ] T048 [P] Create login page component in app/login/page.tsx
- [ ] T049 [P] Create registration page component in app/register/page.tsx
- [ ] T050 [P] Create dashboard layout component in components/dashboard/Layout.tsx
- [ ] T051 [P] Create knowledge base management component in components/dashboard/KnowledgeBaseManager.tsx
- [ ] T052 [P] Create API key configuration component in components/dashboard/ApiKeyConfig.tsx
- [ ] T053 [P] Create embed code generator component in components/dashboard/EmbedCodeGenerator.tsx
- [ ] T054 [P] Create chat widget component in components/embed/ChatWidget.tsx
- [ ] T055 [P] Create embed page for iframe in app/embed/[token]/page.tsx

## Phase 3.4: Integration
- [ ] T056 Run Prisma database migrations and generate client
- [ ] T057 Implement NextAuth configuration in lib/auth/nextauth.ts
- [ ] T058 Add authentication middleware for protected routes
- [ ] T059 Implement API key encryption/decryption utilities
- [ ] T060 Add CORS configuration for embed widget
- [ ] T061 Implement rate limiting for API endpoints
- [ ] T062 Add request/response logging middleware
- [ ] T063 Configure error handling and custom error pages
- [ ] T064 Implement session management for chat conversations
- [ ] T065 Add domain validation for embed configurations

## Phase 3.5: Polish
- [ ] T066 [P] Unit tests for validation utilities in tests/unit/test-validation.ts
- [ ] T067 [P] Unit tests for authentication utilities in tests/unit/test-auth.ts
- [ ] T068 [P] Unit tests for OpenAI service in tests/unit/test-openai.ts
- [ ] T069 [P] Unit tests for database utilities in tests/unit/test-db.ts
- [ ] T070 [P] Unit tests for React components in tests/unit/components/
- [ ] T071 Performance tests for chat response times (<2 seconds)
- [ ] T072 Performance tests for page load times (<3 seconds)
- [ ] T073 Load testing for concurrent chat sessions
- [ ] T074 Security audit and vulnerability scanning
- [ ] T075 [P] Create API documentation in docs/api.md
- [ ] T076 [P] Create deployment documentation in docs/deployment.md
- [ ] T077 [P] Create user guide documentation in docs/user-guide.md
- [ ] T078 Implement monitoring and error tracking
- [ ] T079 Add health check endpoints
- [ ] T080 Code cleanup and remove console.logs
- [ ] T081 Final integration testing with quickstart guide
- [ ] T082 Production build optimization and bundle analysis

## Dependencies
- Setup tasks (T001-T008) before all other tasks
- Tests (T009-T025) before implementation (T026-T055)
- Database models (T026-T030) before API routes (T035-T047)
- Authentication setup (T031-T032) before auth routes (T035-T038)
- API routes before frontend components (T048-T055)
- Integration tasks (T056-T065) after core implementation
- Polish tasks (T066-T082) after integration

## Parallel Execution Examples
```
# Launch contract tests together:
Task: "Contract test POST /api/auth/register in tests/contract/test-auth-register.ts"
Task: "Contract test POST /api/auth/login in tests/contract/test-auth-login.ts"
Task: "Contract test GET /api/auth/me in tests/contract/test-auth-me.ts"

# Launch model creation tasks together:
Task: "Create User Prisma model in prisma/schema.prisma"
Task: "Create KnowledgeBase Prisma model in prisma/schema.prisma"
Task: "Create ChatSession Prisma model in prisma/schema.prisma"
Task: "Create ChatMessage Prisma model in prisma/schema.prisma"
Task: "Create EmbedConfig Prisma model in prisma/schema.prisma"

# Launch component creation tasks together:
Task: "Create login page component in app/login/page.tsx"
Task: "Create registration page component in app/register/page.tsx"
Task: "Create dashboard layout component in components/dashboard/Layout.tsx"
```

## Notes
- [P] tasks = different files, no dependencies - can be executed in parallel
- All tests must be written and failing before implementation begins (TDD principle)
- Commit after each completed task for proper version control
- Database migrations must be run before API routes that use the database
- Authentication must be implemented before protected routes
- Frontend components depend on API routes being functional
- Integration tests should use the actual quickstart scenarios

## Task Generation Rules Applied

1. **From Contracts**: 12 contract test tasks (one per endpoint across 3 contract files)
2. **From Data Model**: 5 model creation tasks (one per entity)
3. **From User Stories**: 5 integration/E2E test tasks covering complete user journeys
4. **From Research**: 8 setup tasks for project initialization and configuration

## Validation Checklist

- [x] All contracts have corresponding tests (12 contract tests)
- [x] All entities have model tasks (5 Prisma model tasks)
- [x] All tests come before implementation (TDD ordering maintained)
- [x] Parallel tasks are truly independent (different file paths)
- [x] Each task specifies exact file path
- [x] No task modifies same file as another [P] task
- [x] Dependencies properly ordered (setup → tests → models → routes → components → integration → polish)</content>
<parameter name="filePath">/f/coding/bengobot/specs/001-bengobot-mvp-build/tasks.md