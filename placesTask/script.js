const places = document.querySelector(".card-group")


function createCard([img, title, description]) {
    let code = `
    <div class="col-12 col-xl-3 col-lg-4 col-md-6 ">
    <div class="card cardview text-center justify-content-center align-content-center  ">
  
        <img src="${img}"
            class="card-img-top images" alt="..." data-bs-toggle="modal" data-bs-target="#myModal" >
        <div  class="card-body "  data-bs-toggle="modal" data-bs-target="#myModal" >   
            <h6 class="card-subtitle mb-2 text-uppercase color ">${title}</h6>
            <p class="card-text medium-size" >${description} </p>
            <div class="row ">
                <div class="col-lg-6 info">
                
                    <i class=" card-text  fa-calendar text-start text-muted small-size">
                        Aug5,2013
                    </i>
                    

                </div>
                <div class="col-lg-6 info-right">
                    <i class=" card-text fa fa-comments-o text-start text-muted small-size text-lowercase">

                        8 comments
                    </i>

                </div>

            </div>



        </div>
    </div>


</div>  


    `;
    places.innerHTML += code;


}

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('button')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
let Places = [
    [

        'https://th.bing.com/th/id/OIP.XIjw4pDTqHMTubCeLzP17QHaEK?w=257&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
        'egypt tangbia',
        'Thi lead-longerng text below as a natural lead-in to additional'


    ],
    [

        'https://www.bing.com/th?id=OIP.KPDVBgo5D90rqX5lL6apYAHaFj&w=146&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
        'olling phisotip',
        'Thi lead-longerng text below as a natural lead-in to additional'


    ]
    , [

        'https://www.bing.com/th?id=OIP.YOMCvmZW6LdoAWpbY1SrIwHaFj&w=146&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
        'Cortia dyna',
        'Thi lead-longerng text below as a natural lead-in to additional'


    ]
    , [

        'https://th.bing.com/th/id/OIP.3Ufwh0Gcpv3m7WY8EjFE3AHaE8?w=242&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
        'sysne of dubai',
        'Thi lead-longerng text below as a natural lead-in to additional'


    ]
    , [

        'https://th.bing.com/th/id/OIP.z8P0HCP7RuQb28YJDgyRGgHaEa?w=245&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
        'olling phisottip',
        'Thi lead-longerng text below as a natural lead-in to additional'


    ]
    , [

        'https://th.bing.com/th/id/OIP.Y7sV6XXxIWxhKFlZAxqeZQHaE7?w=259&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
        'Cortia dyna',
        'Thi lead-longerng text below as a natural lead-in to additional'


    ]
    , [

        'https://th.bing.com/th/id/OIP.HmLht75CxkFhK5WH-GEVWwHaE8?w=219&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
        'egypt tangbia',
        'Thi lead-longerng text below as a natural lead-in to additional'


    ]
    , [

        'https://th.bing.com/th/id/OIP.HmLht75CxkFhK5WH-GEVWwHaE8?w=219&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
        'sysne of dubai',
        'Thi lead-longerng text below as a natural lead-in to additional'


    ]
    , [

        'https://th.bing.com/th?q=Summer+Mexico+Wallpaper&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-XA&cc=EG&setlang=en&adlt=strict&t=1&mw=247',
        'egypt tangbia',
        'Thi lead-longerng text below as a natural lead-in to additional'


    ]
    , [

        'https://th.bing.com/th/id/OIP.2ga03XvoTGJXP2ExPXKYwQHaFj?pid=ImgDet&w=178&h=133&c=7&dpr=1.5',
        'egypt tangbia',
        'Thi lead-longerng text below as a natural lead-in to additional'


    ]
    , [

        'https://th.bing.com/th/id/OIP.XIjw4pDTqHMTubCeLzP17QHaEK?w=257&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
        'egypt tangbia',
        'Thi lead-longerng text below as a natural lead-in to additional'


    ]
    , [

        'https://th.bing.com/th/id/OIP.XIjw4pDTqHMTubCeLzP17QHaEK?w=257&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
        'egypt tangbia',
        'Thi lead-longerng text below as a natural lead-in to additional'


    ]



];


for (var prop in Places) {
    createCard(Places[prop]);
}

