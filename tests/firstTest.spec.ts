import {test,expect} from '@playwright/test'
import exp from 'constants';

test('Google launch',async ({page}) => {
    await page.goto("https://www.google.com/");
    expect(await page.title()).toEqual("Googles");

})