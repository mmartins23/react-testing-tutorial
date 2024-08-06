### Step 1: Install MSW

Install MSW as a development dependency:

```bash
npm install msw@latest --save-dev
```

### Step 2: Create the Mocks Directory and Server Configuration

1. **Create Mocks Directory:**

   Create a new folder called `mocks` in your `src` directory.

   ```bash
   mkdir -p src/mocks
   ```

2. **Create Server Configuration File:**

   Inside the `mocks` folder, create a file named `server.ts`.

   ```bash
   touch src/mocks/server.ts
   ```

3. **Configure the MSW Server:**

   Add the following code to `server.ts` to set up the request mocking server:

   ```typescript
   // src/mocks/server.ts
   import { setupServer } from 'msw/node'
   import { handlers } from './handlers'

   // This configures a request mocking server with the given request handlers.
   export const server = setupServer(...handlers)
   ```

These steps set up the basic structure and configuration needed to start using MSW for mocking HTTP requests in your React project.