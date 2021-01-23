import React, { ReactElement } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import './sideBar.css';
import { Dashboard, Settings } from "@material-ui/icons";


export type SideBarItem = 'profile' | 'dashboard';
type Props = {
  avatarSrc: string;
  onItemSelected?: (item: SideBarItem) => any;
};

const safeCall = (x?: Function, ...args: any[]) => x && x(...args);

export function SideBar(props: Props): ReactElement {
  return (
    <div className="side-menu">
      <Avatar src={props.avatarSrc} className="item"
        onClick={() => safeCall(props.onItemSelected, 'profile')}
      ></Avatar>
      <IconButton>
        <Dashboard/>
      </IconButton>
      <IconButton>
        <Settings/>
      </IconButton>
    </div>
  );
}