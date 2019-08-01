//notes

// does this live somewhere where I can see original?

//setting store to window object to make global ...

// fireChange method on store?

// arrow functions not being used?

//INCENTIVES EDIT ROW

// plugin being used for jquery?

// thisRow vs just using this?

// view store, see what 'incentive_types' is (this is what is being iterated for the option tags)



//incentives add button... super self explanatory (creates blank row)

//state call in each component:

getInitialState: function() {
  return store.get('state');
},


//select tags

// contains options which are iterated and inserted into the select tags


//controlled form - note that the input value is set to a value in state, but also changes that value onChange
//this results in a controlled form - React is aware of the value at all times and rerenders accordingly
//example below is inline, but other onChange calls can reference a function defined outside

function render() {
  return (
    <div className="ui segment">
      <form onSubmit={this.onFormSubmit} className="ui form">
        <div className="field">
          <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} />
        </div>
      </form>
    </div>
  )
}
