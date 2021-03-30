import React, { Component } from 'react';

import './Layout.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Canvas from '../../components/Canvas/Canvas';
import Aux from '../Auxilliary/Auxilliary';

class Layout extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          component: null,
          btnType: '',
          iconPosition: '',
          showButton: false,
          slideMenu: false,
          iconMenu: 'menu'
        }
      }
      
      /* Function: set the component clicked */
      getComponent = (com) => this.setState({ component: com });

      /* Handle Button states: eg. default/ oultine/ text */
      handleBtnTypeClicked = (type) => this.setState({ btnType: type });
    
      /* Handle Button states w/ icon: left/right icon */
      handleIconPosClicked = (pos) => this.setState({ iconPosition: pos });
    
      /* Handle Slide Menu */
      handleMenuClicked = () => {
        this.setState(prevState => ({ 
          slideMenu: !prevState.slideMenu,
        }));

        if(this.state.iconMenu === 'menu') {
          this.setState({ iconMenu: 'close'});
        } else {
          this.setState({ iconMenu: 'menu'});
        }
      }

      render() {
        return (
          <Aux>
            <span 
                className="material-icons md-36 icon-menu" 
                id={this.state.iconMenu} 
                onClick={this.handleMenuClicked}>{this.state.iconMenu}
            </span>
            <div className="Layout">       
              <Sidebar
                menu={this.state.slideMenu} 
                setComponent={this.getComponent}
                typeClicked={this.handleBtnTypeClicked}
                posClicked={this.handleIconPosClicked}
              />
              <Canvas
                component={this.state.component} 
                type={this.state.btnType}
                position={this.state.iconPosition}
                show={this.state.showButton}
              />
          </div>
          </Aux>
        );
      }
}

export default Layout;