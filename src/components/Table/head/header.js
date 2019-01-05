/* eslint-disable no-param-reassign,class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RenderIf from '../../RenderIf';
import ArrowDown from './arrowDown';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.headerContainer = React.createRef();
        this.resizeBar = React.createRef();
        this.state = {
            width: props.width,
        };
    }

    setColumnWdith(width) {
        this.setState({ width });
    }

    getClassName() {
        const { sortable, isSelected } = this.props;
        return classnames(
            'rainbow-table_header',
            {
                'rainbow-table_header--sortable': sortable,
                'rainbow-table_header--selected': isSelected,
            },
        );
    }

    getHeaderTitle() {
        const { content } = this.props;
        if (typeof content === 'string') {
            return content;
        }
        return undefined;
    }

    isResizable() {
        const { resizeColumnDisabled, width } = this.props;
        return !resizeColumnDisabled && width === undefined;
    }

    handleMouseUp() {
        document.removeEventListener('mouseup', this.handleMouseUp);
        document.removeEventListener('mousemove', this.handleMouseMove);
        const headerContainerWidth = this.headerContainer.current.getBoundingClientRect().width;
        this.resizeBar.current.style.transform = 'unset';
        const { minColumnWidth, maxColumnWidth } = this.props;
        const width = headerContainerWidth + this.newXPosition;
        if (width < minColumnWidth) {
            this.setColumnWdith(minColumnWidth);
        } else if (width > maxColumnWidth) {
            this.setColumnWdith(maxColumnWidth);
        } else {
            this.setColumnWdith(width);
        }
    }

    handleMouseMove(event) {
        const { minColumnWidth, maxColumnWidth } = this.props;
        this.newXPosition = event.clientX - this.startXPosition;
        const { width } = this.headerContainer.current.getBoundingClientRect();
        const minXPosition = minColumnWidth - width;
        const maxXPosition = maxColumnWidth - width;
        if (this.newXPosition < minXPosition) {
            this.newXPosition = minXPosition;
        } else if (this.newXPosition > maxXPosition) {
            this.newXPosition = maxXPosition;
        }
        this.resizeBar.current.style.transform = `translateX(${this.newXPosition}px)`;
    }

    handleMouseDown(dragEvent) {
        dragEvent.preventDefault();
        if (this.isResizable()) {
            this.newXPosition = 0;
            this.startXPosition = dragEvent.clientX;
            document.addEventListener('mousemove', this.handleMouseMove);
            document.addEventListener('mouseup', this.handleMouseUp);
        }
    }

    render() {
        const { width } = this.state;
        const {
            content,
            isSelected,
            sortDirection,
            minColumnWidth,
            maxColumnWidth,
        } = this.props;
        const headerStyles = { width };

        return (
            <th
                className={this.getClassName()}
                style={headerStyles}
                scope="col"
                tabIndex={-1}
                aria-label={this.getHeaderTitle()}
                ref={this.headerContainer}>

                <div className="rainbow-table_header-content-wrapper">
                    <span title={this.getHeaderTitle()} className="rainbow-table_header-content">{content}</span>
                    <RenderIf isTrue={isSelected}>
                        <ArrowDown direction={sortDirection} />
                    </RenderIf>
                </div>

                <RenderIf isTrue={this.isResizable()}>
                    <div
                        className="rainbow-table_header-resize-bar"
                        role="presentation"
                        draggable
                        onMouseDown={this.handleMouseDown}
                        ref={this.resizeBar}>

                        <input
                            type="range"
                            min={minColumnWidth}
                            max={maxColumnWidth}
                            aria-label={this.getHeaderTitle()}
                            tabIndex={-1}
                            className="rainbow-table_header-resize-bar_input" />

                        <div
                            className="rainbow-table_header-resize-bar_table-guideline"
                            role="presentation"
                            draggable
                            onMouseDown={this.handleMouseDown} />

                    </div>
                </RenderIf>
            </th>
        );
    }
}

Header.propTypes = {
    content: PropTypes.any,
    isSelected: PropTypes.bool,
    sortable: PropTypes.bool,
    sortDirection: PropTypes.string,
    width: PropTypes.string,
    resizeColumnDisabled: PropTypes.bool,
    minColumnWidth: PropTypes.number,
    maxColumnWidth: PropTypes.number,
};

Header.defaultProps = {
    content: null,
    isSelected: false,
    sortable: false,
    sortDirection: 'asc',
    width: undefined,
    resizeColumnDisabled: undefined,
    minColumnWidth: undefined,
    maxColumnWidth: undefined,
};
