import React from 'react';

import { Layout } from '../../layout';
import { HomeModule, AboutModule } from '../../modules';

export const Home = () => {
    return (
        <Layout>
            <HomeModule />
            <AboutModule />
        </Layout>
    )
}