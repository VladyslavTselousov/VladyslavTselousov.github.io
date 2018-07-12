import React from 'react';
import ReactDOM from 'react-dom';


const options =   [{
    title: 'Show Courses',
    number: 120,
    header: 'Learn React',
    description: 'React is a fantastic new front end library for rendering web pages. React is a fantastic new front end library for rendering web pages.',
    imageUrl: 'https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png'
  }, {
    title: 'Show Courses',
    number: 25,
    header: 'Learn Gulp',
    description: 'Gulp will speed up your development workflow.  Gulp will speed up your development workflow.  Gulp will speed up your development workflow.',
    imageUrl: 'http://brunch.io/images/others/gulp.png'
  }, {
      title: 'Show Courses',
      number: 25,
      header: 'Learn Gulp',
      description: 'Gulp will speed up your development workflow.  Gulp will speed up your development workflow.  Gulp will speed up your development workflow.',
      imageUrl: 'http://brunch.io/images/others/gulp.png'
    }, {
      title: 'Show Courses',
      number: 25,
      header: 'Learn Gulp',
      description: 'Gulp will speed up your development workflow.  Gulp will speed up your development workflow.  Gulp will speed up your development workflow.',
      imageUrl: 'http://brunch.io/images/others/gulp.png'
    }, {
      title: 'Show Courses',
      number: 25,
      header: 'Learn Gulp',
      description: 'Gulp will speed up your development workflow.  Gulp will speed up your development workflow.  Gulp will speed up your development workflow.',
      imageUrl: 'http://brunch.io/images/others/gulp.png'
    }, {
      title: 'Show Courses',
      number: 25,
      header: 'Learn Gulp',
      description: 'Gulp will speed up your development workflow.  Gulp will speed up your development workflow.  Gulp will speed up your development workflow.',
      imageUrl: 'http://brunch.io/images/others/gulp.png'
    },
  ];


const Badge = ({title, number}) => 
    (
     <button className="btn btn-primary" type="button">
      {title} 
      <span className="Badge">{number}</span>
    </button>
 );

const Thumbnail = ({
    title,
    number,
    header,
    description,
    imageUrl,

}) =>
  (
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <img src={imageUrl} alt="..." />
            <div className="caption">
              <h3>{header}</h3>
              <p>{description}</p>
              <p>
                <Badge title={title} number={number} />
              </p>
            </div>
          </div>
        </div>
    );

class ThumbnailList extends React.Component {
  render() {
    return (
      <div className="main">
        {options.map((item) => (
          <Thumbnail
            
            {...item}
          />
        ))}
      </div>
    );
  }
}

ReactDOM.render(
  <ThumbnailList />,
  document.getElementById("root"),
);

