describe('/ (Home Page)', () => {
    let page;
    beforeAll(async () => {
        page = await global.__BROWSER__.newPage();
        await page.goto('https://www.vogue.fr', { waitUntil: 'domcontentloaded' });
    }, 20000);

    it('should load without error', async () => {
        const text = await page.evaluate(() => document.body.textContent);
        expect(text).toContain('vogue');
    });

    it('div-gpt-display-pos-0 has to be in page', async () => {
        const ad0 = await page.$('div#div-gpt-display-pos-0');
        expect(ad0).toBeTruthy();
    });

    it('div-gpt-display-pos-0 has to be loaded', async () => {
        const ad0 = await page.$('div#div-gpt-display-pos-0');
        const dataAttr = await page.evaluate(ad0 => ad0.getAttribute('data-acilia-dfp'), ad0);
        expect(dataAttr).toBeTruthy();
    });

    it('div-gpt-display-pos-1 has to be in page', async () => {
        const ad1 = await page.$('div#div-gpt-display-pos-1');
        expect(ad1).toBeTruthy();
    });

    it('div-gpt-display-pos-1 has to be loaded', async () => {
        const ad1 = await page.$('div#div-gpt-display-pos-1');
        const dataAttr = await page.evaluate(ad1 => ad1.getAttribute('data-acilia-dfp'), ad1);
        expect(dataAttr).toBeTruthy();
    });

    it('div-gpt-display-pos-2 has to be in page', async () => {
        const ad2 = await page.$('div#div-gpt-display-pos-2');
        expect(ad2).toBeTruthy();
    });

    it('div-gpt-display-pos-2 has to be loaded', async () => {
        const ad2 = await page.$('div#div-gpt-display-pos-2');
        const dataAttr = await page.evaluate(ad2 => ad2.getAttribute('data-acilia-dfp'), ad2);
        expect(dataAttr).toBeTruthy();
    });

    it('div-gpt-display-pos-3 has to be in page', async () => {
        const ad3 = await page.$('div#div-gpt-display-pos-3');
        expect(ad3).toBeTruthy();
    });

    it('div-gpt-display-pos-3 has to be loaded', async () => {
        const ad3 = await page.$('div#div-gpt-display-pos-3');
        const dataAttr = await page.evaluate(ad3 => ad3.getAttribute('data-acilia-dfp'), ad3);
        expect(dataAttr).toBeTruthy();
    });
});
