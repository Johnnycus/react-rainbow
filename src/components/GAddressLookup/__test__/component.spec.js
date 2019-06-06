import React from 'react';
import { mount } from 'enzyme';
import PlacesLookupComponent from './../component';

global.google = {
    maps: {
        places: {
            AutocompleteService: jest.fn(() => ({
                getPlacePredictions: jest.fn(),
            })),
            // PlacesServiceStatus: jest.{
            //     OK: 'OK',
            // },
        },
    },
};

const nextProps = {
    isScriptLoaded: true,
    isScriptLoadSucceed: true,
};

describe('<PlacesLookupComponent/>', () => {
    it('should have the right class names', () => {
        const component = mount(<PlacesLookupComponent className="some-class" />);
        expect(component.find('.rainbow-google-address-lookup_container.some-class').exists()).toBe(
            true,
        );
    });
    it('should not call google.places.AutocompleteService when isScriptLoaded and isScriptLoadSucceed are false', () => {
        const component = mount(<PlacesLookupComponent className="some-class" />);
        component.setProps({
            isScriptLoaded: false,
            isScriptLoadSucceed: false,
        });
        expect(global.google.places.AutocompleteService).not.toHaveBeenCalled();
    });
    it('should not call google.places.AutocompleteService when isScriptLoaded is true and isScriptLoadSucceed is false', () => {
        const component = mount(<PlacesLookupComponent className="some-class" />);
        component.setProps({
            isScriptLoaded: true,
            isScriptLoadSucceed: false,
        });
        expect(global.google.places.AutocompleteService).not.toHaveBeenCalled();
    });
    it('should not call google.places.AutocompleteService when isScriptLoaded and isScriptLoadSucceed are true but previous isScriptLoaded was true', () => {
        const component = mount(<PlacesLookupComponent className="some-class" isScriptLoaded />);
        component.setProps(nextProps);
        expect(global.google.places.AutocompleteService).not.toHaveBeenCalled();
    });
    it('should set the right state after isScriptLoaded and isScriptLoadSucceed are set to true', () => {
        const component = mount(<PlacesLookupComponent />);
        expect(component.autocompleteService).toBeUndefined();
        component.setProps(nextProps);
        expect(component.autocompleteService).toEqual(expect.any(Object));
    });
});
