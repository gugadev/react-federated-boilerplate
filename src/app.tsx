import React from "react";

import Logo from "src/assets/images/logo.png";
import styles from "src/app.scss";

export const App = (): JSX.Element => (
    <div data-testid="app" className={styles.container}>
        <img src={Logo} alt="logo" className={styles.logo} />
        <h1 className={styles.title}>React Federeated Boilerplate</h1>
        <div className={styles.content}>
            <h2 className={styles.subtitleH2}>So, What's included?</h2>

            <div className={styles.paragraph}>
                <h3 className={styles.subtitleH3}>Loaders</h3>
                <ul className={styles.list}>
                    <li>style-loader</li>
                    <li>sass-loader</li>
                    <li>css-loader</li>
                    <li>@svgr/webpack</li>
                    <li>file-loader</li>
                </ul>
            </div>

            <div className={styles.paragraph}>
                <h3 className={styles.subtitleH3}>Plugins</h3>
                <ul className={styles.list}>
                    <li>teser-webpack-plugin</li>
                    <li>copy-webpack-plugin</li>
                    <li>dotenv-webpack-plugin</li>
                    <li>clean-webpack-plugin</li>
                    <li>html-webpack-plugin</li>
                </ul>
            </div>

            <div className={styles.paragraph}>
                <h3 className={styles.subtitleH3}>Other features</h3>
                <ul className={styles.list}>
                    <li>foco font</li>
                    <li>material design icons.</li>
                    <li>jest and testing-library</li>
                    <li>eslint with ts support</li>
                    <li>prettier</li>
                    <li>lighthouse</li>
                    <li>sonnarqube</li>
                </ul>
            </div>
        </div>
    </div>
);
