import React, { Component } from 'react';
import styles from './Spinner.module.css';

class Spinner extends Component {

    render() {
        return (
            <div className={styles.spinner}>
                <div className={styles.bounce1}/>
                <div className={styles.bounce2}/>
                <div className={styles.bounce} />
            </div>
        )
    }

}

export default Spinner;