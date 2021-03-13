import HomeIcon from '@material-ui/icons/Home';
import AssignmentIcon from '@material-ui/icons/Assignment';
import React from 'react';
import {Navigation} from 'react-minimal-side-navigation';

import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

const Navbar: React.FC = () => {
  return (
    <>
      <Navigation
          // you can use your own router's api to get pathname
          activeItemId="/management/members"
          onSelect={({itemId}) => {
            // maybe push to the route
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
              itemId: '/documents',
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
            {
              title: 'Another Item',
              itemId: '/another',
              subNav: [
                {
                  title: 'Teams',
                  itemId: '/management/teams',
                },
              ],
            },
          ]}
        />
    </>
  );
}

export default Navbar