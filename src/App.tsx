import { Fragment } from 'react';

import { data } from './data';

const buildExpiredDate = () => {
  const today = new Date();

  const monthCal = today.getMonth() + 8;
  const month = monthCal > 12 ? monthCal - 12 : monthCal;

  return `${today.getFullYear() + 1}-${month > 9 ? month : `0${month}`}-07`;
};

const getStamp = () => (
  <svg width="132" height="132">
    <circle
      cx="66"
      cy="66"
      r="65"
      fill="none"
      stroke="#E1B802"
      strokeWidth="2"
    />
    <circle
      cx="66"
      cy="66"
      r="65"
      fill="none"
      stroke="rgb(225, 184, 1,0.4)"
      strokeWidth="2"
    />
    <circle
      cx="66"
      cy="66"
      r="48"
      fill="none"
      stroke="#E1B802"
      strokeWidth="1"
    />
    <circle
      cx="66"
      cy="66"
      r="46"
      fill="none"
      stroke="#E1B802"
      strokeWidth="1"
    />
    <defs>
      <path
        id="text-path"
        d="M66 126A60 60 0 1 0 66 6a60 60 0 0 0 0 120"
        fill="none"
      />
    </defs>
    <text
      dominantBaseline="middle"
      textAnchor="middle"
      x="50%"
      y="51%"
      fontFamily="Manrope3-ExtraBold, Manrope3"
      fontSize="75"
      fontWeight="600"
      fill="none"
      stroke="#E1B802"
      strokeWidth="2"
    >
      ★
    </text>
    <text>
      <textPath
        xlinkHref="#text-path"
        // fontFamily="Manrope3-ExtraBold, Manrope3"
        fontSize="12"
        fontWeight="600"
        fill="#E1B802"
        letterSpacing="2.14"
      >
        • SERVICE DOG • SERVICE DOG • SERVICE DOG
      </textPath>
    </text>
  </svg>
);

const App = () => (
  <>
    {data.map(({ dogName, dogImage, handlers, phone, city, state }) => (
      <Fragment key={dogName}>
        <div className="container max-w-3xl mx-auto my-4 border-red-600 border-2 p-1 rounded-lg">
          <div className="grid grid-cols-3 bg-red-600 rounded-t-md p-4">
            <div className="col-start-1 col-end-2 text-center text-white font-bold uppercase text-4xl">
              <p>service dog</p>
            </div>
            {/* <div className="col-end-4 col-span-1 text-center text-white font-bold">
          <p>its real</p>
        </div> */}
          </div>

          <div className="grid grid-cols-3 py-2 gap-4">
            <div className="col-start-1 col-end-2">
              <img
                src={dogImage}
                alt={`${dogName.toUpperCase()} the service dog`}
                className="border-black border-8 h-50"
              />
            </div>
            <div className="col-end-4 col-span-2 flex flex-col justify-around relative">
              <div className="absolute top-0 right-5 opacity-70 -z-10">
                {getStamp()}
              </div>

              <div>
                <p className="text-red-600 font-bold uppercase text-3xl">
                  {dogName}
                </p>
                <p className="italic text-xl capitalize">Service Dog</p>
                <p className="italic">SD#: {Date.now()}</p>
                <p className="italic">Expires: {buildExpiredDate()}</p>
              </div>

              <div className="c-add-top-bottom-spacing-small-screen">
                <div className="text-red-600 font-bold capitalize text-3xl">
                  {handlers.map((handler) => (
                    <p key={handler}>{handler}</p>
                  ))}
                </div>
                <p className="italic text-xl capitalize">
                  handler{handlers.length > 1 ? 's' : ''}
                </p>
                <p className="italic">
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

        <div className="mb-14 last:mb-0" />
      </Fragment>
    ))}
  </>
);

export default App;
