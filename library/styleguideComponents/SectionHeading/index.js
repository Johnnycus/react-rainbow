/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import GithubStars from './GithubStarsWrapper';
import githublogo from './image/github.svg';
import Badge from '../../../src/components/Badge';
import './styles.css';

const GithubStarsBadge = GithubStars(({ stars }) => (
    <Badge className="react-rainbow_github-badge" variant="lightest">
        <FontAwesomeIcon color="#061c3f" icon={faStar} pull="left" size="lg" />
        {stars}
    </Badge>
));

function resolveTitle(title) {
    if (title === 'Getting Started') {
        return 'Overview';
    }
    return title;
}

export default function SectionHeading({ children }) {
    return (
            <header className="react-rainbow_heading-container rainbow-align-content_space-between">
                <h1 className="react-rainbow_title-text">
                    {resolveTitle(children)}
                </h1>
                <div className="rainbow-align-content_center">
                    <div>
                        <GithubStarsBadge />
                    </div>
                    <a
                        href="https://github.com/reiniergs/react-lightning-components"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img src={githublogo} alt="github logo" />
                    </a>
                </div>
            </header>
    );
}

SectionHeading.propTypes = {
    children: PropTypes.string.isRequired,
};
