import * as React from 'react';
const testData = [
  {
    title: 'Title 1',
    imageUrl:
      'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
    readMore: '',
  },
  {
    title: 'Title 4',
    imageUrl:
      'https://images.pexels.com/photos/20783/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
    readMore: '',
  },
  {
    title: 'Title 3',
    imageUrl:
      'https://images.pexels.com/photos/20782/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
    readMore: '',
  },
];

function ResourcesGallary(props) {
  return (
    <div className="resourcesGalary">
      <h2 className="resourcesGalaryHeading">{props.content}</h2>
      {testData.map((resource, index) => (
        <div key={`resource_${index}`} style={{ float: 'left' }}>
          <div className="resourceGaleryContent">
            <img className="resourceGalaryImage" src={resource.imageUrl} />
            <div className="resourceGalaryTile">{resource.title}</div>
            <div className="resourceGalaryReadMore">Read More</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ResourcesGallary;
