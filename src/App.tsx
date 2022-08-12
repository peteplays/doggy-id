import { Fragment } from 'react';

import { data } from './data';

const buildRegisteredDate = () => {
  const today = new Date();

  const monthCal = today.getMonth() + 8;
  const month = monthCal > 12 ? monthCal - 12 : monthCal;

  return `${today.getFullYear() + 1}-${month > 9 ? month : `0${month}`}-07`;
};

const App = () => {
  const { dogName, dogImage, handlers, phone, city, state } = data;

  return (
    <div className="container mx-auto my-4 border-red-600 border-2 p-1 rounded-lg">
      <div className="grid grid-cols-3 bg-red-600 rounded-t-md p-4">
        <div className="col-start-1 col-end-2 text-center text-white font-bold uppercase text-4xl">
          <p>service dog</p>
        </div>
        <div className="col-end-4 col-span-1 text-center text-white font-bold">
          {/* <p>its real</p> */}
        </div>
      </div>

      <div className="grid grid-cols-3 py-2 gap-4">
        <div className="col-start-1 col-end-2">
          <img
            src={dogImage}
            alt={`${dogName.toUpperCase()} the service dog`}
            className="border-black border-8 h-50"
          />
        </div>
        <div className="col-end-4 col-span-2 flex flex-col justify-around">
          <div>
            <p className="text-red-600 font-bold uppercase text-3xl">
              {dogName}
            </p>
            <p className="italic text-2xl uppercase">Service Dog</p>
            <p className="italic">Expires: {buildRegisteredDate()}</p>
          </div>
          <div>
            <p className="text-red-600 font-bold uppercase text-3xl">
              handler:{' '}
              {handlers.map((handler, idx) => {
                switch (true) {
                  case handlers.length === idx + 1:
                    return (
                      <Fragment key={handler}>
                        <span className="lowercase italic"> and</span> {handler}
                      </Fragment>
                    );
                  case handlers.length === idx + 2:
                    return <Fragment key={handler}>{handler}</Fragment>;
                  default:
                    return (
                      <Fragment key={handler}>
                        {handler}
                        {', '}
                      </Fragment>
                    );
                }
              })}
            </p>
            <p className="italic text-2xl">
              <span className="capitalize">{city}</span>,{' '}
              <span className="uppercase">{state}</span>
            </p>
          </div>

          <p>If separated from handler please call: {phone}</p>
        </div>
      </div>

      <div className="bg-red-600 rounded-b-md p-4">
        <p className="text-white text-center text-lg font-bold">
          In case of accident, do not separate service dog from handler
        </p>
      </div>
    </div>
  );
};

export default App;
