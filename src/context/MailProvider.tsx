import React, { createContext, useContext, useReducer } from "react";
import { mails } from "../data/inbox";
import { mailReducer } from "../reducer/mailReducer";
import { Mail } from "../types";
import { initialState, ActionType } from "../reducer/mailReducer.types";

type MailProviderProps = {
  children: React.ReactNode;
};

type MailContextProps = initialState & {
  dispatch: React.Dispatch<ActionType>;
};
const MailContext = createContext<MailContextProps | null>(null);

const useMail = (): MailContextProps => {
  const context = useContext(MailContext);
  if (!context) {
    throw new Error("useMail should be inside the MailProvider");
  }
  return context;
};

function getFilteredData(
  mailList: Mail[],
  { showStarred, showUnread }: { showStarred: boolean; showUnread: boolean }
): Mail[] {
  return mailList
    .filter(({ isStarred }) => (showStarred ? isStarred : true))
    .filter(({ unread }) => (showUnread ? unread : true));
}

const MailProvider: React.FC<MailProviderProps> = ({ children }) => {
  const [{ data, showStarred, showUnread, spam, trash }, dispatch] = useReducer(
    mailReducer,
    {
      data: mails,
      showStarred: false,
      showUnread: false,
      spam: [],
      trash: []
    }
  );

  const filteredData = getFilteredData(data, {
    showStarred: showStarred,
    showUnread: showUnread
  });

  return (
    <MailContext.Provider
      value={{
        data: filteredData,
        dispatch,
        spam,
        trash,
        showStarred,
        showUnread
      }}
    >
      {children}
    </MailContext.Provider>
  );
};

export { MailProvider, useMail };
