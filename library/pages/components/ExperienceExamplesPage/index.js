/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Prismic, QueryAt, QueryMulti } from 'react-prismic-cms';
import ExperienceExample from './experienceExample';
import './styles.css';

export default function ExperienceExamplesPage() {
    return (
        <Prismic repo="rainbow-doc">
            <div className="react-rainbow-experience-examples-view-port">
                <h1 className="react-rainbow-experience-examples-header-title">
                    Experience examples
                </h1>
                <div className="react-rainbow-experience-examples-container">
                    <QueryMulti component={ExperienceExample} type="experience-examples">
                        <QueryAt path="document.type" value="experience-examples" />
                    </QueryMulti>
                </div>
            </div>
        </Prismic>
    );
}
