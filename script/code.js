// about section
let about = document.querySelector('section#about .row:last-child');
let aboutContents = ["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, eius. Architecto repudiandae tempore vel quaerat molestias voluptatem, nemo nobis veritatis est numquam dolorem earum perferendis quae voluptate? Aliquam, similique molestias?",
"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, eius. Architecto repudiandae tempore vel quaerat molestias voluptatem, nemo nobis veritatis est numquam dolorem earum perferendis quae voluptate? Aliquam, similique molestias?"
]
// loop through the contents
aboutContents.forEach( (content, i)=>{
    about.innerHTML +=`
        <p class='lead'>${content}</p>
        `
} )
let education = [
    {
        id: 1,
        year: 2020,
        description: 'I got my certificates on Data science',
        place: 'Data Camp',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 2,
        year: 2019,
        description: 'I got my certificates on Advanced to Python',
        place: 'Data Camp',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 3,
        year: 2018,
        description: 'I got my certificates on Intro to Python',
        place: 'Data Camp',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 4,
        year: 2015,
        description: 'I got my certificate on Intro to Android Developer',
        place: 'Study Jams',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 5,
        year: 2014,
        description: 'I got my diploma on Software Engineering',
        place: 'Tshwane University of Technology',
        type: 'Diploma',
        certificate: ''
    },
    {
        id: 6,
        year: 2005,
        description: 'Completed my course on PC Engineering',
        place: 'Havatech',
        type: 'Certificate',
        certificate: ''
    },
    {
        id: 7,
        year: 2000,
        description: 'Grade 12',
        place: '',
        type: 'Certificate',
        certificate: ''
    },
]
//
let divEducation = document.querySelector('.education');
education.forEach((data)=> {
    divEducation.innerHTML += `
    <div class="card">
        <h4 class="display-4">${data.year}</h4>
        <div class="card-body">
            <p class="text-white">
                ${data.description} @ <span>${data.place}</span> 
                <a href="${data.certificate}" target="_blank">${data.type}</a>
            </p>
        </div>
    </div>
    `})