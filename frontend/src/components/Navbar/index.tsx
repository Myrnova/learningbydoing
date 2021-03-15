import HomeIcon from '@material-ui/icons/Home';
import AssignmentIcon from '@material-ui/icons/Assignment';
import React from 'react';
import {Navigation} from 'react-minimal-side-navigation';

import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { useHistory, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {

  const history = useHistory();
  const location = useLocation();

  return (
    <React.Fragment>
      <Navigation
       activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            history.push(itemId);
          }}
          items={[
            {
              title: 'Dashboard',
              itemId: '/dashboard',
              // you can use your own custom Icon component as well
              // icon is optional
              elemBefore: () => <HomeIcon />,
            },
            {
              title: 'Documentos Pendentes',
              itemId: '/documentos',
              elemBefore: () => <AssignmentIcon/>,
              // subNav: [
              //   {
              //     title: 'Projects',
              //     itemId: '/management/projects',
              //   },
              //   {
              //     title: 'Members',
              //     itemId: '/management/members',
              //   },
              // ],
            },            
          ]}
        />
    </React.Fragment>
  );
}

export default Navbar