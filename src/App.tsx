import React, { Fragment } from 'react';
import './App.css';
import { SideBar } from './components/sideBar';
import { UserProfile } from './components/userProfile';

function App() {
  return (
    <Fragment>
      <UserProfile 
        name="Spaceeeeeeeeeeee"
        surname="Monkey"
        country="Montenegro"
        city="Cetinje"
        avatar="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.8tracks.com%2Fcover%2Fi%2F002%2F627%2F970%2F28879272-5934.jpg%3Frect%3D0%2C0%2C422%2C422%26q%3D98%26fm%3Djpg%26fit%3Dmax&f=1&nofb=1"
        coverUrl="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.mikeandlauren.com%2Fwp-content%2Fuploads%2F2015%2F10%2Fmountainside.jpg&f=1&nofb=1"
      />
      <SideBar 
        avatarSrc="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.8tracks.com%2Fcover%2Fi%2F002%2F627%2F970%2F28879272-5934.jpg%3Frect%3D0%2C0%2C422%2C422%26q%3D98%26fm%3Djpg%26fit%3Dmax&f=1&nofb=1"
        onItemSelected={(item) => alert(item)}
      ></SideBar>
    </Fragment>
  );
}

export default App;
