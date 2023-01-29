import styles from "./schedule.module.css";

import constants from "../public/constants.js";

import config from "../next.config.js"

const ConditionalWrapper = ({ condition, wrapper, children }) => 
  condition ? wrapper(children) : children;

function Schedule(props) {
  return (
    <div className={`${styles.container} ${props.standalone && styles.standalone}`} id="schedule">
      <ConditionalWrapper condition={!props.standalone} wrapper={children => <a href={`${config.basePath}/schedule`}>{children}</a>}>
        <h2>
          Schedule
        </h2>
      </ConditionalWrapper>
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
