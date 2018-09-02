const FOLDERS_BTN = 'button=FOLDERS';
const DOCUMENTS_BTN = 'button=DOCUMENTS';
const CHILD_FOLDERS_BTN = 'li=Folder created by Me';
const CHILD_DOCUMENTS_BTN = 'li=Document created by Me';
const RECENT_ITEM = 'li=Recent';
const RECENT_ITEM_LINK = 'a=Recent';
const RECENT_ITEM_CLASS = 'rainbow-nav-vertical__item rainbow-is-active';
const CREATED_BY_ME_LINK = 'a=Created by Me';
const ENTER_KEY = '\uE006';
const TAB_KEY = '\uE004';

describe('VerticalNavigation expandable example', () => {
    beforeEach(() => {
        browser.url('/#!/VerticalNavigation/11');
        browser.refresh();
    });

    it('should open the "FOLDER" menu when click on the "FOLDER" button', () => {
        browser.click(FOLDERS_BTN);
        expect(browser.isVisible(CHILD_FOLDERS_BTN)).toBe(true);
    });
    it('should close the "DOCUMENTS" menu when click on the "DOCUMENTS" button', () => {
        browser.click(DOCUMENTS_BTN);
        expect(browser.isVisible(CHILD_DOCUMENTS_BTN)).toBe(false);
    });
    it('should not lost focus the "DOCUMENTS" menu when it was closed', () => {
        browser.click(DOCUMENTS_BTN);
        expect(browser.hasFocus(DOCUMENTS_BTN)).toBe(true);
    });
    it('should focus the "Recent" item when click on it', () => {
        browser.click(RECENT_ITEM);
        expect(browser.hasFocus(RECENT_ITEM_LINK)).toBe(true);
    });
    it('should lost focus the "Recent" link when it is focused and press the hey "TAB"', () => {
        browser.click(RECENT_ITEM);
        browser.keys(TAB_KEY);
        expect(browser.hasFocus(RECENT_ITEM_LINK)).toBe(false);
    });
    it('should select the "Recent" item when click on it', () => {
        browser.click(RECENT_ITEM);
        expect(browser.getAttribute(RECENT_ITEM, 'class')).toBe(RECENT_ITEM_CLASS);
    });
    it('should not lost select the "Recent" item when it is selected and press the hey "TAB"', () => {
        browser.click(RECENT_ITEM);
        browser.keys(TAB_KEY);
        expect(browser.getAttribute(RECENT_ITEM, 'class')).toBe(RECENT_ITEM_CLASS);
    });
    it('should move to the previous link ("Created by Me" link) when "Recent" item is focused and press "TAB"', () => {
        browser.click(RECENT_ITEM);
        browser.keys(TAB_KEY);
        expect(browser.hasFocus(CREATED_BY_ME_LINK)).toBe(true);
    });
    it('should open the "FOLDER" menu when it is focused and press ENTER', () => {
        browser.click(RECENT_ITEM);
        browser.keys(TAB_KEY);
        browser.keys(TAB_KEY);
        browser.keys(TAB_KEY);
        browser.keys(ENTER_KEY);
        expect(browser.isVisible(CHILD_FOLDERS_BTN)).toBe(true);
    });
});
