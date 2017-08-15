import React from 'react';
import { Link } from 'react-router';
import LeftPage from './LeftPage';
import RightPage from './RightPage';
import '../../contents/styles/css/components.css'
import '../../contents/styles/js/components.js'
class App extends React.Component {
  render() {
        return (
            <div className="mdl-layout__container">
            <div className="mdl-layout mdl-js-layout is-small-screen is-upgraded">
            <main className="mdl-layout__content mdl-color-text--grey-600" >
            <div className="content mdl-grid mdl-grid--no-spacing" id="content" style={{width:"100%",height:'876px'}}>
            <div className="mdl-components mdl-js-components " style={{width:"100%",height:'100%'}}>       
                <aside  className="mdl-components__nav mdl-shadow--4dp ">
                    <a href="#autotest" className="mdl-components__link mdl-component  is-active">
                        <div >
                        </div>
                        <span className="mdl-components__link-text">Autotest</span>
                    </a>
                    <a href="#amttools" className="mdl-components__link mdl-component ">
                        <div >
                        </div>
                        <span className="mdl-components__link-text">Amttools</span>
                    </a>
                </aside>
                <main className="mdl-components__pages" style={{background:"#fff"}}>
                    <section className="mdl-components__page is-active" id="autotest" style={{width:"100%",height:'100%'}}>
                        <div className="autotest_left_page" style={{width:"100%",height:'100%'}}><LeftPage/></div>
                    </section>
                    <section className="mdl-components__page" id="amttools" style={{width:"100%",height:'100%'}}>
                        <div className="amttools_right_page" style={{width:"100%",height:'100%'}}><RightPage/></div>
                    </section>
                </main>
            </div>
            </div>
            </main>
            </div>
            </div>
        )
    }

}
export default App;