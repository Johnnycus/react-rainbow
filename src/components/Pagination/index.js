import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import LeftArrow from './leftArrow';
import RightArrow from './rightArrow';
import NavigationButton from './navigationButton';
import PageButtons from './pageButtons';
import './styles.css';

export default function Pagination(props) {
    const { pages, activePage, onChange, className, style } = props;

    const getContainerClassNames = () => classnames('rainbow-pagination', className);

    const isFirstItemSelected = activePage === 1;
    const isLastItemSelected = activePage === pages;

    return (
        <nav className={getContainerClassNames()} style={style} aria-label="pagination">
            <ul className="rainbow-pagination_container">
                <NavigationButton
                    dataId="previous-page-button"
                    icon={<LeftArrow />}
                    onClick={event => onChange(event, activePage - 1)}
                    disabled={isFirstItemSelected} />
                <PageButtons onChange={onChange} pages={pages} activePage={activePage} />
                <NavigationButton
                    dataId="next-page-button"
                    icon={<RightArrow />}
                    onClick={event => onChange(event, activePage + 1)}
                    disabled={isLastItemSelected} />
            </ul>
        </nav>
    );
}

Pagination.propTypes = {
    /** The number of pages. */
    pages: PropTypes.number.isRequired,
    /** The number of the page that is selected. */
    activePage: PropTypes.number,
    /** The action triggered when page button is clicked. */
    onChange: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

Pagination.defaultProps = {
    activePage: undefined,
    onChange: () => {},
    className: undefined,
    style: undefined,
};
