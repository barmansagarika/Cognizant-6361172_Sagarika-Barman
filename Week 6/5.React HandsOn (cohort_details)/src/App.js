import React from 'react';
import CohortDetails from './CohortDetails';
import styles from './CohortDetails.module.css';

function App() {
  return (
    <div className={styles.container}>
      <h2>Cohorts Details</h2>
      <div className={styles.row}>
        <CohortDetails
          name="ADM21JF014 - Java FSD"
          status="ongoing"
          startDate="10-Sep-2021"
          coach="Apoorv"
          trainer="Elisa Smith"
        />
        <CohortDetails
          name="ADK23KT789 - Android Dev (Kotlin)"
          status="completed"
          startDate="15-Mar-2023"
          coach="Sakshi"
          trainer="Nishant Rana"
        />
        <CohortDetails
          name="GENAI24X - Gen AI Bootcamp"
          status="ongoing"
          startDate="01-Jul-2025"
          coach="Megha Verma"
          trainer="Dr. Raghav Sharma"
        />
      </div>
    </div>
  );
}

export default App;