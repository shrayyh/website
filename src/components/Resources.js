import React from 'react';
import ResourceList from './ResourceList';
import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure Bootstrap is included
import '../styles.css';  // Ensure your custom styles are included

const resources = [
  // Existing resources
  { id: 1, title: 'Data Structures and Algorithms (DSA)', description: 'Learn Data Structures and Algorithms', link: 'https://www.youtube.com/watch?v=RBSGKlAvoiM' },
  { id: 2, title: 'HTML Basics', description: 'Learn HTML from scratch', link: 'https://www.youtube.com/watch?v=qz0aGYrrlhU&t=1110s' },
  { id: 3, title: 'CSS Fundamentals', description: 'Learn CSS techniques', link: 'https://www.youtube.com/watch?v=1Qu5kydw4FA&list=PLuE4JRVl95pTI3jIYZKdZrczm6DgfBSTU' },
  { id: 4, title: 'Bootstrap Tutorial', description: 'Master Bootstrap framework', link: 'https://www.youtube.com/watch?v=O_9u1P5YjVc&list=PL4cUxeGkcC9joIM91nLzd_qaH_AimmdAR' },
  

  
  { id: 6, title: 'React Tutorial', description: 'Learn React from scratch', link: 'https://www.youtube.com/watch?v=bMknfKXIFA8' },
  { id: 7, title: 'Python Crash Course', description: 'Comprehensive Python tutorial', link: 'https://youtu.be/_uQrJ0TkZlc?si=xRmDnYjogj5Y2Azi' },
  { id: 8, title: 'Django for Beginners', description: 'Learn Django web framework', link: 'https://www.youtube.com/watch?v=UmljXZIypDc&list=PL-osiE80TeTtoQCKZ03TU5fNfx2UY6U4p' },
  { id: 9, title: 'Flutter Development', description: 'Introduction to Flutter', link: 'https://youtu.be/VPvVD8t02U8?si=vu34UGyzA-4dzmi8' },
  { id: 10, title: 'JavaScript Basics', description: 'Learn JavaScript fundamentals', link: 'https://www.youtube.com/watch?v=ajdRvxDWH4w&list=PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW' },
  { id: 11, title: 'C Programming Tutorial', description: 'Learn C programming language', link: 'https://www.youtube.com/watch?v=87SH2Cn0s9A' },
  { id: 12, title: 'C++ Full Course', description: 'Learn C++ programming language', link: 'https://youtu.be/ZzaPdXTrSb8?si=WiAyj07EHsGSDcB8' },
  { id: 13, title: 'C# Programming Basics', description: 'Introduction to C# programming', link: 'https://youtu.be/FqCHwSH56PA?si=Erg1ikWhC5LUBWOA' },
];

const Resources = () => {
  return (
    <div className="container my-4">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title mb-4">Resources</h1>
          <ResourceList resources={resources} />
        </div>
      </div>
    </div>
  );
};

export default Resources;
