import React from 'react';

import { Layout } from '../../layout';
import { HomeModule, AboutModule, CausesModule, EventsModule, BlogsModule } from '../../modules';

export const Home = () => {
    return (
        <Layout>
            <HomeModule />
            <AboutModule />
            <CausesModule />
            <EventsModule />
            <BlogsModule />
        </Layout>
    )
}