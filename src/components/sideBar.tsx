import React, { ReactElement } from "react";
import { Avatar } from "@material-ui/core";
import './sideBar.css';


type Item = 'profile' | 'dashboard';
type Props = {
  avatarSrc: string;
  onItemSelected?: (item: Item) => any;
};

const safeCall = (x?: Function, ...args: any[]) => x && x(...args);

export function SideBar(props: Props): ReactElement {
  return (
    <div className="side-menu">
      <Avatar src={props.avatarSrc} className="item"
        onClick={() => safeCall(props.onItemSelected, 'profile')}
      ></Avatar>
    </div>
  );
}