'use client';

import Wrapper from '../../_assets/_wrapper/Tutorials_49';

import {
  usePeopleContext_49,
  PeopleContextProvider_49,
} from '../2_context_people_49/_context';

const PropDrilling_49 = () => {
  return (
    <PeopleContextProvider_49>
      <Wrapper>
        <div className='container'>
          <h3>Context API Demo</h3>
          <List />
        </div>
      </Wrapper>
    </PeopleContextProvider_49>
  );
};

const List = () => {
  const { people } = usePeopleContext_49();
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = usePeopleContext_49();
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button className='btn' onClick={() => removePerson(id)}>
        remove
      </button>
    </div>
  );
};

export default PropDrilling_49;
