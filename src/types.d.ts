/* eslint-disable @typescript-eslint/no-explicit-any */
interface ParsedReqs {
  author: string | string[] | undefined;
  title: string | string[] | undefined;
  website: string | string[] | undefined;
  image: string | string[] | undefined;
  handle: string | string[] | undefined;
}

declare module 'puppeteer-core';
declare module 'puppeteer';

type Browser = any;
type ConnectOptions = any;
type FetcherOptions = any;
type BrowserFetcher = any;
type ChromeArgOptions = any;
type LaunchOptions = any;
