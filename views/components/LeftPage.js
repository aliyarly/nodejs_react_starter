'use strict';
import React from 'react';
import IndexBody from './IndexBody';
import IndexHeader from './IndexHeader';
import IndexFooter from './IndexFooter';

const LeftPage = React.createClass({
     render: function () {
         return (
            <div className="left_page">
                <IndexHeader/>
                <IndexBody/>
                <IndexFooter/>
            </div>
        )
     }
})
export default LeftPage;