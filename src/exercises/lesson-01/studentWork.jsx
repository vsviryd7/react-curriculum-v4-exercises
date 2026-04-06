//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = "Olga";
  const age = 39;
  const hobbies = ["Traveling","Painting","Coding"];
  return (
    <div>
      {/* add JSX here */}
      <h1>About Me</h1>
      <p>   Hi! My name is {name}. I am {age} years old and I am learning React with Code the Dream. 
        I enjoy growing my skills in programming and creating new projects.</p>
       <h2>My Hobbies</h2>
          <ul>
            {hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
    </div>
  );
}
