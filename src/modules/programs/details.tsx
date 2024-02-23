/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { FC, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ROUTES } from '../../core/enums';
import { useLazyGetProgramByIdQuery } from '../../core/services';

import { Loader, Button } from '../../core/components';

export const ProgramDetailsModule: FC = () => {
   const { programId } = useParams();
   const navigate = useNavigate();

   const [
      GetProgramById,
      {
         data : program,
         error,
         isError,
         isLoading,
      }
   ] = useLazyGetProgramByIdQuery();
   
   useEffect(() => {
      if (isError) {
         console.log(error);
      }
      if (programId) {
         (() => {
            GetProgramById(programId);
         })();
      }
   }, [isError, error, programId, GetProgramById, program]);

   if (isLoading) {
      return (
         <Loader />
      );
   }

   return (
      <div>
         <div className="grid grid-cols-12 gap-x-20 mb-20">
            <div className="col-span-6">
               <img src={program?.data?.image} alt="program-image" className="aspect-video max-w-100 rounded-sm" />
            </div>
            <div className="col-span-6">
               <h1>{program?.data?.label}</h1>
               <h1>{program?.data?.subTitle}</h1>
               <Button value="Donate Now" onClick={() => navigate(`${ROUTES.DONATION}?programId=${programId}`)} />
            </div>
         </div>
         <div dangerouslySetInnerHTML={{ __html: program?.data?.description as string | TrustedHTML }} />
      </div>
   );
};