/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import Tabset from '../../../../src/components/Tabset';
import Tab from '../../../../src/components/Tab';
import RenderIf from '../../../../src/components/RenderIf';
import FeatureList from '../FeatureList';
import CodeEditor from '../CodeEditor';
import './styles.css';

const HelloWorldExample =
    `import React from 'react';
    import ReactDOM from 'react-dom';
    import Button from 'react-rainbow-components/components/button';

    function App() {
        return (
            <Button
                label="Hello World!"
                variant="brand"
                onClick={() => alert('Hello World!')}
            />
        );
    }

    ReactDOM.render(
        <App />,
        document.getElementById('container')
    );
    `;

export default class GettingStartedPage extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTabName: 'overview' };
        this.handleTabChange = this.handleTabChange.bind(this);
    }

    handleTabChange(e, tabName) {
        this.setState({ activeTabName: tabName });
    }

    render() {
        const { activeTabName } = this.state;
        return (
            <div className="react-rainbow-getting-started_top-container">
                <Tabset className="react-rainbow-getting-started_top-container-tabset"
                        activeTabName={activeTabName}
                        onSelect={this.handleTabChange}>
                    <Tab
                        name="overview"
                        label="OVERVIEW"
                        className="react-rainbow-getting-started_top-container-tab" />
                    <Tab
                        name="installation"
                        label="INSTALLATION"
                        className="react-rainbow-getting-started_top-container-tab react-rainbow-getting-started_top-container-tab_shortened" />
                    <Tab
                        name="usage"
                        label="USAGE"
                        className="react-rainbow-getting-started_top-container-tab" />
                    <Tab
                        name="contribuiting"
                        label="CONTRIBUITING"
                        className="react-rainbow-getting-started_top-container-tab react-rainbow-getting-started_top-container-tab_shortened" />
                </Tabset>
                <section className="react-rainbow-getting-started_container">
                    <RenderIf isTrue={activeTabName === 'overview'}>
                        <h3 className="react-rainbow-getting-started_section-heading">
                            React Rainbow is a collection of components that will
                            reliably help you build your application in a snap.
                            Give it a hack and let us know what you think.
                        </h3>
                        <FeatureList />
                    </RenderIf>
                    <RenderIf isTrue={activeTabName === 'installation'}>
                        <div className="rainbow-flex rainbow-flex_column">
                            <h3 className="react-rainbow-getting-started_section-heading">
                                React Rainbow Components is currently optimized for React 16.4.2
                            </h3>
                            <h2 className="react-rainbow-getting-started_section-heading-2">Install</h2>
                            <h5 className="react-rainbow-getting-started_section-heading-5">
                                React Rainbow Components is available as an
                                <a
                                    className="react-rainbow-getting-started_section-link"
                                    href="https://www.npmjs.com/package/react-rainbow-components"
                                    rel="noopener noreferrer"
                                    target="_blank">
                                    npm package
                                </a>
                            </h5>
                            <span className="react-rainbow-getting-started_section-italic">installing with npm</span>
                            <CodeEditor code="$ npm install react-rainbow-components --save" />
                            <span className="react-rainbow-getting-started_section-italic">installing with yarn</span>
                            <CodeEditor code="$ yarn add react-rainbow-components" />
                        </div>
                    </RenderIf>
                    <RenderIf isTrue={activeTabName === 'usage'}>
                        <h3 className="react-rainbow-getting-started_section-heading">
                            There are several runnable examples in this Git repo,
                            but here's a Hello World one:
                        </h3>
                        <CodeEditor code={HelloWorldExample} />
                        <iframe
                            title="codesandbox example"
                            src="https://codesandbox.io/embed/24p8n0pnz0?hidenavigation=1&fontsize=14&view=preview"
                            className="react-rainbow-getting-started_example"
                        />
                    </RenderIf>
                    <RenderIf isTrue={activeTabName === 'contribuiting'}>
                        <div className="rainbow-flex rainbow-flex_column">
                            <h3 className="react-rainbow-getting-started_section-heading">
                                We are excited that you are interested in
                                contributing to this project!
                            </h3>
                            <h2 className="react-rainbow-getting-started_section-heading-2"> Get your git on</h2>
                            <h5 className="react-rainbow-getting-started_section-heading-5">
                                Pull requests are very welcome,
                                but should be within the scope of the project,
                                and follow the repository's code conventions.
                                Before submitting a pull request, it's always good to file an issue,
                                so we can discuss the details of the PR.
                            </h5>
                            <h5 className="react-rainbow-getting-started_section-heading-5 rainbow-m-top_x-small">
                                Feel free to contribuite in rainbow-components available in
                                <a
                                    className="react-rainbow-getting-started_section-link"
                                    href="https://github.com/90milesbridge/react-rainbow"
                                    rel="noopener noreferrer"
                                    target="_blank">
                                    our repository in github
                                </a>
                            </h5>
                        </div>
                    </RenderIf>
                </section>
            </div>
        );
    }
}
