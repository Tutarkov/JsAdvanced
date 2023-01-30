async function student() {

    //const students = 'https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json';
  
    let response = await fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"); 
    let parsed = await response.json(); 
    let sortirana = parsed;

    let display = document.getElementById("result");
    let male = document.getElementById("over");
    let female = document.getElementById("grade");
    let sorte = document.getElementById("sortiranje");

    
    const femaleStudents5 = parsed.filter(student => student.gender === 'Female' && student.averageGrade === 5);
    const femaleStudentsList = document.querySelector("#femaleStudents5 ul");
    femaleStudents5.forEach(student => {
      const li = document.createElement("li");
      li.textContent = `${student.firstName} ${student.lastName}`;
      femaleStudentsList.appendChild(li);
    });

    const maleStudents18Skopje = parsed
      .filter(student => student.gender === 'Male' && student.age >= 18 && student.city === 'Skopje')
      .map(student => `${student.firstName} ${student.lastName}`);
    const maleStudentsList = document.querySelector("#maleStudents18Skopje ul");
    maleStudents18Skopje.forEach(fullName => {
      const li = document.createElement("li");
      li.textContent = fullName;
      maleStudentsList.appendChild(li);
    });

    //Ova nesto ne raboti, zatoa pod nego so for e resena
    // const femaleStudentsOver24 = parsed.filter(student => student.gender === 'Female' && student.age > 24);
    // const avGrade = femaleStudentsOver24.reduce((acc, student) => acc + student.grade, 0) / femaleStudentsOver24.length;
    // document.getElementById("femSt").innerHTML = `Female Students and averige grade, age>24 ${avGrade.toFixed(2)}`;

    for (let i = 0; i < parsed.length; i++) {
        if (parsed[i].age >= 24 && parsed[i].gender == 'Female') {
                    female.innerHTML += `${parsed[i].firstName} ${parsed[i].averageGrade} <br>`;
                }
            }



      const sortBy = property => (a, b) => a[property].localeCompare(b[property]);
      const sortedSt = parsed.sort(sortBy("lastName"));
      for (let i = 0; i < sortedSt.length; i++) {
     sorte.innerHTML += `${sortedSt[i].lastName}  <br/>`;
    
    }

} 
student();




// for (let i = 0; i < parsed.length; i++) {
    //     if (parsed[i].averageGrade === 5 && parsed[i].gender == 'Female') {
    //         display.innerHTML += `${parsed[i].firstName} ${parsed[i].lastName} <br>`;
    //     }
    //     if(parsed[i].gender == 'Male' && parsed[i].age >= 18 && parsed[i].city == 'Skopje'){
    //         male.innerHTML += `${parsed[i].firstName} ${parsed[i].lastName} <br>`;
    //     }
    //     if (parsed[i].age >= 24 && parsed[i].gender == 'Female') {
    //         female.innerHTML += `${parsed[i].firstName} ${parsed[i].averageGrade} <br>`;
    //     }
    //   }

// sortirana.sort(function(a, b) {
//     let lastA = a.lastName.toLowerCase();
//     let lastB = b.lastName.toLowerCase();
//     if (lastA < lastB) {
//         return -1;
//     }
//     if (lastA > lastB) {
//         return 1;
//     }
  
// });
// for (let i = 0; i < sortirana.length; i++) {
//     sorted.innerHTML += `${sortirana[i].lastName}  <br/>`;
    
//     }
// }



//   for(let i=0; i < parsed.length; i++){
    //     if(parsed[i].gender == 'Male' && parsed[i].age >= 18 && parsed[i].city == 'Skopje'){
    //         male.innerHTML += `${parsed[i].firstName} ${parsed[i].lastName} <br>`;
    //     }
    // }
    // for (let i = 0; i < parsed.length; i++) {
    //     if (parsed[i].age >= 24 && parsed[i].gender == 'Female') {
    //         female.innerHTML += `${parsed[i].firstName} ${parsed[i].averageGrade} <br>`;
    //     }
    //   }