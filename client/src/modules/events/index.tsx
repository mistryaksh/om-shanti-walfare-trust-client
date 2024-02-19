
import React, { FC } from "react";

type EventsProps = {
     // title: string;
     // img: string;
     // date: string;
     // location: string;
     isHomePage?: boolean;
};

import React, { FC, useState, useEffect } from 'react';

import { useGetAllEventsQuery, useGetAllEventsCategoryQuery } from '../../core/services';

import { EventCard as Card, Loader, Button } from '../../core/components';

type EventsProps = {
   isHomePage?: boolean;
}

type SelectedCategoryProps = {
   label: string;
   id: string | null;
};

export const EventsModule: FC<EventsProps> = ({ isHomePage }): JSX.Element => {
     const renderEvents = () => {
          return (
               <>
                    <div className="text-center">
                         <p className="text-emerald-500 text-xl font-medium tracking-wider mb-6">What We Are Boing</p>
                         <h1 className="text-blue-950 text-5xl font-semibold tracking-wide leading-normal mb-12">
                              We Arrange Many Social Events <br /> For Charity Donations
                         </h1>
                    </div>
                    <div className="flex flex-col items-center gap-y-8">
                         <h1 className="text-slate-300 text-4xl font-medium tracking-wide leading-normal mb-12">
                              Comming soon
                         </h1>
                         {/* <Card title="Donation is hope" img="" date="8:30 - 9:30" location="Gujarat, India" />
               <Card title="" img="A hand for children" date="8:30 - 9:30" location="Gujarat, India" />
               <Card title="Help for children" img="" date="8:30 - 9:30" location="Gujarat, India" /> */}
                    </div>
               </>
          );
     };

     if (isHomePage) {
          return (
               <div
                    className="px-64 py-44 w-full h-screen"
                    style={{
                         background: "url('./images/events-bg.png')",
                         backgroundRepeat: "no-repeat",
                         backgroundPosition: "center",
                         backgroundSize: "cover",
                    }}
               >
                    {renderEvents()}
               </div>
          );
     }

     return renderEvents();
};
=======
   const [selectedCategory, setSelectedCategory] = useState<SelectedCategoryProps>({ label: 'All', id: null });
   const { data: events, isError: isEventError, error: eventError, isLoading: eventLoading } = useGetAllEventsQuery();
   const { data: categories, isError: isCategoryError, error: categoryError, isLoading: categoryLoading } = useGetAllEventsCategoryQuery();
   
   const handleCategoryChange = (label: string, id: string | null) => {
      setSelectedCategory({ label, id });
   }
   
   useEffect(() => {
      if (isEventError) {
         console.log('Error:', eventError);
      }
      if (isCategoryError) {
         console.log('Error:', categoryError);
      }
   }, [isEventError, eventError, events, eventLoading, isCategoryError, categoryError, categories, categoryLoading]);

   const renderEvents = () => {
      if (eventLoading) {
         return <Loader />;
      }

      return (
         <div className="flex flex-col items-center gap-y-8">
            <div className="grid grid-cols-3 gap-8">
               {events?.data && events?.data.length ? events?.data
               ?.slice(0, isHomePage ? 3 : events?.data.length)
               ?.filter((event) => {
                  if (isHomePage || selectedCategory.label === 'All') {
                     return event;
                  }
                  return event.categoryId === selectedCategory.id;
               })
               ?.map((event) => (
                  <Card
                     title={event.label}
                     img={event.image || './images/no-image.jpeg'}
                     date={new Date(event.postedOn)}
                     subTitle={event.subTitle}
                     description={event.description}
                  />
               )) : null}
            </div>
         </div>
      );
   }

   if (isHomePage) {
      return (
         <div className="px-64 py-44 w-full h-screen" style={{ background: "url('./images/events-bg.png')", backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div className="text-center">
               <p className="text-emerald-500 text-xl font-medium tracking-wider mb-6">
                  What We Are Boing
               </p>
               <h1 className="text-blue-950 text-5xl font-semibold tracking-wide leading-normal mb-12">
                  We Arrange Many Social Events <br /> For Charity Donations
               </h1>
            </div>
            {renderEvents()}
         </div>
      );
   }

   return (
      <>
         <div className="text-center">
            <p className="text-emerald-500 text-xl font-medium tracking-wider mb-6">
               What We Are Boing
            </p>
            <h1 className="text-blue-950 text-5xl font-semibold tracking-wide leading-normal mb-12">
               We Arrange Many Social Events <br /> For Charity Donations
            </h1>
         </div>

         <div className="flex items-center gap-x-2 mb-8">
            <Button
               onClick={() => handleCategoryChange('All', null)}
               value="All"
               transparent={selectedCategory.label !== 'All'}
               sm
            />
            {!categoryLoading && categories?.data && categories?.data.length ? categories?.data?.map((category) => (
               <Button
                  onClick={() => handleCategoryChange(category.label, category._id)}
                  transparent={selectedCategory.label !== category.label && selectedCategory.id !== category._id}
                  sm
               >
                  <span className={selectedCategory.label !== category.label && selectedCategory.id !== category._id ? 'text-slate-500' : 'text-white'}>{category.label}</span>
               </Button>
            )) : null}
         </div>

         {renderEvents()}
      </>
   );;
};
