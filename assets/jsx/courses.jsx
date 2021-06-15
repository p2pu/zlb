import React from 'react';
import { render } from 'react-dom';

import {Search, BrowseCourses} from "p2pu-components/dist/build-de.js";

import "p2pu-components/dist/build.css"


const App = props => {
  return (
    <Search
      searchSubject={'courses'}
      locale="de-DE"
      moreInfo={false}
      courseLink={true}
      initialState={{languages: ['de']}}
      Browse={BrowseCourses}
    />
  );
};

render(<App />, document.getElementById("course-search"));
