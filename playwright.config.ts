import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // ❌ tắt parallel để tránh lỗi môi trường
  fullyParallel: false,
  workers: 1,

  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,

  reporter: 'html',

  use: {
    trace: 'on-first-retry',
    headless: false,

    // 🔥 QUAN TRỌNG: ép dùng Chrome thật
    channel: 'chrome',
  },

  // 🔥 chỉ giữ 1 project để VS Code không chọn nhầm
  projects: [
    {
      name: 'chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome', // 👈 bắt buộc
      },
    },
  ],
});