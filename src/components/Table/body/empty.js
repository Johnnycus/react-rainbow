import React from 'react';
import PropTypes from 'prop-types';
import Icon from './emptyIcon';

export default function Empty(props) {
    const {
        emptyIcon,
        emptyTitle,
        emptyDescription,
    } = props;

    return (
        <div className="rainbow-table_body--empty-container">
            <span className="rainbow-table_body--empty-icon">
                {emptyIcon}
            </span>
            <h1 className="rainbow-table_body--empty-title">
                {emptyTitle}
            </h1>
            <h2 className="rainbow-table_body--empty-description">
                {emptyDescription}
            </h2>
        </div>
    );
}

Empty.propTypes = {
    emptyIcon: PropTypes.node,
    emptyTitle: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    emptyDescription: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
};

Empty.defaultProps = {
    emptyIcon: <Icon />,
    emptyTitle: 'It’s empty here',
    emptyDescription: 'Our robots did not find any match...',
};
