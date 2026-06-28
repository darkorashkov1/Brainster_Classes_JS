// Literal type
// const number: `+389${number}` | `00389${number}` = '+389713194567'

// Exercise
// interface User {
//     "id": number,
//     "name": string,
//     "username": string,
//     "email": string,
//     "address": {
//       "street": string,
//       "suite": string,
//       "city": string,
//       "zipcode": string,
//       "geo": {
//         "lat": string,
//         "lng": string
//       }
//     },
//     "phone": string,
//     "website": string,
//     "company": {
//       "name": string,
//       "bs": string
//     }
//   }

//   const tBody = document.querySelector('tbody')

//   fetch(`https://jsonplaceholder.typicode.com/users`)
//   .then((res) => res.json())
//   .then((data: Array<User>) => {
// data.forEach(user => {
//   const tr = document.createElement('tr')

//     const nameTd = document.createElement('td')
//     const emailTd = document.createElement('td')
//     const phoneTd = document.createElement('td')

//     nameTd.innerText = user.name
//     emailTd.innerText = user.email
//     phoneTd.innerText = user.phone

//     tr.append(nameTd, emailTd, phoneTd)

//   tBody?.append(tr)
// })
//   })

  // Generic type
  // function findElementInArray<T>(array: T[], element: T){
  //   return array.find((el) => el === element)
  // }
  // const res = findElementInArray([1,2,3,4], 4)
  // const res1 = findElementInArray(['Bitola', 'Shtip'], 'Skopje')

  // console.log(res);


  // Function return type

  // function add(a: number, b: number) {
  //   return a + b
  // }

  // void

  // function log() {
  //   console.log('Something');
  // }
  // log()

  // Unknown
  // let input: unknown
  // let firstName: string
  // let age: number

  // input = "brainster"
  // input === 100

  // if (typeof input === "string") {
  //   firstName = input
  // } else if (typeof input === 'number') {
  //   age = input
  // }

  // // Throw
  // function divide (a: number, b: number) {
  //   if (b===0) {
  //     throw new Error ('You cannot divide by 0')
  //   }
  //   return a/b
  // }

  // Exercise 2 + 3

  interface Album {
    userId: number;
    id: number;
    title: string;
  }

  interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string
  }

  const albumContainer = document.querySelector('#albumContainer')
  const photosContainer = document.querySelector('#photosContainer')
  const removePhotos = document.querySelector('#removePhotos')

  fetch('https://jsonplaceholder.typicode.com/albums')
  .then((res) => res.json())
  .then((data: Album[]) => {
    data.forEach(album => {

      const div = document.createElement('div')
      div.id = album.id.toString();
      div.innerText = album.title
      div.style.width = '200px';
      div.style.height = '200px';
      div.style.border = '2px solid black';

      div.addEventListener('click', ()=> {
        fetch(`https://jsonplaceholder.typicode.com/albums/${album.id}/photos`)
        .then((res) => res.json())
        .then((photos: Photo[]) => {
          photos.forEach(photo => {
            const img = document.createElement('img')
            img.src = photo.thumbnailUrl
            img.style.width = '150px'
            img.style.height = '150px'

            photosContainer?.append(img)
          })
        })
      })

      albumContainer?.append(div)
    })
  });

  removePhotos?.addEventListener('click', () => {
    if (photosContainer) {
      photosContainer.innerHTML = ''
    }
  })
