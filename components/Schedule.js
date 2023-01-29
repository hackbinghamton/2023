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
      <p>
        These are all of the events we have planned during HackBU 2023. Note that times (minorly) and places may be subject to change; the latest updates will be published to <a href="https://hackbu.org/discord">our Discord server</a>.
      </p>
      <p>
        We will soon be providing a map to help attendees get around the ITC.
      </p>
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
