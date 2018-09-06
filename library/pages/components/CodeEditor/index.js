/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Controlled as CodeMirror } from 'react-codemirror2';
import Header from './header';
import './styles.css';

const configOptions = {
    mode: 'jsx',
    lineNumbers: true,
};

export default function CodeEditor({ code }) {
    return (
        <div className="rainbow-flex rainbow-flex_column rainbow_vertical-stretch rainbow-m-vertical_medium">
            <Header code={code} />
            <CodeMirror value={code} options={configOptions} />
        </div>
    );
}

CodeEditor.propTypes = {
    code: PropTypes.string,
};

CodeEditor.defaultProps = {
    code: '',
};
