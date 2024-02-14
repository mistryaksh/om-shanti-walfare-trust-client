import React, { FC } from 'react';

import { Layout } from '../../core/components';
import { HomeModule } from "../../modules";

export const Home: FC = (): JSX.Element => {
    return (
        <Layout>
            <HomeModule />
        </Layout>
    )
}