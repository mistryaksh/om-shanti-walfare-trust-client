import React, { FC } from 'react';

import { Layout } from '../../core/components';
import { HomeModule, AboutModule, CausesModule, EventsModule, BlogsModule } from "../../modules";

export const Home: FC = (): JSX.Element => {
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