import { Mail } from "../types";

type initialState = {
  data: Mail[];
  trash: Mail[];
  spam: Mail[];
  showUnread: boolean;
  showStarred: boolean;
};

type STAR_MAIL = {
  type: "STAR_MAIL";
  payload: string;
};
type DELETE_MAIL = {
  type: "DELETE_MAIL";
  payload: Mail;
};
type DELETE_FOREVER = {
  type: "DELETE_FOREVER";
  payload: Mail;
};
type UNREAD_MAIL = {
  type: "UNREAD_MAIL";
  payload: string;
};
type MARK_AS_READ = {
  type: "MARK_AS_READ";
  payload: string;
};
type ADD_TO_SPAM = {
  type: "ADD_TO_SPAM";
  payload: Mail;
};
type REMOVE_FROM_SPAM = {
  type: "REMOVE_FROM_SPAM";
  payload: Mail;
};
type TOGGLE_UNREAD = {
  type: "TOGGLE_UNREAD";
};
type TOGGLE_STARRED = {
  type: "TOGGLE_STARRED";
};
type ActionType =
  | STAR_MAIL
  | DELETE_MAIL
  | DELETE_FOREVER
  | UNREAD_MAIL
  | MARK_AS_READ
  | ADD_TO_SPAM
  | REMOVE_FROM_SPAM
  | TOGGLE_UNREAD
  | TOGGLE_STARRED;

export { initialState, ActionType };
