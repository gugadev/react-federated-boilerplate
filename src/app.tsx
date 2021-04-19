import React from "react";

import styles from "src/app.scss";

export const App = (): JSX.Element => (
    <div data-testid="app" className={styles.container}>
        <h1>It works!</h1>
    </div>
);
