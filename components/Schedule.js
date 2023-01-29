import styles from "./schedule.module.css";
import Collapsible from "./Collapsible";

import constants from "../public/constants.js";

function FrequentlyAsked() {
  return (
    <div className={styles.container} id="schedule">
      
      <h1 className={styles.title}>Schedule</h1>
      <table className={styles.scheduleTable}>
        <thead>
          <tr>
            <th className={styles.containerText}>Time</th>
            <th className={styles.containerText}>Event</th>
            <th className={styles.containerText}>Location</th>
          </tr>
        </thead>
        <tbody>
        {constants.SCHEDULE.map((event, index) => (
            <tr key={index}>
              <td className={styles.containerText}>
                <time datetime={event.datetime.toISOString()}>
                  {event.datetime.toLocaleString('en-US', { weekday: 'short', hour: 'numeric', minute: '2-digit', hour12: true })}
                </time>
              </td>
              <td className={styles.containerText}>
                {event.name}
              </td>
              <td className={styles.containerText}>
                {event.location}
              </td>
            </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default FrequentlyAsked;
