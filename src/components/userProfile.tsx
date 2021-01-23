import { Avatar, Button, ButtonGroup, Typography } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import React, { Fragment, ReactElement } from 'react';
import { Masque } from './masque';
import { LocationOn } from '@material-ui/icons';
//import { zeroUser } from '../../../sweedenPublicTypes/src/user';

type UserProfileProps = {
  name: string,
  surname: string,
  avatar: string,
  coverUrl: string,
  country: string,
  city: string,
  /*role: 'admin',
  brand: 'admin',
  selectedRole: 'admin',
  avatar:  */

  onPerspectiveSelection?: Function;
};

const coverHolder: CSSProperties = {
  height: '500px',
  width: '100%',
  display: 'grid',
  justifyContent: 'center',
  alignContent: 'space-evenly',
  placeItems: 'center',
  position: 'relative',
}
const mainAvatar: CSSProperties = {
  height: '300px', width: '300px',
  border: 'solid white 3px',
};
const coverEffectCSS: CSSProperties = {
  filter: 'blur(6px) brightness(0.8)',
};

const roles = 'adimn seller user'.split(' ');

export function UserProfile(props: UserProfileProps): ReactElement {
  return (
    <Fragment>
      <div style={coverHolder}>
        <Masque index={-1}>
          <img src={props.coverUrl} alt="waves" style={coverEffectCSS}/>
        </Masque>
        <Avatar src={props.avatar} style={mainAvatar}></Avatar>
        <Typography variant="h3" style={{color: 'white'}}>{props.name} {props.surname}</Typography>
        <Typography variant="h5" style={{color: 'white'}}>
          <LocationOn/> {props.country}, {props.city}
        </Typography>
      </div>
      <div style={{padding: '10px'}}>
        <span>Perspective:</span>
        <ButtonGroup disableElevation variant="contained" color="primary">
          {
            roles.map(x => <Button key={x} onClick={() => props.onPerspectiveSelection && props.onPerspectiveSelection(x)}>{x}</Button>)
          }
        </ButtonGroup>
      </div>
    </Fragment>
  );
}

/* export const zeroUser = {
  id: 'test-user-id-0',
  name: 'TestUser',
  surname: 'surname',
  role: 'admin',
  banIds: [],
  banLiftIds: [],
  
  totalComments: 0,
  totalLoadedComments: 0,
  loadedCommentRoots: 0,
  comments: [],

  reactionIds: [],
  totalReactions: 0,
  reactions: [],

  cart: {
    id: 'test-user-id-cart-id',
    userId: 'test-user-id',
    productIds: [],
  },
  
  offerIds: [],
  totalOffers: 0,
  offers: [],

  products: [],
  totalProducts: 0,
  productIds: [],

  purchases: [],
  purchaseIds: [],
  totalPurchases: 0,
} */