import React from "react";
import { MailCard } from "../component/MailCard";
import { useMail } from "../context/MailProvider";
import { Mail } from "../types";

type calculateUnreadProps = (data: Mail[]) => number;
const calculateUnread: calculateUnreadProps = (data) => {
  return data.reduce((acc, value) => {
    return value.unread ? acc + 1 : acc;
  }, 0);
};

export default function Home() {
  const { showUnread, showStarred, data, dispatch } = useMail();

  return (
    <div>
      <fieldset style={{ marginTop: "1rem" }}>
        <legend> Filters </legend>
        <label>
          <input
            type="checkbox"
            checked={showUnread}
            onChange={() => dispatch({ type: "TOGGLE_UNREAD" })}
          />
          Show unread mails
        </label>

        <label>
          <input
            type="checkbox"
            checked={showStarred}
            onChange={() => dispatch({ type: "TOGGLE_STARRED" })}
          />
          Show starred mails
        </label>
      </fieldset>
      <h3>Unread: {calculateUnread(data)}</h3>
      <div className="mail-list">
        {data.map((mail: Mail) => (
          <MailCard {...mail} key={mail.mId} noDetail />
        ))}
      </div>
    </div>
  );
}
