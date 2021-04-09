import React, { Component } from 'react';

import './App.css';
import Backdrop from '../components/UI/Backdrop/Backdrop';
import Dropdown from '../components/UI/Dropdown/Dropdown';
import Logo from '../components/Logo/Logo';
import SearchBar from '../components/SearchBar/SearchBar';
import FilterCity from '../components/FilterCity/FilterCity';
import FilterGuest from '../components/FilterGuest/FilterGuest';
import Properties from '../components/Properties/Properties';


const propertyList = [
  {
      'location': 'Helsinki, Finland',
      'guest': 2,
      'url': 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80',
      'host': true,
      'type': 'Entire apartment. 2 beds',
      'rating': 4.40,
      'description': 'Stylist aparment in the center of the city'
  },
  {
      'location': 'Helsinki, Finland',
      'guest': 2,
      'url': 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
      'host': false,
      'type': 'Private room',
      'rating': 4.25,
      'description': 'Cozy, peaceful and private room with...'
  },
  {
      'location': 'Helsinki, Finland',
      'guest': 6,
      'url': 'https://images.unsplash.com/photo-1603111691889-364c9fc6d066?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'host': false,
      'type': 'Entire house',
      'rating': 4.96,
      'description': 'Modern House'
  },
  {
      'location': 'Helsinki, Finland',
      'guest': 2,
      'url': 'https://images.unsplash.com/photo-1615298681607-14ec66115339?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
      'host': true,
      'type': 'Entire apartment. 2 beds',
      'rating': 4.85,
      'description': 'Stylist room in design district'
  },
  {
      'location': 'Helsinki, Finland',
      'guest': 3,
      'url': 'https://images.unsplash.com/photo-1604809226867-0c54292210d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'host': false,
      'type': 'Private room',
      'rating': 4.54,
      'description': 'Modern apartment close to nature'
  },
  {
      'location': 'Helsinki, Finland',
      'guest': 8,
      'url': 'https://images.unsplash.com/photo-1495433324511-bf8e92934d90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'host': false,
      'type': 'Entire house',
      'rating': 4.64,
      'description': 'House in a remote area'
  },
  {
      'location': 'Turku, Finland',
      'guest': 2,
      'url': 'https://images.unsplash.com/photo-1499916078039-922301b0eb9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'host': false,
      'type': '1 Bedroom apartment',
      'rating': 4.22,
      'description': 'Apartment by the city'
  },
  {
      'location': 'Turku, Finland',
      'guest': 2,
      'url': 'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
      'host': false,
      'type': 'Private room',
      'rating': 3.90,
      'description': 'Outside City'
  },
  {
      'location': 'Turku, Finland',
      'guest': 4,
      'url': 'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'host': false,
      'type': 'Entire house',
      'rating': 4.80,
      'description': 'Best location closed to the beach'
  },
  {
      'location': 'Oulu, Finland',
      'guest': 2,
      'url': 'https://images.unsplash.com/photo-1590725121839-892b458a74fe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      'host': false,
      'type': 'Cabin at Wild Forest',
      'rating': 4.40,
      'description': 'Modern interior design'
  },
  {
      'location': 'Oulu, Finland',
      'guest': 4,
      'url': 'https://images.unsplash.com/photo-1591774017832-02c686dedd32?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      'host': false,
      'type': 'Tiny house',
      'rating': 4.10,
      'description': 'Peaceful retreat house'
  },
  {
      'location': 'Oulu, Finland',
      'guest': 2,
      'url': 'https://images.unsplash.com/photo-1590490359683-658d3d23f972?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
      'host': false,
      'type': 'Luxurious 1 bedroom',
      'rating': 4.92,
      'description': 'Perfect view of the city'
  },
  {
      'location': 'Vaasa, Finland',
      'guest': 2,
      'url': 'https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
      'host': false,
      'type': 'Cozy private room',
      'rating': 4.92,
      'description': 'Clean and quiet room'
  },
  {
      'location': 'Vaasa, Finland',
      'guest': 2,
      'url': 'https://images.unsplash.com/photo-1530629013299-6cb10d168419?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80',
      'host': false,
      'type': 'Entire apartment',
      'rating': 4.92,
      'description': 'Complete package (minutes away from town)'
  },
  {
      'location': 'Vaasa, Finland',
      'guest': 4,
      'url': 'https://images.unsplash.com/photo-1616593969747-4797dc75033e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80',
      'host': false,
      'type': 'Vacation house with private entrance',
      'rating': 4.92,
      'description': 'Cozy balcony for morning coffee'
  },
  {
      'location': 'Vaasa, Finland',
      'guest': 6,
      'url': 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'host': false,
      'type': 'Beautiful house',
      'rating': 4.92,
      'description': 'Perfect getaway at Vaasa'
  },
];

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
          properties: propertyList,
          filterDrawer: false,
          locationInput: 'Helsinki, Finland',
          guestInput: 'Add',
          filterGuest: false,
          filterLocation: false,
          locationSelected: true,
          adultGuestVal: 0,
          childGuestVal: 0,
          searchLocation: 'Helsinki, Finland',
          searchGuestNo: ''
      }
  }

  componentDidMount = () => document.addEventListener("keydown", this.handleHideDrawerPress);
  
  componentWillUnmount = () => document.removeEventListener("keydown", this.handleHideDrawerPress);

  /* Hide Filter Drawer on 'ESC' press OR on click outside drawer container */
  handleHideDrawerPress = event => {
      if(event.keyCode === 27) {
          this.setState({ 
              filterDrawer: false,
              filterGuest: false,
              filterLocation: false
          }); 
      }
  }

  handleHideFilterDrawer = () => {
        this.setState({ 
            filterDrawer: false,
            filterGuest: false,
            filterLocation: false
        });
  }

  /* Handles Input change */
  handleInputChange = (event) => {
      this.setState({
          locationInput: event.target.value, 
          locationSelected: false
      });
  }

  /* Shows filter location on click */
  handleShowFilterLocation = () => {
      this.setState({ 
          filterLocation: true,
          filterDrawer: true,
          filterGuest: false,
          searchClicked: false
      });
  }

  setFilterLocation = (bool) => this.setState({ filterLocation: bool });

  /* Show filter guest number on click */
  handleShowFilterGuest = () => {
      this.setState({ 
          filterGuest: true,
          filterDrawer: true,
          filterLocation: false,
      });

      if(!this.state.locationSelected) this.setState({ locationInput: ''})
  }

  setHideFilterGuest = (hide) => { this.setState({ filterGuest: hide }); }
  
  /* Setter: number of guest (children/adult) */
  setAdultValue = (val) => this.setState({ adultGuestVal: val});

  setChildrenValue = (val) => this.setState({ childGuestVal: val});

  getGuestTotal = total => {
      if(total > 0) {
          this.setState({ guestInput: total})
      }
  }

  /* Setter: location selected or location/guest number user wants to searched */
  setLocationSelection = (event) => {
      this.setState({
          locationInput: event.currentTarget.innerText,
          locationSelected: true
      })
  }

  setSearchedLocation = (loc) => this.setState({ searchLocation: loc });

  setSearchedGuestNo = (val) => this.setState({ searchGuestNo: val });

  render() {
      const dropdownStyle = { flexFlow: 'column'}; 
      const uniqueCity = [];

      this.state.properties.forEach(property => {
              if(uniqueCity.indexOf(property.location) === -1) {
                  uniqueCity.push(property.location);
              }
          });
      
      let filteredCity = uniqueCity.filter(city => {
          return this.state.locationInput && city.toLowerCase().indexOf(this.state.locationInput.toLowerCase()) !== -1;
      });

      const renderFilteredCity = this.state.locationInput && filteredCity.length === 0
              ? <FilterCity>Search Not Found</FilterCity>
              : filteredCity.map((filter, index) => {
                  return <FilterCity 
                              key={index} 
                              clicked={this.setLocationSelection}>{filter}
                          </FilterCity>
          })
      ;
      
      return (
          <div className="App">
              <Backdrop 
                  showDrawer={this.state.filterDrawer}
                  clicked={this.handleHideFilterDrawer}
              />
              <Dropdown 
                  showDrawer={this.state.filterDrawer}
              />
              <header style={this.state.filterDrawer ? dropdownStyle : null} className="header">
                  <Logo />
                  <SearchBar
                      propertiesList={this.state.properties}
                      changed={this.handleInputChange}
                      locationInput={this.state.locationInput}
                      guestInput={this.state.guestInput}
                      showDrawer={this.state.filterDrawer}
                      hideDrawer={this.handleHideFilterDrawer}
                      showFilterLocation={this.handleShowFilterLocation}
                      filterGuest={this.state.filterGuest}
                      showFilterGuest={this.handleShowFilterGuest}
                      locationSelected={this.state.locationSelected}
                      searchedLocation={this.setSearchedLocation}
                      searchedGuestNo={this.setSearchedGuestNo}
                      setFilterLocation={this.setFilterLocation}
                  />
                  <div className="filtered-container">
                      {this.state.filterLocation && !this.state.locationSelected 
                        ? <div className="city-container">{renderFilteredCity}</div> 
                        : null
                      }
                      {this.state.filterGuest ? 
                          <FilterGuest 
                              hideFilterGuest={this.setHideFilterGuest} 
                              total={this.getGuestTotal}
                              adultVal={this.state.adultGuestVal}
                              childVal={this.state.childGuestVal}
                              getAdultValue={this.setAdultValue}
                              getChildrenValue={this.setChildrenValue}
                          />
                          : null
                      }
                  </div>
              </header>
              <main>
                  <Properties 
                      propertiesList={this.state.properties}
                      location={this.state.searchLocation}
                      guest={this.state.searchGuestNo}
                      selected={this.state.locationSelected}
                  />
              </main>
          </div>
      )
  }
}

export default App;