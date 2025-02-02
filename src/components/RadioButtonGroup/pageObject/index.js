const PageRadioButtonItem = require('./radioButton');

/**
 * RadioButtonGroup page object class.
 * @class
 */
class PageRadioButtonGroup {
    /**
     * Create a new RadioButtonGroup page object.
     * @constructor
     * @param {string} rootElement - The selector of the RadioButtonGroup root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Returns a new RadioButton page object of the element in item position.
     * @method
     * @param {number} itemPosition - The base 0 index of the radio.
     */
    getItem(itemPosition) {
        const items = $(this.rootElement).$$('.rainbow-radio-button-group_radio');
        if (items[itemPosition]) {
            return new PageRadioButtonItem(
                `${this.rootElement} .rainbow-radio-button-group_radio:nth-child(${itemPosition +
                    1})`,
            );
        }
        return null;
    }
}

module.exports = PageRadioButtonGroup;
