import { createServer } from './server';

const PORT = process.env.PORT || 3001;
const app = createServer();

app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🚀 Education Governance Backend API Service`);
  console.log(`📡 Listening on: http://127.0.0.1:${PORT}`);
  console.log(`🔍 Health Check: http://127.0.0.1:${PORT}/api/health`);
  console.log(`====================================================`);
});

export default app;
