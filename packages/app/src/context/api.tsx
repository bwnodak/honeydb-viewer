import React from 'react';

const MyContext = React.createContext({
  foo: 'bar'
});

function foo() {
  return (
    <MyContext.Provider value={{ foo: 'bar' }}>
      <MyContext.Consumer>
        {(value) => (
          <div>{value.foo}</div>
        )}
      </MyContext.Consumer>
    </MyContext.Provider>
  )
}

export default foo;
