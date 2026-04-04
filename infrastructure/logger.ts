import { test } from '@playwright/test';

type LogLevel = 'INFO' | 'WARN' | 'ERROR' | 'DEBUG';

export class Logger {

  private message: string;

  private readonly logLevelIcon: Record<LogLevel, string> = {
    INFO: '🔵',
    WARN: '🟡',
    ERROR: '🔴',
    DEBUG: '⚪',
  }

  constructor(message: string = '') {
    this.message = message;
  }

  private buildMessage(level: LogLevel, message: string): string {
    const icon = this.logLevelIcon[level];
    const base = this.message ? `[${this.message}] ` : '';

    return `${icon} ${base}[${level}] ${message}`;
  }

  async log(level: LogLevel, message: string): Promise<void> {
    const finalMessage = this.buildMessage(level, message)

    await test.step(`${finalMessage}`, async () => {
      finalMessage
    })
  }

  async info(message: string): Promise<void> {
    await this.log('INFO', message)
  }

  async warn(message: string): Promise<void> {
    await this.log('WARN', message)
  }

  async error(message: string): Promise<void> {
    await this.log('ERROR', message)
  }

  async debug(message: string): Promise<void> {
    await this.log('DEBUG', message)
  }
}