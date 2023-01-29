import styles from "./schedule.module.css";

import constants from "../public/constants.js";

function Schedule() {
  return (
    <div className={styles.container} id="schedule">
      <h2 className={styles.title}>Schedule</h2>
      <table className={styles.scheduleTable}>
        <thead>
          <tr>
            <th>Time</th>
            <th>Event</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
        {constants.SCHEDULE.map((event, index) => (
            <tr key={index}>
              <td>
                <time dateTime={event.datetime.toISOString()}>
                  {event.datetime.toLocaleString('en-US', { weekday: 'short', hour: 'numeric', minute: '2-digit', hour12: true })}
                </time>
              </td>
              <td dangerouslySetInnerHTML={{ __html: event.name }}>
              </td>
              <td dangerouslySetInnerHTML={{ __html: event.location }}>
              </td>
            </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default Schedule;
