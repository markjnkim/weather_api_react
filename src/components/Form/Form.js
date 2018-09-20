import React from 'react';

const Form = props => (
  <div>
    <h3>Form Component</h3>
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="City . . ." />
      <input type="text" name="country" placeholder="Country . . ." />
      <input type="submit" value="Get Weather" />
    </form>
  </div>
)

export default Form;