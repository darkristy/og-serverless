import chrome from 'chrome-aws-lambda';
import { launch } from 'puppeteer-core';

const exePath = 'usr/bin/google-chrome-stable';

interface Options {
  args: string[];
  executablePath: string;
  headless: boolean;
}

const getOptions = async (isDev: boolean) => {
  let options: Options;

  isDev
    ? (options = { args: [], executablePath: exePath, headless: true })
    : (options = {
        args: chrome.args,
        executablePath: await chrome.executablePath,
        headless: chrome.headless,
      });

  return options;
};

const getScreenShot = async (url: string, isDev: boolean) => {
  const options = await getOptions(isDev);
  const browser = await launch(options);
  const page = await browser.newPage();

  await page.setViewport({ width: 1200, height: 630 });
  await page.goto(url);
  return page.screenshot({ type: 'jpeg', quality: 100 });
};

export default getScreenShot;
