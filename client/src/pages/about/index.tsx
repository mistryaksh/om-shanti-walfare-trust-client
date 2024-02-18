import React, { FC } from 'react';

import { Layout } from '../../core/components/Layout';
import { PageLayout } from '../../core/components/Layout/Page';
import { AboutModule, MissionModule } from '../../modules';

export const About: FC = () => {
   return (
      <Layout>
         <PageLayout title="About US">
            <MissionModule />
         </PageLayout>
         <AboutModule />
      </Layout>
   );
};
